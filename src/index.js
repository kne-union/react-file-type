import React from 'react';
import Icon from "./icon";

const FileType = ({ type, size }) => {
  const IconComponent = Icon[type]||Icon['unknow'];
  return <IconComponent width={size} height={size} />;
};

FileType.defaultProps = {
  size: 40, type: "unknow"
};

export default FileType;