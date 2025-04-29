# Logseq Plugin: Old date format 🗝️

Logseqで日付形式を変更した後、リンクが無効になる問題を解決するプラグインです。

### このプラグインでできること

1. 古い日付リンクを新しい形式に一括変換
   - 現在無効になっているリンクを、新しい形式に置き換えます
   - グラフ内にないページへのリンクも変換できます 🆕
   - Obsidian形式（yyyy-MM-dd）や階層形式（yyyy/MM/dd）に対応

2. 古い形式のページを自動でリダイレクト
   - 古い形式のページを開くと、自動的に新しい形式のページに移動します

> [!NOTE]
> このプラグインは、Logseqの日付形式変更時の問題（[Logseq#4279](https://github.com/logseq/logseq/issues/4279)）を解決するために作られました。

> [!WARNING]
> Logseq dbバージョンでは動作しません

<div align="right">

[English](https://github.com/YU000jp/logseq-plugin-legacy-date-format) | [日本語](https://github.com/YU000jp/logseq-plugin-legacy-date-format/blob/main/readme.ja.md)
[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
公開日 20230820 <a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
</div>

## 使い方

### 1️⃣ インストール
- 右上の[`---`]から[`プラグイン`]を開く
- マーケットプレイスで「Legacy」を検索
- インストールボタンをクリック

### 2️⃣ セットアップ
1. プラグイン設定を開く
   ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

2. 古い形式から新しい形式に変換
   ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

### 注意点 ⚠️
- 変換後は必ずLogseqで再インデックスを実行してください
   - ブロックのUUIDが変更されるため、埋め込みや参照が影響を受ける可能性があります
   - 日誌以外のページでは、非表示の"create-at"プロパティが更新されます

---

## ショーケース / 質問 / アイデア / ヘルプ

> [議論](https://github.com/YU000jp/logseq-plugin-legacy-date-format/discussions) タブに移動して、この種の情報を尋ねたり見つけたりしてください。

1. おすすめ
   1. [曜日と週番号を表示するプラグイン](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

#### すべての日付形式のデモ

| 日付形式             | 今日                 |
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

## クレジット

- 製作者 > [@YU000jp](https://github.com/YU000jp)
