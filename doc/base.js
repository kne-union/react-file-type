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
