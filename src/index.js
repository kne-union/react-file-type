import React from 'react';
import Icon from "./icon";

const FileType = (p) => {
    const {size, type} = Object.assign({}, {
        size: 40, type: "unknow"
    }, p);
    const IconComponent = Icon[type] || Icon['unknow'];
    return <IconComponent width={size} height={size}/>;
};

export default FileType;
