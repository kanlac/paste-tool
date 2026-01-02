import { Clipboard, getSelectedText, showHUD } from "@raycast/api";

function formatCurrentTime(date: Date): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${hours}:${minutes}`;
}

export default async function main() {
  let selectedText = "";
  try {
    selectedText = await getSelectedText();
  } catch {
    await showHUD("未找到选中文本");
    return;
  }

  if (!selectedText) {
    await showHUD("未找到选中文本");
    return;
  }

  const timestamp = formatCurrentTime(new Date());
  const formattedText = `${timestamp}\n⁍⁍⁍\n${selectedText}\n⁌⁌⁌\n`;

  await Clipboard.paste(formattedText);
  await showHUD("已粘贴引用块");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  await sleep(200);
  await Clipboard.copy(selectedText);
}
