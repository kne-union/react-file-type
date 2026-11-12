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
