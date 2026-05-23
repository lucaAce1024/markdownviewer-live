#!/usr/bin/env node
/**
 * Script to add "defaultTemplate" key to all 15 i18n JSON files.
 * Each template is a full translation of the English sample markdown.
 */
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, 'i18n');

// The English template (exact copy from script.js sampleMarkdown)
const enTemplate = `---
title: Welcome to Markdown Viewer
description: A GitHub-style Markdown renderer with live preview, math, diagrams, and export support.
author: ThisIs-Developer
tags: ["markdown", "preview", "mermaid", "latex", "open-source"]
---

# Welcome to Markdown Viewer

## ✨ Key Features
- **Live Preview** with GitHub styling
- **Smart Import/Export** (MD, HTML, PDF)
- **Mermaid Diagrams** for visual documentation
- **LaTeX Math Support** for scientific notation
- **Emoji Support** 😄 👍 🎉

## 💻 Code with Syntax Highlighting
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Mathematical Expressions
Write complex formulas with LaTeX syntax:

Inline equation: $$E = mc^2$$

Display equations:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid Diagrams
Create powerful visualizations directly in markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Sequence Diagram Example
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Task Management
- [x] Create responsive layout
- [x] Implement live preview with GitHub styling
- [x] Add syntax highlighting for code blocks
- [x] Support math expressions with LaTeX
- [x] Enable mermaid diagrams

## 🆚 Feature Comparison

| Feature                  | Markdown Viewer (Ours) | Other Markdown Editors  |
|:-------------------------|:----------------------:|:-----------------------:|
| Live Preview             | ✅ GitHub-Styled       | ✅                     |
| Sync Scrolling           | ✅ Two-way             | 🔄 Partial/None        |
| Mermaid Support          | ✅                     | ❌/Limited             |
| LaTeX Math Rendering     | ✅                     | ❌/Limited             |

### 📝 Multi-row Headers Support

<table>
  <thead>
    <tr>
      <th rowspan="2">Document Type</th>
      <th colspan="2">Support</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Ours)</th>
      <th>Other Markdown Editors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Technical Docs</td>
      <td>Full + Diagrams</td>
      <td>Limited/Basic</td>
    </tr>
    <tr>
      <td>Research Notes</td>
      <td>Full + Math</td>
      <td>Partial</td>
    </tr>
    <tr>
      <td>Developer Guides</td>
      <td>Full + Export Options</td>
      <td>Basic</td>
    </tr>
  </tbody>
</table>

## 📝 Text Formatting Examples

### Text Formatting

Text can be formatted in various ways for ~~strikethrough~~, **bold**, *italic*, or ***bold italic***.

For highlighting important information, use <mark>highlighted text</mark> or add <u>underlines</u> where appropriate.

### Superscript and Subscript

Chemical formulas: H<sub>2</sub>O, CO<sub>2</sub>  
Mathematical notation: x<sup>2</sup>, e<sup>iπ</sup>

### Keyboard Keys

Press <kbd>Ctrl</kbd> + <kbd>B</kbd> for bold text.

### Abbreviations

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Text Alignment

<div style="text-align: center">
Centered text for headings or important notices
</div>

<div style="text-align: right">
Right-aligned text (for dates, signatures, etc.)
</div>

### **Lists**

Create bullet points:
* Item 1
* Item 2
  * Nested item
    * Nested further

### **Links and Images**

Add a [link](https://github.com/ThisIs-Developer/Markdown-Viewer) to important resources.

Embed an image:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Blockquotes**

Quote someone famous:
> "The best way to predict the future is to invent it." - Alan Kay

---

## 🛡️ Security Note

This is a fully client-side application. Your content never leaves your browser and stays secure on your device.`;

// ============================================================
// Translated templates for all languages
// ============================================================

