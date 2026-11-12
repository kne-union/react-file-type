<!--START_SECTION:DOC_MD-->

# react-file-type

### 描述

显示文件类型图标

### 安装

```shell
npm i --save @kne/react-file-type
```

### 概述

根据文件后缀名显示对应的文件图标组件，支持 19 种常见文件格式（含 mp3 等音频格式）。


### 示例

#### 示例代码

- 基本用法
- 支持19种文件格式，包括：doc | docx | gif | html | jpg | md | mp3 | mp4 | pdf | png | ppt | pptx | rar | svg | txt | xls | xlsx | zip
- fileType(@kne/current-lib_react-file-type),space(antd/lib/space)

```jsx
const { default: FileType } = fileType;
const { default: Space } = space;
const BaseExample = () => {
  return (
    <Space direction="vertical" size="large">
      <div>
        <div style={{ marginBottom: 12, fontWeight: 'bold' }}>支持的文件格式：</div>
        <Space wrap>
          <FileType type="doc" />
          <FileType type="docx" />
          <FileType type="gif" />
          <FileType type="html" />
          <FileType type="jpg" />
          <FileType type="md" />
          <FileType type="mp3" />
          <FileType type="mp4" />
          <FileType type="pdf" />
          <FileType type="png" />
          <FileType type="ppt" />
          <FileType type="pptx" />
          <FileType type="rar" />
          <FileType type="svg" />
          <FileType type="txt" />
          <FileType type="xls" />
          <FileType type="xlsx" />
          <FileType type="zip" />
        </Space>
      </div>
      <div>
        <div style={{ marginBottom: 12, fontWeight: 'bold' }}>音频格式（共用音频图标）：</div>
        <Space wrap>
          <FileType type="mp3" />
          <FileType type="wav" />
          <FileType type="m4a" />
          <FileType type="aac" />
          <FileType type="flac" />
          <FileType type="MP3" />
        </Space>
      </div>
      <div>
        <div style={{ marginBottom: 12, fontWeight: 'bold' }}>自定义尺寸：</div>
        <Space>
          <FileType type="doc" size={30} />
          <FileType type="doc" size={40} />
          <FileType type="doc" size={50} />
          <FileType type="doc" size={60} />
        </Space>
      </div>
      <div>
        <div style={{ marginBottom: 12, fontWeight: 'bold' }}>不支持的文件格式：</div>
        <FileType type="msg" />
      </div>
    </Space>
  );
};

render(<BaseExample />);

```

### API

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文件后缀名 | string | unknow |
| size | 图标大小 | number | 40 |

#### type 支持的文件类型

- `doc` - Word 文档
- `docx` - Word 文档
- `gif` - GIF 图片
- `html` - HTML 文件
- `jpg` - JPG 图片
- `md` - Markdown 文件
- `mp3` - 音频文件
- `mp4` - MP4 视频
- `pdf` - PDF 文档
- `png` - PNG 图片
- `ppt` - PowerPoint 演示文稿
- `pptx` - PowerPoint 演示文稿
- `rar` - RAR 压缩包
- `svg` - SVG 矢量图
- `txt` - 纯文本文件
- `xls` - Excel 表格
- `xlsx` - Excel 表格
- `zip` - ZIP 压缩包

音频类扩展名 `wav`、`m4a`、`aac`、`ogg`、`flac`、`amr`、`wma` 与 `mp3` 共用同一个音频图标。

扩展名不区分大小写，`MP3`、`MP4`、`JPG` 等大写写法同样能匹配到对应图标。

其他不支持的文件类型将显示为通用图标。

<!--END_SECTION:DOC_MD-->
