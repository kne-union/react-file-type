import * as component_25 from '@kne/react-file-type';
const readmeConfig = {
    name: `@kne/react-file-type`,
    description: `显示文件类型图标`,
    summary: `<p>根据文件后缀名显示对应的文件图标</p>`,
    api: `<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>文件后缀名</td>
<td>doc | docx | gif | jpg | mp4 | pdf | png | ppt | pptx | rar | svg | xls | xlsx | zip</td>
<td>unknow</td>
</tr>
</tbody>
</table>`,
    example: {
        isFull: false,
        className: `react_file_type_90c53`,
        style: ``,
        list: [{
    title: `基本：`,
    description: `支持14种文件格式，如：doc | docx | gif | jpg | mp4 | pdf | png | ppt | pptx | rar | svg | xls | xlsx | zip`,
    code: `
const BaseExample = () => {
    return <div>
        <div>
            加载PDF文件：
        </div>
        <div>
            <FileType type="pdf" />
        </div>
        <div>
            不支持的文件格式显示如下：

        </div>
        <div>
            <FileType type="msg" />
        </div>
    </div>;
};

render(<BaseExample />);

`,
    scope: [{
    name: "FileType",
    packageName: "@kne/react-file-type",
    component: component_25
}]
}]
    }
};
export default readmeConfig;
