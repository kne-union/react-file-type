import * as component_3 from '@kne/react-file-type';
import * as component_4 from 'antd/lib/space';
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
<tr>
<td>size</td>
<td>图标大小</td>
<td>number</td>
<td>40</td>
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
    code: `const {default: FileType} = fileType;
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

`,
    scope: [{
    name: "fileType",
    packageName: "@kne/react-file-type",
    component: component_3
},{
    name: "space",
    packageName: "antd/lib/space",
    component: component_4
}]
}]
    }
};
export default readmeConfig;
