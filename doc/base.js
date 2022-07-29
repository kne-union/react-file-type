
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
