# Logseq Plugin: Legacy date format 🗝️

[English](https://github.com/YU000jp/logseq-plugin-legacy-date-format) | [日本語](https://github.com/YU000jp/logseq-plugin-legacy-date-format/blob/main/readme.ja.md)

- Logseq does not update date links after changing the date format and those links become invalid. This is a plugin that replaces these links.
- In Logseq, changing the user date format after graph construction is challenging. This is because even after performing a re-index, the links remain with the old date format. ( [Logseq#4279](https://github.com/logseq/logseq/issues/4279) ) To address this issue, this plugin has been developed.

> Only markdown format supported

[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
Published 2023/08/20

## Showcase

- If changed user date format
  - Replace inactive links with format yyyy-MM-dd, which is consistent with Obsidian.
  - Replace it with hierarchy-enabled yyyy/MM/dd format.

## Options

1. Replace journal links on all files
   - Replace it from the legacy format to new format. Search and replace in queries.
     > After changing user date format and running re-index on Logseq.
1. Redirect when open a page
   - Enabling the use of expired links due to changes in user date formatting. When opening the page, if the title matches the legacy format, it will redirect to the journal page. Enabling this option prevents links from becoming inactive.

---

## Getting Started

Install from Logseq Marketplace
  - Press [`---`] on the top right toolbar to open [`Plugins`]. Select marketplace. Type `Legacy` in the search field, select it from the search results and install.

### Usage

- Setup from Plugin Settings

   ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

- Replace from the legacy format to new format

   ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

- After changing the Date format, it's necessary to perform a re-index in Logseq. There are a few important points to note:

  1. The UUID of blocks gets changed, which might lead to the inability to use features like embedding or references.
  1. Pages other than journals have their "create-at" creation date property updated. However, this is an invisible property, so it doesn't cause any issues.

#### All date format demo

| Date format          | Today                |
|----------------------|----------------------|
| E, d MMMM yyyy       | Tue, 19 September 2023 |
| E, MM/dd/yyyy        | Tue, 09/19/2023      |
| E, dd-MM-yyyy        | Tue, 19-09-2023      |
| E, dd.MM.yyyy        | Tue, 19.09.2023      |
| E, yyyy/MM/dd        | Tue, 2023/09/19      |
| EEE, MM/dd/yyyy      | Tue, 09/19/2023      |
| EEE, dd-MM-yyyy      | Tue, 19-09-2023      |
| EEE, dd.MM.yyyy      | Tue, 19.09.2023      |
| EEE, yyyy/MM/dd      | Tue, 2023/09/19      |
| EEEE, MM/dd/yyyy     | Tuesday, 09/19/2023  |
| EEEE, dd-MM-yyyy     | Tuesday, 19-09-2023  |
| EEEE, dd.MM.yyyy     | Tuesday, 19.09.2023  |
| EEEE, yyyy/MM/dd     | Tuesday, 2023/09/19  |
| MM-dd-yyyy           | 09-19-2023           |
| MM/dd/yyyy           | 09/19/2023           |
| dd-MM-yyyy           | 19-09-2023           |
| dd.MM.yyyy           | 19.09.2023           |
| yyyy/MM/dd           | 2023/09/19           |
| MM_dd_yyyy           | 09_19_2023           |
| do MMM yyyy          | 19th Sep 2023        |
| do MMMM yyyy         | 19th September 2023  |
| yyyy-MM-dd           | 2023-09-19           |
| yyyy-MM-dd EEEE      | 2023-09-19 Tuesday   |
| yyyy/MM/dd           | 2023/09/19           |
| yyyyMMdd             | 20230919             |
| yyyy_MM_dd           | 2023_09_19           |
| yyyy年MM月dd日       | 2023年09月19日       |
 
---

## Recommend

- [Show Weekday and Week-number plugin](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

## Showcase / Questions / Ideas / Help

> Go to the [discussion](https://github.com/YU000jp/logseq-plugin-legacy-date-format/discussions) tab to ask and find this kind of things.

Author > [YU000jp (GitHub)](https://github.com/YU000jp)

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌Buy Me A Coffee" style="height: 42px;width: 152px" ></a>
