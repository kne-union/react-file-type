
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
- FileType(@kne/react-file-type)

```jsx

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

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |
|  type  | 文件后缀名  | doc &#124; docx &#124; gif &#124; jpg &#124; mp4 &#124; pdf &#124; png &#124; ppt &#124; pptx &#124; rar &#124; svg &#124; xls &#124; xlsx &#124; zip | unknow |

