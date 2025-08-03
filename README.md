# Paste Link

**[中文](README.zh.md)**

A Raycast extension that automatically converts text to Markdown link format.

## Background

I run a writing group and frequently need to organize article titles and links shared in our group chat. To streamline this workflow, I developed this tool that can instantly convert text to Markdown link format, making it easy to compile into note-taking tools like Notion.

## Usage

### Installation Steps

1. Clone the project to your local machine
   ```bash
   git clone https://github.com/your-username/paste-link.git
   cd paste-link
   ```

2. Install dependencies and build the extension
   ```bash
   npm install && npm run build
   ```

3. Import the extension in Raycast
   - Open Raycast
   - Go to Extensions settings
   - Click "Import Extension"
   - Select the project directory

### Usage Steps

1. Bind a keyboard shortcut (recommended: `Ctrl + Option + V`)
2. Copy text containing title and link
3. Use the shortcut to paste, automatically converting to Markdown link

## Supported Input Formats

The tool supports various text formats, including:

- `《A Beautiful Day》https://myblog.com/nice-day`
- `〈A Beautiful Day〉https://myblog.com/nice-day`
- `A Beautiful Dayhttps://myblog.com/nice-day`
- `  A Beautiful Day   https://myblog.com/nice-day`

## Output Format

All input formats will be uniformly converted to standard Markdown link format:

```
[A Beautiful Day](https://myblog.com/nice-day)
```
