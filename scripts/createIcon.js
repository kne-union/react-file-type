const { transform } = require("@svgr/core");
const fs = require("fs-extra");
const path = require("path");

(async () => {
  const list = await fs.readdir(path.resolve(__dirname, "./icon"));
  const computedIconName = (name) => {
    const fileName = name.replace(/\.svg/, "");
    return {
      componentName: fileName.charAt(0).toUpperCase() + fileName.slice(1) + "Icon", typeName: fileName
    };
  };
  let indexCode = list.map((name) => `import ${computedIconName(name).componentName} from './${computedIconName(name).typeName}';`).join("\n") + `\n\nexport default {
  ${list.map(name => `"${computedIconName(name).typeName}":${computedIconName(name).componentName}`).join(",\n  ")}
  };`;

  const targetDir = path.resolve(__dirname, "../src/icon");
  await fs.emptyDir(targetDir);

  await fs.writeFile(path.resolve(targetDir, "index.js"), indexCode);

  await Promise.all(list.map(async (name) => {
    const svgCode = await fs.readFile(path.resolve(__dirname, "./icon", name), "utf8");
    const jsCode = await transform(svgCode, { icon: true }, { componentName: computedIconName(name).componentName });
    await fs.writeFile(path.resolve(targetDir, name.replace(/\.svg/, ".js")), jsCode);
  }));
})();

