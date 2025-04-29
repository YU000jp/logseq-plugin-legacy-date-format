# Logseq Plugin: Old date format 🗝️

A plugin to fix invalid date links after changing date format in Logseq.

### Features

1. Batch Convert Legacy Date Links
   - Replace invalid date links with the new format
   - Convert links even if the target page doesn't exist 🆕
   - Support for Obsidian format (yyyy-MM-dd) and hierarchy format (yyyy/MM/dd)

2. Automatic Page Redirect
   - Automatically redirects from old format pages to new format pages

> [!NOTE]
> This plugin was created to solve Logseq's date format change issue ([Logseq#4279](https://github.com/logseq/logseq/issues/4279))

> [!WARNING]
> Not compatible with Logseq db version

<div align="right">

[English](https://github.com/YU000jp/logseq-plugin-legacy-date-format) | [日本語](https://github.com/YU000jp/logseq-plugin-legacy-date-format/blob/main/readme.ja.md)
[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
Published 2023/08/20 <a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
</div>

## How to Use

### 1️⃣ Installation
- Click [`---`] in the top right toolbar
- Open [`Plugins`]
- Search for "Legacy" in marketplace
- Click Install

### 2️⃣ Setup
1. Open Plugin Settings

   ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

2. Convert from Old to New Format

   ![image](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

### Important Notes ⚠️
- Always run re-index in Logseq after conversion
  - Block UUIDs will change, which may affect embeds and references
  - Non-journal pages will have their hidden "create-at" property updated

---

## Showcase / Questions / Ideas / Help

> Go to the [Discussions](https://github.com/YU000jp/logseq-plugin-legacy-date-format/discussions) tab to ask and find this kind of things.

1. Recommend
  - [Show Weekday and Week-number plugin](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

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
| yyyy年MM月dd日        | 2023年09月19日        |

## Credit

- Author > [@YU000jp](https://github.com/YU000jp)
