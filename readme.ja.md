# Logseq Plugin: Old date format 🗝️

通常、Logseqでは日付形式を変更した後に、日付リンクが更新されず、そのリンクが無効になります。そのリンクを置き換えて使用可能にするためのプラグインです。リダイレクトもできます。
  > Logseqでは、グラフ構築後にユーザー日付形式 を変更することは困難です。これは、再インデックスを実行した後でも、リンクが古い日付形式のままであるためです（[Logseq#4279](https://github.com/logseq/logseq/issues/4279)）。この問題を解決するために、このプラグインが開発されました。

> [!WARNING]
>このプラグインはLogseq dbバージョンでは動作しません。

<div align="right">

[English](https://github.com/YU000jp/logseq-plugin-legacy-date-format) | [日本語](https://github.com/YU000jp/logseq-plugin-legacy-date-format/blob/main/readme.ja.md)
[![latest release version](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![License](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![Downloads](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
公開日 20230820 <a href="https://www.buymeacoffee.com/yu000japan"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=yu000japan&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff" /></a>
</div>

## 概要

1. メイン: すべてのファイルで日誌リンクを置換
   - 非アクティブになっている元の形式から、選択した形式に新しく置き換えます。
      1. 非アクティブなリンクを、Obsidian と同じように、"yyyy-MM-dd" 形式に置き換える。
      1. 階層機能が有効になる、"yyyy/MM/dd" 形式に置き換える。
     
1. オプション: ページを開いた際のリダイレクト
   - ユーザー日付形式の変更によるリンクの期限切れを防ぐためにリダイレクトを有効にします。ページを開く際、タイトルが旧形式と一致する場合、日付のページにリダイレクトします。このオプションを有効にすると、リンクが非アクティブになるのを防ぎます。

---

## はじめに

Logseq マーケットプレースからインストール
  - 右上のツールバーで [`---`] を押して [`プラグイン`] を開きます。マーケットプレイスを選択し、「Legacy」を検索フィールドに入力して、検索結果から選択してインストールします。

### 使い方

Logseqでユーザー日付形式を変更し、再インデックスを実行した後
  1. プラグイン設定からセットアップ

     ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

  1. 旧形式から新形式に置換

     ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

  1. 日付形式を変更した後、Logseqで再インデックスを実行する必要があります。注意すべき重要なポイントがいくつかあります：
     1. ブロックのUUIDが変更され、埋め込みや参照などの機能を使用できなくなる可能性があります。
     1. 日誌以外のページには、作成日の "create-at" プロパティが更新されます。通常、これは見えないプロパティです。

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
