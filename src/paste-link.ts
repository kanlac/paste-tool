import { showHUD, Clipboard } from "@raycast/api";
import { transformToMarkdownLink } from "./transform-to-markdown-link";

export default async function main() {
  // 从剪贴板读取文本，如果为空则返回空字符串
  const clipboardText = (await Clipboard.readText()) || "";

  // 调用提取出的纯函数进行转换
  const modifiedClipboardText = transformToMarkdownLink(clipboardText);

  // 如果内容有变化，则粘贴并提示
  if (clipboardText !== modifiedClipboardText) {
    await Clipboard.paste(modifiedClipboardText);
    await showHUD("格式转换完成");
  } else {
    await showHUD(`未找到匹配格式的内容`);
  }
}