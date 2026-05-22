<div align="center">

# 📝 Markdown Viewer

**Online Markdown Editor & Live Preview Tool**

🌐 **Live Demo**: [markdownviewer.live](https://markdownviewer.live)

[![Deploy on Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://markdownviewer-live.vercel.app)
[![GitHub license](https://img.shields.io/github/license/lucaAce1024/markdownviewer-live)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/lucaAce1024/markdownviewer-live?style=social)](https://github.com/lucaAce1024/markdownviewer-live)

A powerful GitHub-style Markdown rendering tool with **live preview**, **LaTeX math**, **Mermaid diagrams**, **syntax highlighting**, **dark mode**, and **export options** to PDF, HTML, and MD — all fully client-side and secure.

![Markdown Viewer Screenshot](assets/live-peview.gif)

</div>

---

## ✨ Features

- **Live Preview** — Real-time GitHub-style Markdown rendering
- **Sync Scrolling** — Two-way synchronized scrolling between editor and preview
- **Mermaid Diagrams** — Flowcharts, sequence diagrams, and more
- **LaTeX Math** — Full support for mathematical expressions via MathJax
- **Syntax Highlighting** — Code blocks with language-aware highlighting
- **Dark / Light Theme** — Toggle between themes, respects system preference
- **Export** — Download as PDF, HTML, or Markdown
- **Import** — Open local `.md` files or import from GitHub repositories
- **Drag & Drop** — Drop a Markdown file directly into the editor
- **Share via URL** — Compress content into a shareable link
- **Multi-tab Support** — Work with multiple documents simultaneously
- **RTL Support** — Right-to-left text direction toggle
- **Emoji & Symbols** — Insert emojis and HTML entities from a visual picker
- **Fully Client-Side** — Your content never leaves the browser

## 🚀 Quick Start

### Use Online

Visit **[markdownviewer.live](https://markdownviewer.live)** — no installation required.

### Self-Host

```bash
# Clone the repository
git clone https://github.com/lucaAce1024/markdownviewer-live.git
cd markdownviewer-live

# Open locally
open index.html
# or serve with any static file server
npx serve .
```

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lucaAce1024/markdownviewer-live)

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Marked.js](https://marked.js.org/) | Markdown parsing & rendering |
| [Highlight.js](https://highlightjs.org/) | Syntax highlighting |
| [MathJax](https://www.mathjax.org/) | LaTeX math rendering |
| [Mermaid](https://mermaid.js.org/) | Diagram generation |
| [DOMPurify](https://github.com/cure53/DOMPurify) | HTML sanitization |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF export |
| [html2canvas](https://html2canvas.hertzen.com/) | HTML-to-canvas capture |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | UI icons |
| [Pako](https://github.com/nicolo-ribaudo/pako) | URL share compression |

## 📁 Project Structure

```
markdownviewer-live/
├── index.html          # Main application HTML
├── styles.css          # All styles (light/dark themes)
├── script.js           # Application logic & Markdown rendering
├── assets/             # Images & icons
├── vercel.json         # Vercel deployment configuration
└── LICENSE             # MIT License
```

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

Based on [ThisIs-Developer/Markdown-Viewer](https://github.com/ThisIs-Developer/Markdown-Viewer).

---

<div align="center">

**[markdownviewer.live](https://markdownviewer.live)** — Free, open-source, no sign-up required.

</div>
