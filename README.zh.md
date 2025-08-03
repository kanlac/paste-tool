# Paste Link

**[English](README.md)** 

一个 Raycast 文本分析扩展，自动将文本转换为 Markdown 链接格式。

## 背景

我运营了一个写作小组，经常需要整理大家在群聊中分享的文章标题和链接。为了简化工作流程，我开发了这个工具，可以一键将文本转换为 Markdown 链接格式，方便汇总到 Notion 等笔记工具中。

## 使用方法

### 安装步骤

1. 克隆项目到本地
   ```bash
   git clone https://github.com/your-username/paste-link.git
   cd paste-link
   ```

2. 安装依赖并构建扩展
   ```bash
   npm install && npm run build
   ```

3. 在 Raycast 中导入扩展
   - 打开 Raycast
   - 进入 Extensions 设置
   - 点击 "Import Extension"
   - 选择项目目录

### 使用步骤

1. 绑定快捷键（推荐：`Ctrl + Option + V`）
2. 复制包含标题和链接的文本
3. 使用快捷键粘贴，自动转换为 Markdown 链接

## 支持的输入格式

工具支持多种文本格式，包括：

- `《美好的一天》https://myblog.com/nice-day`
- `〈美好的一天〉https://myblog.com/nice-day`
- `美好的一天https://myblog.com/nice-day`
- ` 美好的一天   https://myblog.com/nice-day`

## 输出格式

所有输入格式都会统一转换为标准的 Markdown 链接格式：

```
[美好的一天](https://myblog.com/nice-day)
```
