| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文件后缀名 | string | unknow |
| size | 图标大小 | number | 40 |

### type 支持的文件类型

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
