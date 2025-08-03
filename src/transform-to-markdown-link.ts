/**
 * 将格式为"《任意文字》https://someaddr.com"的字符串转换为 Markdown 链接"[任意文字](https://someaddr.com)"。
 * 如果输入字符串不匹配该格式，则原样返回。
 * @param text 输入的字符串
 * @returns 转换后的 Markdown 链接字符串，或原始字符串
 */
export function transformToMarkdownLink(text: string): string {
  if (!text) {
    return "";
  }
  // 正则表达式：匹配格式《any text》https://someaddr.com
  // \s* 匹配开头和结尾的任意空白字符
  // 《(.*?)》 非贪婪匹配书名号内的任何文本作为标题
  // .* 匹配标题和 URL 之间的任意字符
  // (https?:\/\/\S+) 匹配 http 或 https 开头的 URL
  const regex = /^\s*《(.*?)》.*(https?:\/\/\S+)\s*$/;

  const modifiedText = text.replace(regex, (match, title, url) => {
    return `[${title}](${url})`;
  });

  return modifiedText;
} 