# Logseq Plugin: Legacy date format 🗝️

- Replace or redirect to enable the use of legacy date formats. Replace inactive links with journal attributes. They function as both links and references within.

- In Logseq, changing the user date format after graph construction is challenging. This is because even after performing a re-index, the links remain with the old date format. ( [Logseq#4279](https://github.com/logseq/logseq/issues/4279) ) To address this issue, this plugin has been developed.

[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
Published 2023/08/20

---

## Features

### Replace all journal links on all files

- Replace from the legacy format to new format. Search and replace in queries.

  ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

### Redirect when open a page (Option)

- Enabling the use of expired links due to changes in user date formatting. When opening the page, if the title matches the legacy format, it will redirect to the journal page. Enabling this option prevents links from becoming inactive.

---

## Getting Started

### Install from Logseq Marketplace

- Press [`---`] on the top right toolbar to open [`Plugins`]
- Select marketplace
- Type `Legacy` in the search field, select it from the search results and install

### Usage

- Setup from Plugin Settings

  ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

- After changing the Date format, it's necessary to perform a re-index in Logseq. There are a few important points to note:

  1. The UUID of blocks gets changed, which might lead to the inability to use features like embedding or references.
  1. Pages other than journals have their "create-at" creation date property updated. However, this is an invisible property, so it doesn't cause any issues.

#### All date format demo

![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/b0431d24-1d43-42e6-99a3-67c020846615)

---

## Showcase / Questions / Ideas / Help

> Go to the [discussion](https://github.com/YU000jp/logseq-plugin-legacy-date-format/discussions) tab to ask and find this kind of things.

## Author

- GitHub: [YU000jp](https://github.com/YU000jp)

## Prior art & Credit

### Icon

- [icooon-mono.com](https://icooon-mono.com/)

---

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