const templates = {
  en: enTemplate,

  zh: `---
title: 欢迎使用 Markdown 查看器
description: GitHub 风格的 Markdown 渲染器，支持实时预览、数学公式、图表和导出功能。
author: ThisIs-Developer
tags: ["markdown", "预览", "mermaid", "latex", "开源"]
---

# 欢迎使用 Markdown 查看器

## ✨ 主要功能
- **实时预览**，采用 GitHub 样式
- **智能导入/导出**（MD、HTML、PDF）
- **Mermaid 图表**，用于可视化文档
- **LaTeX 数学支持**，用于科学记数法
- **Emoji 支持** 😄 👍 🎉

## 💻 代码语法高亮
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 数学表达式
使用 LaTeX 语法编写复杂公式：

行内公式：$$E = mc^2$$

行间公式：
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid 图表
直接在 Markdown 中创建强大的可视化效果：

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### 序列图示例
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 任务管理
- [x] 创建响应式布局
- [x] 实现 GitHub 样式实时预览
- [x] 添加代码块语法高亮
- [x] 支持 LaTeX 数学表达式
- [x] 启用 Mermaid 图表

## 🆚 功能对比

| 功能                     | Markdown 查看器（我们的） | 其他 Markdown 编辑器     |
|:-------------------------|:----------------------:|:-----------------------:|
| 实时预览                 | ✅ GitHub 样式          | ✅                     |
| 同步滚动                 | ✅ 双向同步              | 🔄 部分/无             |
| Mermaid 支持             | ✅                     | ❌/有限                |
| LaTeX 数学渲染           | ✅                     | ❌/有限                |

### 📝 多行表头支持

<table>
  <thead>
    <tr>
      <th rowspan="2">文档类型</th>
      <th colspan="2">支持情况</th>
    </tr>
    <tr>
      <th>Markdown 查看器（我们的）</th>
      <th>其他 Markdown 编辑器</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>技术文档</td>
      <td>完整 + 图表</td>
      <td>有限/基础</td>
    </tr>
    <tr>
      <td>研究笔记</td>
      <td>完整 + 数学</td>
      <td>部分</td>
    </tr>
    <tr>
      <td>开发指南</td>
      <td>完整 + 导出选项</td>
      <td>基础</td>
    </tr>
  </tbody>
</table>

## 📝 文本格式示例

### 文本格式

文本可以通过多种方式格式化：~~删除线~~、**粗体**、*斜体*或***粗斜体***。

要突出显示重要信息，请使用<mark>高亮文本</mark>或在适当位置添加<u>下划线</u>。

### 上标和下标

化学公式：H<sub>2</sub>O, CO<sub>2</sub>  
数学符号：x<sup>2</sup>, e<sup>iπ</sup>

### 键盘按键

按 <kbd>Ctrl</kbd> + <kbd>B</kbd> 加粗文本。

### 缩写

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### 文本对齐

<div style="text-align: center">
居中文本，用于标题或重要通知
</div>

<div style="text-align: right">
右对齐文本（用于日期、签名等）
</div>

### **列表**

创建项目符号列表：
* 项目 1
* 项目 2
  * 嵌套项目
    * 进一步嵌套

### **链接和图片**

添加[链接](https://github.com/ThisIs-Developer/Markdown-Viewer)到重要资源。

嵌入图片：
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **引用**

引用名人名言：
> "预测未来的最好方式就是创造未来。" - 艾伦·凯

---

## 🛡️ 安全说明

这是一个完全在客户端运行的应用程序。您的内容永远不会离开您的浏览器，并安全地保存在您的设备上。`,

  'zh-TW': `---
title: 歡迎使用 Markdown 檢視器
description: GitHub 風格的 Markdown 渲染器，支援即時預覽、數學公式、圖表和匯出功能。
author: ThisIs-Developer
tags: ["markdown", "預覽", "mermaid", "latex", "開源"]
---

# 歡迎使用 Markdown 檢視器

## ✨ 主要功能
- **即時預覽**，採用 GitHub 樣式
- **智慧匯入/匯出**（MD、HTML、PDF）
- **Mermaid 圖表**，用於視覺化文件
- **LaTeX 數學支援**，用於科學記號
- **Emoji 支援** 😄 👍 🎉

## 💻 程式碼語法高亮
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 數學表達式
使用 LaTeX 語法編寫複雜公式：

行內公式：$$E = mc^2$$

區塊公式：
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid 圖表
直接在 Markdown 中建立強大的視覺化效果：

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### 序列圖範例
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 任務管理
- [x] 建立響應式佈局
- [x] 實作 GitHub 樣式即時預覽
- [x] 新增程式碼區塊語法高亮
- [x] 支援 LaTeX 數學表達式
- [x] 啟用 Mermaid 圖表

## 🆚 功能比較

| 功能                     | Markdown 檢視器（我們的） | 其他 Markdown 編輯器     |
|:-------------------------|:----------------------:|:-----------------------:|
| 即時預覽                 | ✅ GitHub 樣式          | ✅                     |
| 同步捲動                 | ✅ 雙向同步              | 🔄 部分/無             |
| Mermaid 支援             | ✅                     | ❌/有限                |
| LaTeX 數學渲染           | ✅                     | ❌/有限                |

### 📝 多行表頭支援

<table>
  <thead>
    <tr>
      <th rowspan="2">文件類型</th>
      <th colspan="2">支援情況</th>
    </tr>
    <tr>
      <th>Markdown 檢視器（我們的）</th>
      <th>其他 Markdown 編輯器</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>技術文件</td>
      <td>完整 + 圖表</td>
      <td>有限/基礎</td>
    </tr>
    <tr>
      <td>研究筆記</td>
      <td>完整 + 數學</td>
      <td>部分</td>
    </tr>
    <tr>
      <td>開發指南</td>
      <td>完整 + 匯出選項</td>
      <td>基礎</td>
    </tr>
  </tbody>
</table>

## 📝 文字格式範例

### 文字格式

文字可以透過多種方式格式化：~~刪除線~~、**粗體**、*斜體*或***粗斜體***。

要突顯重要資訊，請使用<mark>高亮文字</mark>或在適當位置新增<u>底線</u>。

### 上標和下標

化學公式：H<sub>2</sub>O, CO<sub>2</sub>  
數學符號：x<sup>2</sup>, e<sup>iπ</sup>

### 鍵盤按鍵

按 <kbd>Ctrl</kbd> + <kbd>B</kbd> 將文字加粗。

### 縮寫

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### 文字對齊

<div style="text-align: center">
置中文字，用於標題或重要通知
</div>

<div style="text-align: right">
靠右對齊文字（用於日期、簽名等）
</div>

### **列表**

建立項目符號列表：
* 項目 1
* 項目 2
  * 巢狀項目
    * 進一步巢狀

### **連結和圖片**

新增[連結](https://github.com/ThisIs-Developer/Markdown-Viewer)到重要資源。

嵌入圖片：
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **引用**

引用名人名言：
> "預測未來的最好方式就是創造未來。" - 艾倫·凱

---

## 🛡️ 安全說明

這是一個完全在客戶端運作的應用程式。您的內容永遠不會離開您的瀏覽器，並安全地儲存在您的裝置上。`,

  ja: `---
title: Markdown Viewer へようこそ
description: GitHub スタイルの Markdown レンダラー。ライブプレビュー、数式、ダイアグラム、エクスポート機能を搭載。
author: ThisIs-Developer
tags: ["markdown", "プレビュー", "mermaid", "latex", "オープンソース"]
---

# Markdown Viewer へようこそ

## ✨ 主な機能
- **ライブプレビュー** — GitHub スタイル
- **スマートなインポート/エクスポート**（MD、HTML、PDF）
- **Mermaid ダイアグラム** — ビジュアルドキュメントに
- **LaTeX 数式サポート** — 科学記法に
- **絵文字サポート** 😄 👍 🎉

## 💻 コードのシンタックスハイライト
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 数式
LaTeX 構文で複雑な数式を記述：

インライン数式：$$E = mc^2$$

ディスプレイ数式：
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid ダイアグラム
Markdown 内で強力なビジュアライゼーションを作成：

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### シーケンス図の例
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 タスク管理
- [x] レスポンシブレイアウトの作成
- [x] GitHub スタイルのライブプレビューの実装
- [x] コードブロックのシンタックスハイライト追加
- [x] LaTeX 数式のサポート
- [x] Mermaid ダイアグラムの有効化

## 🆚 機能比較

| 機能                     | Markdown Viewer（当サイト） | 他の Markdown エディタ     |
|:-------------------------|:--------------------------:|:-------------------------:|
| ライブプレビュー         | ✅ GitHub スタイル          | ✅                       |
| 同期スクロール           | ✅ 双方向                   | 🔄 部分/なし             |
| Mermaid サポート         | ✅                         | ❌/限定                  |
| LaTeX 数式レンダリング   | ✅                         | ❌/限定                  |

### 📝 複数行ヘッダーのサポート

<table>
  <thead>
    <tr>
      <th rowspan="2">ドキュメントの種類</th>
      <th colspan="2">サポート</th>
    </tr>
    <tr>
      <th>Markdown Viewer（当サイト）</th>
      <th>他の Markdown エディタ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>技術ドキュメント</td>
      <td>フル + ダイアグラム</td>
      <td>限定/基本</td>
    </tr>
    <tr>
      <td>研究ノート</td>
      <td>フル + 数式</td>
      <td>部分</td>
    </tr>
    <tr>
      <td>開発者ガイド</td>
      <td>フル + エクスポート</td>
      <td>基本</td>
    </tr>
  </tbody>
</table>

## 📝 テキスト書式の例

### テキストの書式設定

テキストは様々な方法で書式設定できます：~~取り消し線~~、**太字**、*斜体*、または***太字斜体***。

重要な情報を強調するには、<mark>ハイライトされたテキスト</mark>を使用するか、適切な箇所に<u>下線</u>を追加します。

### 上付き文字と下付き文字

化学式：H<sub>2</sub>O, CO<sub>2</sub>  
数学的表記：x<sup>2</sup>, e<sup>iπ</sup>

### キーボードキー

<kbd>Ctrl</kbd> + <kbd>B</kbd> を押して太字にします。

### 略語

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### テキストの配置

<div style="text-align: center">
見出しや重要な通知の中央揃えテキスト
</div>

<div style="text-align: right">
右揃えテキスト（日付、署名などに使用）
</div>

### **リスト**

箇条書きリストの作成：
* 項目 1
* 項目 2
  * ネストされた項目
    * さらにネスト

### **リンクと画像**

重要なリソースへの[リンク](https://github.com/ThisIs-Developer/Markdown-Viewer)を追加。

画像の埋め込み：
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **引用**

有名な言葉を引用：
> "未来を予測する最良の方法は、それを発明することだ。" - アラン・ケイ

---

## 🛡️ セキュリティに関する注意

これは完全にクライアント側で動作するアプリケーションです。あなたのコンテンツはブラウザから離れることなく、デバイス上で安全に保たれます。`,

  ko: `---
title: Markdown Viewer에 오신 것을 환영합니다
description: GitHub 스타일의 Markdown 렌더러로 라이브 미리보기, 수식, 다이어그램 및 내보내기를 지원합니다.
author: ThisIs-Developer
tags: ["markdown", "미리보기", "mermaid", "latex", "오픈소스"]
---

# Markdown Viewer에 오신 것을 환영합니다

## ✨ 주요 기능
- **라이브 미리보기** — GitHub 스타일
- **스마트 가져오기/내보내기** (MD, HTML, PDF)
- **Mermaid 다이어그램** — 시각적 문서화
- **LaTeX 수식 지원** — 과학 표기법
- **이모지 지원** 😄 👍 🎉

## 💻 구문 강조가 포함된 코드
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 수학 표현식
LaTeX 구문으로 복잡한 수식을 작성하세요:

인라인 수식: $$E = mc^2$$

디스플레이 수식:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid 다이어그램
Markdown에서 직접 강력한 시각화를 만드세요:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### 시퀀스 다이어그램 예제
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 작업 관리
- [x] 반응형 레이아웃 만들기
- [x] GitHub 스타일 라이브 미리보기 구현
- [x] 코드 블록 구문 강조 추가
- [x] LaTeX 수식 표현 지원
- [x] Mermaid 다이어그램 활성화

## 🆚 기능 비교

| 기능                     | Markdown Viewer (우리)   | 다른 Markdown 편집기     |
|:-------------------------|:----------------------:|:-----------------------:|
| 라이브 미리보기          | ✅ GitHub 스타일        | ✅                     |
| 동기화 스크롤            | ✅ 양방향               | 🔄 부분/없음           |
| Mermaid 지원             | ✅                     | ❌/제한적              |
| LaTeX 수식 렌더링        | ✅                     | ❌/제한적              |

### 📝 여러 행 헤더 지원

<table>
  <thead>
    <tr>
      <th rowspan="2">문서 유형</th>
      <th colspan="2">지원</th>
    </tr>
    <tr>
      <th>Markdown Viewer (우리)</th>
      <th>다른 Markdown 편집기</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>기술 문서</td>
      <td>전체 + 다이어그램</td>
      <td>제한적/기본</td>
    </tr>
    <tr>
      <td>연구 노트</td>
      <td>전체 + 수식</td>
      <td>부분적</td>
    </tr>
    <tr>
      <td>개발자 가이드</td>
      <td>전체 + 내보내기 옵션</td>
      <td>기본</td>
    </tr>
  </tbody>
</table>

## 📝 텍스트 서식 예제

### 텍스트 서식

텍스트는 다양한 방법으로 서식을 지정할 수 있습니다: ~~취소선~~, **굵게**, *기울임*, 또는 ***굵은 기울임***.

중요한 정보를 강조하려면 <mark>강조된 텍스트</mark>를 사용하거나 적절한 곳에 <u>밑줄</u>을 추가하세요.

### 위첨자와 아래첨자

화학식: H<sub>2</sub>O, CO<sub>2</sub>  
수학적 표기: x<sup>2</sup>, e<sup>iπ</sup>

### 키보드 키

<kbd>Ctrl</kbd> + <kbd>B</kbd>를 눌러 굵은 텍스트를 만드세요.

### 약어

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### 텍스트 정렬

<div style="text-align: center">
제목이나 중요 공지를 위한 가운데 정렬 텍스트
</div>

<div style="text-align: right">
오른쪽 정렬 텍스트 (날짜, 서명 등에 사용)
</div>

### **목록**

글머리 기호 목록 만들기:
* 항목 1
* 항목 2
  * 중첩 항목
    * 더 중첩

### **링크와 이미지**

중요한 리소스에 [링크](https://github.com/ThisIs-Developer/Markdown-Viewer)를 추가하세요.

이미지 삽입:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **인용문**

유명한 인용:
> "미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것이다." - 앨런 케이

---

## 🛡️ 보안 안내

이것은 완전히 클라이언트 측에서 작동하는 애플리케이션입니다. 귀하의 콘텐츠는 브라우저를 떠나지 않으며 기기에서 안전하게 보관됩니다.`,

  ru: `---
title: Добро пожаловать в Markdown Viewer
description: Рендерер Markdown в стиле GitHub с живым предпросмотром, математикой, диаграммами и поддержкой экспорта.
author: ThisIs-Developer
tags: ["markdown", "предпросмотр", "mermaid", "latex", "открытый-исходный-код"]
---

# Добро пожаловать в Markdown Viewer

## ✨ Основные возможности
- **Живой предпросмотр** со стилизацией GitHub
- **Умный импорт/экспорт** (MD, HTML, PDF)
- **Диаграммы Mermaid** для визуальной документации
- **Поддержка математических формул LaTeX** для научных записей
- **Поддержка эмодзи** 😄 👍 🎉

## 💻 Код с подсветкой синтаксиса
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Математические выражения
Записывайте сложные формулы с помощью синтаксиса LaTeX:

Строчная формула: $$E = mc^2$$

Формулы в отдельной строке:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Диаграммы Mermaid
Создавайте мощные визуализации прямо в Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Пример диаграммы последовательности
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Управление задачами
- [x] Создать адаптивный макет
- [x] Реализовать живой предпросмотр со стилизацией GitHub
- [x] Добавить подсветку синтаксиса для блоков кода
- [x] Поддержка математических выражений LaTeX
- [x] Включить диаграммы Mermaid

## 🆚 Сравнение функций

| Функция                  | Markdown Viewer (Наш)  | Другие редакторы Markdown |
|:-------------------------|:----------------------:|:-------------------------:|
| Живой предпросмотр       | ✅ Стиль GitHub        | ✅                       |
| Синхронная прокрутка     | ✅ Двунаправленная     | 🔄 Частичная/Нет         |
| Поддержка Mermaid        | ✅                     | ❌/Ограничена            |
| Рендеринг LaTeX          | ✅                     | ❌/Ограничен             |

### 📝 Поддержка многострочных заголовков

<table>
  <thead>
    <tr>
      <th rowspan="2">Тип документа</th>
      <th colspan="2">Поддержка</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Наш)</th>
      <th>Другие редакторы Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Техническая документация</td>
      <td>Полная + Диаграммы</td>
      <td>Ограниченная/Базовая</td>
    </tr>
    <tr>
      <td>Исследовательские заметки</td>
      <td>Полная + Математика</td>
      <td>Частичная</td>
    </tr>
    <tr>
      <td>Руководства для разработчиков</td>
      <td>Полная + Экспорт</td>
      <td>Базовая</td>
    </tr>
  </tbody>
</table>

## 📝 Примеры форматирования текста

### Форматирование текста

Текст может быть отформатирован различными способами: ~~зачёркнутый~~, **жирный**, *курсив* или ***жирный курсив***.

Для выделения важной информации используйте <mark>выделенный текст</mark> или добавляйте <u>подчёркивания</u> там, где это уместно.

### Верхний и нижний индексы

Химические формулы: H<sub>2</sub>O, CO<sub>2</sub>  
Математические обозначения: x<sup>2</sup>, e<sup>iπ</sup>

### Клавиши клавиатуры

Нажмите <kbd>Ctrl</kbd> + <kbd>B</kbd> для жирного текста.

### Аббревиатуры

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Выравнивание текста

<div style="text-align: center">
Текст по центру для заголовков или важных уведомлений
</div>

<div style="text-align: right">
Текст по правому краю (для дат, подписей и т.д.)
</div>

### **Списки**

Создание маркированных списков:
* Пункт 1
* Пункт 2
  * Вложенный пункт
    * Ещё глубже

### **Ссылки и изображения**

Добавьте [ссылку](https://github.com/ThisIs-Developer/Markdown-Viewer) на важные ресурсы.

Встроить изображение:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Цитаты**

Цитата известного человека:
> "Лучший способ предсказать будущее — изобрести его." - Алан Кей

---

## 🛡️ Примечание о безопасности

Это полностью клиентское приложение. Ваш контент никогда не покидает ваш браузер и остаётся в безопасности на вашем устройстве.`,

  fr: `---
title: Bienvenue dans Markdown Viewer
description: Un rendeur Markdown de style GitHub avec aperçu en direct, mathématiques, diagrammes et prise en charge de l'exportation.
author: ThisIs-Developer
tags: ["markdown", "aperçu", "mermaid", "latex", "open-source"]
---

# Bienvenue dans Markdown Viewer

## ✨ Fonctionnalités clés
- **Aperçu en direct** avec le style GitHub
- **Import/Export intelligent** (MD, HTML, PDF)
- **Diagrammes Mermaid** pour la documentation visuelle
- **Prise en charge des mathématiques LaTeX** pour la notation scientifique
- **Prise en charge des émojis** 😄 👍 🎉

## 💻 Code avec coloration syntaxique
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Expressions mathématiques
Écrivez des formules complexes avec la syntaxe LaTeX :

Équation en ligne : $$E = mc^2$$

Équations en bloc :
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Diagrammes Mermaid
Créez de puissantes visualisations directement en Markdown :

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Exemple de diagramme de séquence
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Gestion des tâches
- [x] Créer une mise en page responsive
- [x] Implémenter l'aperçu en direct avec le style GitHub
- [x] Ajouter la coloration syntaxique pour les blocs de code
- [x] Prendre en charge les expressions mathématiques avec LaTeX
- [x] Activer les diagrammes Mermaid

## 🆚 Comparaison des fonctionnalités

| Fonctionnalité           | Markdown Viewer (Le nôtre) | Autres éditeurs Markdown  |
|:-------------------------|:--------------------------:|:-------------------------:|
| Aperçu en direct         | ✅ Style GitHub            | ✅                       |
| Défilement synchronisé   | ✅ Bidirectionnel          | 🔄 Partiel/Aucun         |
| Prise en charge Mermaid  | ✅                         | ❌/Limité                |
| Rendu LaTeX              | ✅                         | ❌/Limité                |

### 📝 Prise en charge des en-têtes multi-lignes

<table>
  <thead>
    <tr>
      <th rowspan="2">Type de document</th>
      <th colspan="2">Prise en charge</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Le nôtre)</th>
      <th>Autres éditeurs Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentation technique</td>
      <td>Complet + Diagrammes</td>
      <td>Limité/Basique</td>
    </tr>
    <tr>
      <td>Notes de recherche</td>
      <td>Complet + Mathématiques</td>
      <td>Partiel</td>
    </tr>
    <tr>
      <td>Guides développeurs</td>
      <td>Complet + Export</td>
      <td>Basique</td>
    </tr>
  </tbody>
</table>

## 📝 Exemples de mise en forme du texte

### Mise en forme du texte

Le texte peut être mis en forme de diverses manières : ~~barré~~, **gras**, *italique* ou ***gras italique***.

Pour mettre en évidence des informations importantes, utilisez du <mark>texte surligné</mark> ou ajoutez des <u>soulignements</u> là où c'est approprié.

### Exposants et indices

Formules chimiques : H<sub>2</sub>O, CO<sub>2</sub>  
Notation mathématique : x<sup>2</sup>, e<sup>iπ</sup>

### Touches du clavier

Appuyez sur <kbd>Ctrl</kbd> + <kbd>B</kbd> pour du texte en gras.

### Abréviations

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Alignement du texte

<div style="text-align: center">
Texte centré pour les titres ou avis importants
</div>

<div style="text-align: right">
Texte aligné à droite (pour les dates, signatures, etc.)
</div>

### **Listes**

Créer des listes à puces :
* Élément 1
* Élément 2
  * Élément imbriqué
    * Imbriqué plus profondément

### **Liens et images**

Ajoutez un [lien](https://github.com/ThisIs-Developer/Markdown-Viewer) vers des ressources importantes.

Intégrer une image :
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citations**

Citez quelqu'un de célèbre :
> "La meilleure façon de prédire l'avenir est de l'inventer." - Alan Kay

---

## 🛡️ Note de sécurité

Ceci est une application entièrement côté client. Votre contenu ne quitte jamais votre navigateur et reste en sécurité sur votre appareil.`,

  es: `---
title: Bienvenido a Markdown Viewer
description: Un renderizador Markdown al estilo GitHub con vista previa en vivo, matemáticas, diagramas y soporte de exportación.
author: ThisIs-Developer
tags: ["markdown", "vista previa", "mermaid", "latex", "código-abierto"]
---

# Bienvenido a Markdown Viewer

## ✨ Características principales
- **Vista previa en vivo** con estilo GitHub
- **Importación/Exportación inteligente** (MD, HTML, PDF)
- **Diagramas Mermaid** para documentación visual
- **Soporte matemático LaTeX** para notación científica
- **Soporte de emojis** 😄 👍 🎉

## 💻 Código con resaltado de sintaxis
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Expresiones matemáticas
Escribe fórmulas complejas con sintaxis LaTeX:

Ecuación en línea: $$E = mc^2$$

Ecuaciones en bloque:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Diagramas Mermaid
Crea visualizaciones potentes directamente en Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Ejemplo de diagrama de secuencia
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Gestión de tareas
- [x] Crear diseño responsive
- [x] Implementar vista previa en vivo con estilo GitHub
- [x] Añadir resaltado de sintaxis para bloques de código
- [x] Soportar expresiones matemáticas con LaTeX
- [x] Habilitar diagramas Mermaid

## 🆚 Comparación de funciones

| Función                  | Markdown Viewer (Nuestro) | Otros editores Markdown   |
|:-------------------------|:------------------------:|:-------------------------:|
| Vista previa en vivo     | ✅ Estilo GitHub          | ✅                       |
| Desplazamiento sincronizado | ✅ Bidireccional       | 🔄 Parcial/Ninguno       |
| Soporte Mermaid          | ✅                       | ❌/Limitado              |
| Renderizado LaTeX        | ✅                       | ❌/Limitado              |

### 📝 Soporte de encabezados multilínea

<table>
  <thead>
    <tr>
      <th rowspan="2">Tipo de documento</th>
      <th colspan="2">Soporte</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Nuestro)</th>
      <th>Otros editores Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentación técnica</td>
      <td>Completo + Diagramas</td>
      <td>Limitado/Básico</td>
    </tr>
    <tr>
      <td>Notas de investigación</td>
      <td>Completo + Matemáticas</td>
      <td>Parcial</td>
    </tr>
    <tr>
      <td>Guías de desarrollador</td>
      <td>Completo + Exportación</td>
      <td>Básico</td>
    </tr>
  </tbody>
</table>

## 📝 Ejemplos de formato de texto

### Formato de texto

El texto puede formatearse de varias maneras: ~~tachado~~, **negrita**, *cursiva* o ***negrita cursiva***.

Para resaltar información importante, usa <mark>texto resaltado</mark> o añade <u>subrayados</u> donde sea apropiado.

### Superíndices y subíndices

Fórmulas químicas: H<sub>2</sub>O, CO<sub>2</sub>  
Notación matemática: x<sup>2</sup>, e<sup>iπ</sup>

### Teclas del teclado

Pulsa <kbd>Ctrl</kbd> + <kbd>B</kbd> para texto en negrita.

### Abreviaturas

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Alineación de texto

<div style="text-align: center">
Texto centrado para títulos o avisos importantes
</div>

<div style="text-align: right">
Texto alineado a la derecha (para fechas, firmas, etc.)
</div>

### **Listas**

Crear listas con viñetas:
* Elemento 1
* Elemento 2
  * Elemento anidado
    * Anidado más profundo

### **Enlaces e imágenes**

Añade un [enlace](https://github.com/ThisIs-Developer/Markdown-Viewer) a recursos importantes.

Insertar una imagen:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citas**

Cita a alguien famoso:
> "La mejor manera de predecir el futuro es inventarlo." - Alan Kay

---

## 🛡️ Nota de seguridad

Esta es una aplicación completamente del lado del cliente. Tu contenido nunca sale de tu navegador y permanece seguro en tu dispositivo.`,

  de: `---
title: Willkommen bei Markdown Viewer
description: Ein GitHub-stiliger Markdown-Renderer mit Live-Vorschau, Mathematik, Diagrammen und Export-Unterstützung.
author: ThisIs-Developer
tags: ["markdown", "vorschau", "mermaid", "latex", "open-source"]
---

# Willkommen bei Markdown Viewer

## ✨ Hauptfunktionen
- **Live-Vorschau** im GitHub-Stil
- **Intelligenter Import/Export** (MD, HTML, PDF)
- **Mermaid-Diagramme** für visuelle Dokumentation
- **LaTeX-Mathematik-Unterstützung** für wissenschaftliche Notation
- **Emoji-Unterstützung** 😄 👍 🎉

## 💻 Code mit Syntaxhervorhebung
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Mathematische Ausdrücke
Schreiben Sie komplexe Formeln mit LaTeX-Syntax:

Inline-Gleichung: $$E = mc^2$$

Blockgleichungen:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid-Diagramme
Erstellen Sie leistungsstarke Visualisierungen direkt in Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Sequenzdiagramm-Beispiel
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Aufgabenverwaltung
- [x] Responsives Layout erstellen
- [x] Live-Vorschau im GitHub-Stil implementieren
- [x] Syntaxhervorhebung für Codeblöcke hinzufügen
- [x] Mathematische Ausdrücke mit LaTeX unterstützen
- [x] Mermaid-Diagramme aktivieren

## 🆚 Funktionsvergleich

| Funktion                 | Markdown Viewer (Unsers) | Andere Markdown-Editoren  |
|:-------------------------|:------------------------:|:-------------------------:|
| Live-Vorschau            | ✅ GitHub-Stil           | ✅                       |
| Synchrones Scrollen      | ✅ Bidirektional         | 🔄 Teilweise/Keine       |
| Mermaid-Unterstützung    | ✅                       | ❌/Eingeschränkt         |
| LaTeX-Mathe-Rendering    | ✅                       | ❌/Eingeschränkt         |

### 📝 Mehrzeilige Tabellenkopf-Unterstützung

<table>
  <thead>
    <tr>
      <th rowspan="2">Dokumenttyp</th>
      <th colspan="2">Unterstützung</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Unsers)</th>
      <th>Andere Markdown-Editoren</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Technische Dokumentation</td>
      <td>Vollständig + Diagramme</td>
      <td>Eingeschränkt/Grundlegend</td>
    </tr>
    <tr>
      <td>Forschungsnotizen</td>
      <td>Vollständig + Mathematik</td>
      <td>Teilweise</td>
    </tr>
    <tr>
      <td>Entwicklerhandbücher</td>
      <td>Vollständig + Export</td>
      <td>Grundlegend</td>
    </tr>
  </tbody>
</table>

## 📝 Textformatierungsbeispiele

### Textformatierung

Text kann auf verschiedene Arten formatiert werden: ~~durchgestrichen~~, **fett**, *kursiv* oder ***fett kursiv***.

Um wichtige Informationen hervorzuheben, verwenden Sie <mark>hervorgehobenen Text</mark> oder fügen Sie <u>Unterstreichungen</u> hinzu, wo es angemessen ist.

### Hoch- und tiefgestellte Zeichen

Chemische Formeln: H<sub>2</sub>O, CO<sub>2</sub>  
Mathematische Notation: x<sup>2</sup>, e<sup>iπ</sup>

### Tastaturtasten

Drücken Sie <kbd>Ctrl</kbd> + <kbd>B</kbd> für fetten Text.

### Abkürzungen

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Textausrichtung

<div style="text-align: center">
Zentrierter Text für Überschriften oder wichtige Hinweise
</div>

<div style="text-align: right">
Rechtsbündiger Text (für Daten, Unterschriften usw.)
</div>

### **Listen**

Aufzählungslisten erstellen:
* Punkt 1
* Punkt 2
  * Verschachtelter Punkt
    * Weiter verschachtelt

### **Links und Bilder**

Fügen Sie einen [Link](https://github.com/ThisIs-Developer/Markdown-Viewer) zu wichtigen Ressourcen hinzu.

Bild einbetten:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Zitate**

Zitieren Sie jemand Berühmten:
> "Der beste Weg, die Zukunft vorherzusagen, ist, sie zu erfinden." - Alan Kay

---

## 🛡️ Sicherheitshinweis

Dies ist eine reine Client-Anwendung. Ihr Inhalt verlässt niemals Ihren Browser und bleibt sicher auf Ihrem Gerät.`,

  it: `---
title: Benvenuto in Markdown Viewer
description: Un renderer Markdown in stile GitHub con anteprima dal vivo, matematica, diagrammi e supporto all'esportazione.
author: ThisIs-Developer
tags: ["markdown", "anteprima", "mermaid", "latex", "open-source"]
---

# Benvenuto in Markdown Viewer

## ✨ Funzionalità principali
- **Anteprima dal vivo** con stile GitHub
- **Import/Export intelligente** (MD, HTML, PDF)
- **Diagrammi Mermaid** per la documentazione visiva
- **Supporto matematico LaTeX** per la notazione scientifica
- **Supporto emoji** 😄 👍 🎉

## 💻 Codice con evidenziazione della sintassi
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Espressioni matematiche
Scrivi formule complesse con la sintassi LaTeX:

Equazione in linea: $$E = mc^2$$

Equazioni in blocco:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Diagrammi Mermaid
Crea potenti visualizzazioni direttamente in Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Esempio di diagramma di sequenza
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Gestione delle attività
- [x] Creare layout responsivo
- [x] Implementare anteprima dal vivo con stile GitHub
- [x] Aggiungere evidenziazione della sintassi per blocchi di codice
- [x] Supportare espressioni matematiche con LaTeX
- [x] Abilitare diagrammi Mermaid

## 🆚 Confronto delle funzionalità

| Funzionalità             | Markdown Viewer (Nostro)  | Altri editor Markdown     |
|:-------------------------|:------------------------:|:-------------------------:|
| Anteprima dal vivo       | ✅ Stile GitHub           | ✅                       |
| Scorrimento sincronizzato | ✅ Bidirezionale         | 🔄 Parziale/Nessuno      |
| Supporto Mermaid         | ✅                       | ❌/Limitato              |
| Rendering LaTeX          | ✅                       | ❌/Limitato              |

### 📝 Supporto intestazioni multi-riga

<table>
  <thead>
    <tr>
      <th rowspan="2">Tipo di documento</th>
      <th colspan="2">Supporto</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Nostro)</th>
      <th>Altri editor Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentazione tecnica</td>
      <td>Completo + Diagrammi</td>
      <td>Limitato/Base</td>
    </tr>
    <tr>
      <td>Note di ricerca</td>
      <td>Completo + Matematica</td>
      <td>Parziale</td>
    </tr>
    <tr>
      <td>Guide per sviluppatori</td>
      <td>Completo + Esportazione</td>
      <td>Base</td>
    </tr>
  </tbody>
</table>

## 📝 Esempi di formattazione del testo

### Formattazione del testo

Il testo può essere formattato in vari modi: ~~barrato~~, **grassetto**, *corsivo* o ***grassetto corsivo***.

Per evidenziare informazioni importanti, usa <mark>testo evidenziato</mark> o aggiungi <u>sottolineature</u> dove appropriato.

### Apici e pedici

Formule chimiche: H<sub>2</sub>O, CO<sub>2</sub>  
Notazione matematica: x<sup>2</sup>, e<sup>iπ</sup>

### Tasti della tastiera

Premi <kbd>Ctrl</kbd> + <kbd>B</kbd> per il testo in grassetto.

### Abbreviazioni

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Allineamento del testo

<div style="text-align: center">
Testo centrato per titoli o avvisi importanti
</div>

<div style="text-align: right">
Testo allineato a destra (per date, firme, ecc.)
</div>

### **Elenchi**

Creare elenchi puntati:
* Elemento 1
* Elemento 2
  * Elemento nidificato
    * Nidificato ulteriormente

### **Link e immagini**

Aggiungi un [link](https://github.com/ThisIs-Developer/Markdown-Viewer) a risorse importanti.

Incorpora un'immagine:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citazioni**

Cita qualcuno di famoso:
> "Il modo migliore per prevedere il futuro è inventarlo." - Alan Kay

---

## 🛡️ Nota sulla sicurezza

Questa è un'applicazione completamente lato client. I tuoi contenuti non lasciano mai il browser e rimangono sicuri sul tuo dispositivo.`,

  pt: `---
title: Bem-vindo ao Markdown Viewer
description: Um renderizador Markdown no estilo GitHub com visualização ao vivo, matemática, diagramas e suporte à exportação.
author: ThisIs-Developer
tags: ["markdown", "visualização", "mermaid", "latex", "código-aberto"]
---

# Bem-vindo ao Markdown Viewer

## ✨ Recursos principais
- **Visualização ao vivo** com estilo GitHub
- **Importação/Exportação inteligente** (MD, HTML, PDF)
- **Diagramas Mermaid** para documentação visual
- **Suporte matemático LaTeX** para notação científica
- **Suporte a emojis** 😄 👍 🎉

## 💻 Código com destaque de sintaxe
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Expressões matemáticas
Escreva fórmulas complexas com sintaxe LaTeX:

Equação inline: $$E = mc^2$$

Equações em bloco:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Diagramas Mermaid
Crie visualizações poderosas diretamente no Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Exemplo de diagrama de sequência
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Gestão de tarefas
- [x] Criar layout responsivo
- [x] Implementar visualização ao vivo com estilo GitHub
- [x] Adicionar destaque de sintaxe para blocos de código
- [x] Suportar expressões matemáticas com LaTeX
- [x] Ativar diagramas Mermaid

## 🆚 Comparação de recursos

| Recurso                  | Markdown Viewer (Nosso)   | Outros editores Markdown   |
|:-------------------------|:------------------------:|:-------------------------:|
| Visualização ao vivo     | ✅ Estilo GitHub          | ✅                       |
| Rolagem sincronizada     | ✅ Bidirecional           | 🔄 Parcial/Nenhuma       |
| Suporte Mermaid          | ✅                       | ❌/Limitado              |
| Renderização LaTeX       | ✅                       | ❌/Limitado              |

### 📝 Suporte a cabeçalhos multilinha

<table>
  <thead>
    <tr>
      <th rowspan="2">Tipo de documento</th>
      <th colspan="2">Suporte</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Nosso)</th>
      <th>Outros editores Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Documentação técnica</td>
      <td>Completo + Diagramas</td>
      <td>Limitado/Básico</td>
    </tr>
    <tr>
      <td>Notas de pesquisa</td>
      <td>Completo + Matemática</td>
      <td>Parcial</td>
    </tr>
    <tr>
      <td>Guias do desenvolvedor</td>
      <td>Completo + Exportação</td>
      <td>Básico</td>
    </tr>
  </tbody>
</table>

## 📝 Exemplos de formatação de texto

### Formatação de texto

O texto pode ser formatado de várias maneiras: ~~tachado~~, **negrito**, *itálico* ou ***negrito itálico***.

Para destacar informações importantes, use <mark>texto destacado</mark> ou adicione <u>sublinhados</u> onde apropriado.

### Sobrescrito e subscrito

Fórmulas químicas: H<sub>2</sub>O, CO<sub>2</sub>  
Notação matemática: x<sup>2</sup>, e<sup>iπ</sup>

### Teclas do teclado

Pressione <kbd>Ctrl</kbd> + <kbd>B</kbd> para texto em negrito.

### Abreviações

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Alinhamento de texto

<div style="text-align: center">
Texto centralizado para títulos ou avisos importantes
</div>

<div style="text-align: right">
Texto alinhado à direita (para datas, assinaturas, etc.)
</div>

### **Listas**

Criar listas com marcadores:
* Item 1
* Item 2
  * Item aninhado
    * Aninhado mais profundamente

### **Links e imagens**

Adicione um [link](https://github.com/ThisIs-Developer/Markdown-Viewer) para recursos importantes.

Incorporar uma imagem:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citações**

Cite alguém famoso:
> "A melhor maneira de prever o futuro é inventá-lo." - Alan Kay

---

## 🛡️ Nota de segurança

Este é um aplicativo totalmente do lado do cliente. Seu conteúdo nunca sai do seu navegador e permanece seguro no seu dispositivo.`,

  nl: `---
title: Welkom bij Markdown Viewer
description: Een GitHub-stijl Markdown renderer met live voorbeeld, wiskunde, diagrammen en exportondersteuning.
author: ThisIs-Developer
tags: ["markdown", "voorbeeld", "mermaid", "latex", "open-source"]
---

# Welkom bij Markdown Viewer

## ✨ Belangrijkste functies
- **Live voorbeeld** met GitHub-stijl
- **Slim importeren/exporteren** (MD, HTML, PDF)
- **Mermaid-diagrammen** voor visuele documentatie
- **LaTeX-wiskundeondersteuning** voor wetenschappelijke notatie
- **Emoji-ondersteuning** 😄 👍 🎉

## 💻 Code met syntaxismarkering
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Wiskundige expressies
Schrijf complexe formules met LaTeX-syntaxis:

Inline vergelijking: $$E = mc^2$$

Blokvergelijkingen:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid-diagrammen
Maak krachtige visualisaties direct in Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Voorbeeld sequentiediagram
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Taakbeheer
- [x] Responsieve lay-out maken
- [x] Live voorbeeld met GitHub-stijl implementeren
- [x] Syntaxismarkering voor codeblokken toevoegen
- [x] Wiskundige expressies met LaTeX ondersteunen
- [x] Mermaid-diagrammen inschakelen

## 🆚 Functievergelijking

| Functie                  | Markdown Viewer (Onze)    | Andere Markdown-editors    |
|:-------------------------|:------------------------:|:-------------------------:|
| Live voorbeeld           | ✅ GitHub-stijl           | ✅                       |
| Synchroon scrollen       | ✅ Tweerichtingsverkeer   | 🔄 Gedeeltelijk/Geen     |
| Mermaid-ondersteuning    | ✅                       | ❌/Beperkt               |
| LaTeX-wiskunde-rendering | ✅                       | ❌/Beperkt               |

### 📝 Ondersteuning voor meerregelige kopteksten

<table>
  <thead>
    <tr>
      <th rowspan="2">Documenttype</th>
      <th colspan="2">Ondersteuning</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Onze)</th>
      <th>Andere Markdown-editors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Technische documentatie</td>
      <td>Volledig + Diagrammen</td>
      <td>Beperkt/Basis</td>
    </tr>
    <tr>
      <td>Onderzoeksnotities</td>
      <td>Volledig + Wiskunde</td>
      <td>Gedeeltelijk</td>
    </tr>
    <tr>
      <td>Ontwikkelaarsgidsen</td>
      <td>Volledig + Export</td>
      <td>Basis</td>
    </tr>
  </tbody>
</table>

## 📝 Tekstopmaakvoorbeelden

### Tekstopmaak

Tekst kan op verschillende manieren worden opgemaakt: ~~doorgestreept~~, **vet**, *cursief* of ***vet cursief***.

Voor het markeren van belangrijke informatie, gebruik <mark>gemarkeerde tekst</mark> of voeg <u>onderstrepingen</u> toe waar gepast.

### Superscript en subscript

Chemische formules: H<sub>2</sub>O, CO<sub>2</sub>  
Wiskundige notatie: x<sup>2</sup>, e<sup>iπ</sup>

### Toetsenbordtoetsen

Druk op <kbd>Ctrl</kbd> + <kbd>B</kbd> voor vette tekst.

### Afkortingen

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Tekstuitlijning

<div style="text-align: center">
Gecentreerde tekst voor koppen of belangrijke mededelingen
</div>

<div style="text-align: right">
Rechts uitgelijnde tekst (voor datums, handtekeningen, enz.)
</div>

### **Lijsten**

Opsommingstekens maken:
* Item 1
* Item 2
  * Genest item
    * Verder genest

### **Links en afbeeldingen**

Voeg een [link](https://github.com/ThisIs-Developer/Markdown-Viewer) toe aan belangrijke bronnen.

Afbeelding invoegen:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citaten**

Citeer iemand beroemds:
> "De beste manier om de toekomst te voorspellen, is door deze uit te vinden." - Alan Kay

---

## 🛡️ Veiligheidsnotitie

Dit is een volledig client-side applicatie. Uw inhoud verlaat nooit uw browser en blijft veilig op uw apparaat.`,

  pl: `---
title: Witaj w Markdown Viewer
description: Renderer Markdown w stylu GitHub z podglądem na żywo, matematyką, diagramami i obsługą eksportu.
author: ThisIs-Developer
tags: ["markdown", "podgląd", "mermaid", "latex", "open-source"]
---

# Witaj w Markdown Viewer

## ✨ Kluczowe funkcje
- **Podgląd na żywo** w stylu GitHub
- **Inteligentny import/eksport** (MD, HTML, PDF)
- **Diagramy Mermaid** do dokumentacji wizualnej
- **Obsługa matematyki LaTeX** do notacji naukowej
- **Obsługa emoji** 😄 👍 🎉

## 💻 Kod z podświetlaniem składni
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Wyrażenia matematyczne
Pisz złożone wzory za pomocą składni LaTeX:

Równanie w linii: $$E = mc^2$$

Równania blokowe:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Diagramy Mermaid
Twórz potężne wizualizacje bezpośrednio w Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Przykład diagramu sekwencji
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Zarządzanie zadaniami
- [x] Utworzyć układ responsywny
- [x] Wdrożyć podgląd na żywo w stylu GitHub
- [x] Dodać podświetlanie składni dla bloków kodu
- [x] Obsługa wyrażeń matematycznych z LaTeX
- [x] Włączyć diagramy Mermaid

## 🆚 Porównanie funkcji

| Funkcja                  | Markdown Viewer (Nasz)    | Inne edytory Markdown      |
|:-------------------------|:------------------------:|:-------------------------:|
| Podgląd na żywo          | ✅ Styl GitHub            | ✅                       |
| Synchroniczne przewijanie | ✅ Dwukierunkowe         | 🔄 Częściowe/Brak        |
| Obsługa Mermaid          | ✅                       | ❌/Ograniczona            |
| Renderowanie LaTeX       | ✅                       | ❌/Ograniczone            |

### 📝 Obsługa wielowierszowych nagłówków

<table>
  <thead>
    <tr>
      <th rowspan="2">Typ dokumentu</th>
      <th colspan="2">Obsługa</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Nasz)</th>
      <th>Inne edytory Markdown</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dokumentacja techniczna</td>
      <td>Pełna + Diagramy</td>
      <td>Ograniczona/Podstawowa</td>
    </tr>
    <tr>
      <td>Notatki badawcze</td>
      <td>Pełna + Matematyka</td>
      <td>Częściowa</td>
    </tr>
    <tr>
      <td>Przewodniki dla programistów</td>
      <td>Pełna + Eksport</td>
      <td>Podstawowa</td>
    </tr>
  </tbody>
</table>

## 📝 Przykłady formatowania tekstu

### Formatowanie tekstu

Tekst może być formatowany na różne sposoby: ~~przekreślony~~, **pogrubiony**, *kursywa* lub ***pogrubiona kursywa***.

Aby wyróżnić ważne informacje, użyj <mark>wyróżnionego tekstu</mark> lub dodaj <u>podkreślenia</u> tam, gdzie to odpowiednie.

### Indeks górny i dolny

Wzory chemiczne: H<sub>2</sub>O, CO<sub>2</sub>  
Notacja matematyczna: x<sup>2</sup>, e<sup>iπ</sup>

### Klawisze klawiatury

Naciśnij <kbd>Ctrl</kbd> + <kbd>B</kbd> dla pogrubionego tekstu.

### Skróty

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Wyrównanie tekstu

<div style="text-align: center">
Tekst wyśrodkowany dla nagłówków lub ważnych ogłoszeń
</div>

<div style="text-align: right">
Tekst wyrównany do prawej (na daty, podpisy itp.)
</div>

### **Listy**

Tworzenie list punktowanych:
* Element 1
* Element 2
  * Element zagnieżdżony
    * Dalej zagnieżdżony

### **Linki i obrazy**

Dodaj [link](https://github.com/ThisIs-Developer/Markdown-Viewer) do ważnych zasobów.

Osadź obraz:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Cytaty**

Zacytuj kogoś słynnego:
> "Najlepszy sposób na przewidzenie przyszłości to jej wymyślenie." - Alan Kay

---

## 🛡️ Uwaga o bezpieczeństwie

To jest w pełni aplikacja po stronie klienta. Twoja treść nigdy nie opuszcza przeglądarki i pozostaje bezpieczna na Twoim urządzeniu.`,

  sv: `---
title: Välkommen till Markdown Viewer
description: En GitHub-stil Markdown-renderare med live-förhandsgranskning, matematik, diagram och exportstöd.
author: ThisIs-Developer
tags: ["markdown", "förhandsgranskning", "mermaid", "latex", "öppen-källkod"]
---

# Välkommen till Markdown Viewer

## ✨ Nyckelfunktioner
- **Live-förhandsgranskning** med GitHub-stil
- **Smart import/export** (MD, HTML, PDF)
- **Mermaid-diagram** för visuell dokumentation
- **LaTeX-matematikstöd** för vetenskaplig notation
- **Emoji-stöd** 😄 👍 🎉

## 💻 Kod med syntaxmarkering
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 Matematiska uttryck
Skriv komplexa formler med LaTeX-syntax:

Inline-ekvation: $$E = mc^2$$

Blockekvationer:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 Mermaid-diagram
Skapa kraftfulla visualiseringar direkt i Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### Exempel på sekvensdiagram
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 Uppgiftshantering
- [x] Skapa responsiv layout
- [x] Implementera live-förhandsgranskning med GitHub-stil
- [x] Lägg till syntaxmarkering för kodblock
- [x] Stödja matematiska uttryck med LaTeX
- [x] Aktivera Mermaid-diagram

## 🆚 Funktionsjämförelse

| Funktion                 | Markdown Viewer (Vår)     | Andra Markdown-redigerare  |
|:-------------------------|:------------------------:|:-------------------------:|
| Live-förhandsgranskning  | ✅ GitHub-stil            | ✅                       |
| Synkron scrollning       | ✅ Dubbelriktad           | 🔄 Delvis/Ingen          |
| Mermaid-stöd             | ✅                       | ❌/Begränsat             |
| LaTeX-matematik-rendering | ✅                      | ❌/Begränsat             |

### 📝 Stöd för flerradiga rubriker

<table>
  <thead>
    <tr>
      <th rowspan="2">Dokumenttyp</th>
      <th colspan="2">Stöd</th>
    </tr>
    <tr>
      <th>Markdown Viewer (Vår)</th>
      <th>Andra Markdown-redigerare</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Teknisk dokumentation</td>
      <td>Fullständigt + Diagram</td>
      <td>Begränsat/Grundläggande</td>
    </tr>
    <tr>
      <td>Forskningsanteckningar</td>
      <td>Fullständigt + Matematik</td>
      <td>Delvis</td>
    </tr>
    <tr>
      <td>Utvecklarguider</td>
      <td>Fullständigt + Export</td>
      <td>Grundläggande</td>
    </tr>
  </tbody>
</table>

## 📝 Textformateringsexempel

### Textformatering

Text kan formateras på olika sätt: ~~genomstruken~~, **fet**, *kursiv* eller ***fet kursiv***.

För att markera viktig information, använd <mark>markerad text</mark> eller lägg till <u>understrykningar</u> där det är lämpligt.

### Upphöjt och nedsänkt

Kemiska formler: H<sub>2</sub>O, CO<sub>2</sub>  
Matematisk notation: x<sup>2</sup>, e<sup>iπ</sup>

### Tangentbordstangenter

Tryck <kbd>Ctrl</kbd> + <kbd>B</kbd> för fet text.

### Förkortningar

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### Textjustering

<div style="text-align: center">
Centrerad text för rubriker eller viktiga meddelanden
</div>

<div style="text-align: right">
Högerjusterad text (för datum, signaturer osv.)
</div>

### **Listor**

Skapa punktlistor:
* Punkt 1
* Punkt 2
  * Nästlad punkt
    * Ytterligare nästlad

### **Länkar och bilder**

Lägg till en [länk](https://github.com/ThisIs-Developer/Markdown-Viewer) till viktiga resurser.

Bädda in en bild:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **Citat**

Citera någon känd:
> "Det bästa sättet att förutsäga framtiden är att uppfinna den." - Alan Kay

---

## 🛡️ Säkerhetsnotering

Detta är en helt klientbaserad applikation. Ditt innehåll lämnar aldrig din webbläsare och förblir säkert på din enhet.`,

  ar: `---
title: مرحبًا بك في Markdown Viewer
description: عارض Markdown بأسلوب GitHub مع معاينة مباشرة ورياضيات ومخططات ودعم التصدير.
author: ThisIs-Developer
tags: ["markdown", "معاينة", "mermaid", "latex", "مصدر-مفتوح"]
---

# مرحبًا بك في Markdown Viewer

## ✨ الميزات الرئيسية
- **معاينة مباشرة** بأسلوب GitHub
- **استيراد/تصدير ذكي** (MD، HTML، PDF)
- **مخططات Mermaid** للتوثيق المرئي
- **دعم رياضيات LaTeX** للتدوين العلمي
- **دعم الرموز التعبيرية** 😄 👍 🎉

## 💻 كود مع تلوين بناء الجملة
\`\`\`javascript
  function renderMarkdown() {
    const markdown = markdownEditor.value;
    const html = marked.parse(markdown);
    const sanitizedHtml = DOMPurify.sanitize(html);
    markdownPreview.innerHTML = sanitizedHtml;
    
    // Syntax highlighting is handled automatically
    // during the parsing phase by the marked renderer.
    // Themes are applied instantly via CSS variables.
  }
\`\`\`

## 🧮 التعبيرات الرياضية
اكتب معادلات معقدة باستخدام صيغة LaTeX:

معادلة مضمنة: $$E = mc^2$$

معادلات عرض:
$$\\frac{\\partial f}{\\partial x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$

$$\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}$$

## 📊 مخططات Mermaid
أنشئ تصورات قوية مباشرة في Markdown:

\`\`\`mermaid
flowchart LR
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Great!]
    B -->|No| D[Debug]
    C --> E[Deploy]
    D --> B
\`\`\`

### مثال على مخطط التسلسل
\`\`\`mermaid
sequenceDiagram
    User->>Editor: Type markdown
    Editor->>Preview: Render content
    User->>Editor: Make changes
    Editor->>Preview: Update rendering
    User->>Export: Save as PDF
\`\`\`

## 📋 إدارة المهام
- [x] إنشاء تخطيط متجاوب
- [x] تنفيذ معاينة مباشرة بأسلوب GitHub
- [x] إضافة تلوين بناء الجملة لكتل التعليمات البرمجية
- [x] دعم التعبيرات الرياضية بـ LaTeX
- [x] تفعيل مخططات Mermaid

## 🆚 مقارنة الميزات

| الميزة                   | Markdown Viewer (لنا)     | محررات Markdown الأخرى     |
|:-------------------------|:------------------------:|:-------------------------:|
| المعاينة المباشرة        | ✅ أسلوب GitHub           | ✅                       |
| التمرير المتزامن         | ✅ ثنائي الاتجاه          | 🔄 جزئي/لا يوجد          |
| دعم Mermaid              | ✅                       | ❌/محدود                 |
| عرض رياضيات LaTeX        | ✅                       | ❌/محدود                 |

### 📝 دعم الرؤوس متعددة الأسطر

<table>
  <thead>
    <tr>
      <th rowspan="2">نوع المستند</th>
      <th colspan="2">الدعم</th>
    </tr>
    <tr>
      <th>Markdown Viewer (لنا)</th>
      <th>محررات Markdown الأخرى</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>التوثيق التقني</td>
      <td>كامل + مخططات</td>
      <td>محدود/أساسي</td>
    </tr>
    <tr>
      <td>ملاحظات البحث</td>
      <td>كامل + رياضيات</td>
      <td>جزئي</td>
    </tr>
    <tr>
      <td>أدلة المطورين</td>
      <td>كامل + تصدير</td>
      <td>أساسي</td>
    </tr>
  </tbody>
</table>

## 📝 أمثلة تنسيق النص

### تنسيق النص

يمكن تنسيق النص بطرق مختلفة: ~~يتوسطه خط~~، **غامق**، *مائل* أو ***غامق مائل***.

لإبراز المعلومات المهمة، استخدم <mark>نص مميز</mark> أو أضف <u>تحته خط</u> حيثما كان ذلك مناسبًا.

### المرتفعات والمنخفضات

الصيغ الكيميائية: H<sub>2</sub>O, CO<sub>2</sub>  
الترميز الرياضي: x<sup>2</sup>, e<sup>iπ</sup>

### مفاتيح لوحة المفاتيح

اضغط على <kbd>Ctrl</kbd> + <kbd>B</kbd> للنص الغامق.

### الاختصارات

<abbr title="Graphical User Interface">GUI</abbr>  
<abbr title="Application Programming Interface">API</abbr>

### محاذاة النص

<div style="text-align: center">
نص متوسط للمحاذاة للعناوين أو الإشعارات المهمة
</div>

<div style="text-align: right">
نص بمحاذاة لليمين (للتواريخ، التوقيعات، إلخ)
</div>

### **القوائم**

إنشاء قائمة نقطية:
* عنصر 1
* عنصر 2
  * عنصر متداخل
    * متداخل بشكل أعمق

### **الروابط والصور**

أضف [رابطًا](https://github.com/ThisIs-Developer/Markdown-Viewer) إلى الموارد المهمة.

تضمين صورة:
![Markdown Logo](https://markdownviewer.pages.dev/assets/icon.jpg)

### **الاقتباسات**

اقتبس من شخص مشهور:
> "أفضل طريقة للتنبؤ بالمستقبل هي اختراعه." - آلان كاي

---

## 🛡️ ملاحظة أمنية

هذا تطبيق يعمل بالكامل من جانب العميل. المحتوى الخاص بك لا يغادر متصفحك أبدًا ويبقى آمنًا على جهازك.`
};

// Process each language file
const langs = ['en', 'zh', 'zh-TW', 'ja', 'ko', 'ru', 'fr', 'es', 'de', 'it', 'pt', 'nl', 'pl', 'sv', 'ar'];

for (const lang of langs) {
  const filePath = path.join(i18nDir, lang + '.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.defaultTemplate = templates[lang];
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log('Updated: ' + lang + '.json (added defaultTemplate, ' + templates[lang].length + ' chars)');
}

console.log('\nDone! All 15 language files updated.');
