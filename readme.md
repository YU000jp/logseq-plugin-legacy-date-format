# Logseq Plugin: Legacy date format 🗝️

- Replace or redirect to enable the use of legacy date formats. Replace inactive links with journal attributes. They function as both links and references within.

- In Logseq, changing the user date format after graph construction is challenging. This is because even after performing a re-index, the links remain with the old date format. ( [Logseq#4279](https://github.com/logseq/logseq/issues/4279) ) To address this issue, this plugin has been developed.

## Showcase

- Replace it with format yyyy-MM-dd, which is consistent with Obsidian.
- Replace it with hierarchy-enabled yyyy/MM/dd format.

[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
Published 2023/08/20

---

## Features

### Replace all journal links on all files

> After changing user date format and running re-index on Logseq.
- Replace it from the legacy format to new format. Search and replace in queries.

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

- Replace from the legacy format to new format

  ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

- After changing the Date format, it's necessary to perform a re-index in Logseq. There are a few important points to note:

  1. The UUID of blocks gets changed, which might lead to the inability to use features like embedding or references.
  1. Pages other than journals have their "create-at" creation date property updated. However, this is an invisible property, so it doesn't cause any issues.

#### All date format demo

| Date format |	day |
| --- | --- |
| MM/dd/yyyy | 08/20/2023 |
| dd-MM-yyyy | 20-08-2023 |
| dd.MM.yyyy | 20.08.2023 |
| yyyy/MM/dd | 2023/08/20 |
| MM-dd-yyyy | 08-20-2023 |
| MM/dd/yyyy | 08/20/2023 |
| MMM do, yyyy | Aug 20th, 2023 |
| MMMM do, yyyy | August 20th, 2023 |
| MM_dd_yyyy | 08_20_2023 |
| dd-MM-yyyy | 20-08-2023 |
| do MMM yyyy | 20th Aug 2023 |
| do MMMM yyyy | 20th August 2023 |
| yyyy-MM-dd | 2023-08-20 |
| yyyy-MM-dd EEEE | 2023-08-20 Sunday |
| yyyy/MM/dd | 2023/08/20 |
| yyyyMMdd | 20230820 |
| yyyy_MM_dd | 2023_08_20 |
| yyyy年MM月dd日 | 2023年08月20日 |
 
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
