/**
 * 将多种格式的字符串转换为 Markdown 链接。
 * 支持的格式：
 * 1. 《标题》https://example.com
 * 2. 〈标题〉https://example.com  
 * 3. 标题https://example.com
 * 4. 标题  https://example.com
 * 如果输入字符串不匹配任何格式，则原样返回。
 * @param text 输入的字符串
 * @returns 转换后的 Markdown 链接字符串，或原始字符串
 */
export function transformToMarkdownLink(text: string): string {
  if (!text) {
    return "";
  }
  
  // 支持多种格式的正则表达式：
  // 1. 《标题》https://example.com
  // 2. 〈标题〉https://example.com  
  // 3. 标题https://example.com
  // 4. 标题  https://example.com
  
  // 匹配带书名号的格式：《标题》或〈标题〉
  const bracketRegex = /^\s*[《〈](.*?)[》〉].*(https?:\/\/\S+)\s*$/;
  
  // 匹配不带括号的格式：标题 + URL
  const noBracketRegex = /^\s*(.+?)\s*(https?:\/\/\S+)\s*$/;
  
  // 先尝试匹配带括号的格式
  let match = text.match(bracketRegex);
  if (match) {
    const [, title, url] = match;
    return `[${title}](${url})`;
  }
  
  // 再尝试匹配不带括号的格式
  match = text.match(noBracketRegex);
  if (match) {
    const [, title, url] = match;
    return `[${title.trim()}](${url})`;
  }
  
  // 如果都不匹配，返回原字符串
  return text;
} 