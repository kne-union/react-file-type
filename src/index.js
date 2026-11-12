import React from 'react';
import Icon from "./icon";

// 音频类扩展名共用同一个音频图标（图标集里只维护了 mp3 一个音频字形）
const AUDIO_TYPES = ["mp3", "wav", "m4a", "aac", "ogg", "flac", "amr", "wma"];

const FileType = (p) => {
    const {size, type} = Object.assign({}, {
        size: 40, type: "unknow"
    }, p);
    // 文件列表直接取扩展名原文，".MP4" / ".JPG" 这类大写同样常见
    const normalizedType = typeof type === "string" ? type.toLowerCase() : type;
    const IconComponent = Icon[AUDIO_TYPES.includes(normalizedType) ? "mp3" : normalizedType] || Icon['unknow'];
    return <IconComponent width={size} height={size}/>;
};

export default FileType;
