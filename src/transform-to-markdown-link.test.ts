import { transformToMarkdownLink } from "./transform-to-markdown-link";

// 1. 定义测试用例表
const testCases = [
  // 原有的书名号格式测试用例
  {
    name: "标准情况",
    input: "《一个很棒的标题》https://example.com",
    expected: "[一个很棒的标题](https://example.com)",
  },
  {
    name: "前后有空格",
    input: "  《带空格的标题》 https://sub.domain.org/path  ",
    expected: "[带空格的标题](https://sub.domain.org/path)",
  },
  {
    name: "标题和链接之间有额外文字",
    input: "《另一个标题》 这是中间的描述文字 https://anotherexample.com/query?a=1",
    expected: "[另一个标题](https://anotherexample.com/query?a=1)",
  },
  {
    name: "HTTP 协议",
    input: "《HTTP 网站》http://example.com",
    expected: "[HTTP 网站](http://example.com)",
  },
  {
    name: "空标题",
    input: "《》https://example.com/empty",
    expected: "[](https://example.com/empty)",
  },
  
  // 新增的尖括号格式测试用例
  {
    name: "尖括号格式",
    input: "〈美好的一天〉https://myblog.com/nice-day",
    expected: "[美好的一天](https://myblog.com/nice-day)",
  },
  {
    name: "尖括号格式带空格",
    input: "  〈带空格的标题〉 https://example.com  ",
    expected: "[带空格的标题](https://example.com)",
  },
  {
    name: "尖括号格式带额外文字",
    input: "〈标题〉 描述文字 https://example.com",
    expected: "[标题](https://example.com)",
  },
  
  // 新增的无括号格式测试用例
  {
    name: "无括号格式",
    input: "美好的一天https://myblog.com/nice-day",
    expected: "[美好的一天](https://myblog.com/nice-day)",
  },
  {
    name: "无括号格式带空格",
    input: " 美好的一天   https://myblog.com/nice-day",
    expected: "[美好的一天](https://myblog.com/nice-day)",
  },
  {
    name: "无括号格式带额外空格",
    input: "标题文字    https://example.com",
    expected: "[标题文字](https://example.com)",
  },
  
  // 边界情况测试用例
  {
    name: "不匹配的格式 - 只有标题",
    input: "《只有一个标题》",
    expected: "《只有一个标题》", // 应返回原字符串
  },
  {
    name: "不匹配的格式 - 纯文本",
    input: "Hello World",
    expected: "Hello World", // 应返回原字符串
  },
  {
    name: "不匹配的格式 - 链接在前面",
    input: "https://example.com《标题在后》",
    expected: "https://example.com《标题在后》", // 应返回原字符串
  },
  {
    name: "空字符串输入",
    input: "",
    expected: "", // 应返回空字符串
  },
];

// 2. 编写测试运行器来遍历并执行所有测试用例
describe("transformToMarkdownLink", () => {
  test.each(testCases)("$name", ({ input, expected }) => {
    // 执行函数并断言结果是否符合预期
    expect(transformToMarkdownLink(input)).toBe(expected);
  });
});