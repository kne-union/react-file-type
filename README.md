
# react-file-type


### 描述

显示文件类型图标


### 安装

```shell
npm i --save @kne/react-file-type
```


### 概述

根据文件后缀名显示对应的文件图标

### 示例

#### 示例代码

- 基本：
- 支持14种文件格式，如：doc | docx | gif | jpg | mp4 | pdf | png | ppt | pptx | rar | svg | xls | xlsx | zip
- fileType(@kne/current-lib_react-file-type),space(antd/lib/space)

```jsx
const {default: FileType} = fileType;
const {default: Space} = space;
const BaseExample = () => {
    return <Space direction="vertical">
        <div>
            加载PDF文件：
        </div>
        <Space>
            <FileType type="doc"/>
            <FileType type="docx"/>
            <FileType type="gif"/>
            <FileType type="jpg"/>
            <FileType type="mp4"/>
            <FileType type="pdf"/>
            <FileType type="png"/>
            <FileType type="ppt"/>
            <FileType type="pptx"/>
            <FileType type="rar"/>
            <FileType type="svg"/>
            <FileType type="xls"/>
            <FileType type="xlsx"/>
            <FileType type="zip"/>
        </Space>
        <Space direction="vertical">
            <div>自定义尺寸:</div>
            <Space>
                <FileType type="doc" size={30}/>
                <FileType type="doc" size={40}/>
                <FileType type="doc" size={50}/>
            </Space>
        </Space>
        <div>
            不支持的文件格式显示如下：
        </div>
        <div>
            <FileType type="msg"/>
        </div>
    </Space>;
};

render(<BaseExample/>);

```


### API

|属性名|说明|类型| 默认值    |
|  ---  | ---  | --- |--------|
|  type  | 文件后缀名  | doc &#124; docx &#124; gif &#124; jpg &#124; mp4 &#124; pdf &#124; png &#124; ppt &#124; pptx &#124; rar &#124; svg &#124; xls &#124; xlsx &#124; zip | unknow |
| size| 图标大小| number| 40     |

