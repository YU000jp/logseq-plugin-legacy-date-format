# Logseq Plugin: Legacy date format 🗝️

[English](https://github.com/YU000jp/logseq-plugin-legacy-date-format) | [日本語](https://github.com/YU000jp/logseq-plugin-legacy-date-format/blob/main/readme.ja.md)

-# レガシー日付フォーマットの使用を可能にするための置換またはリダイレクト

非アクティブなリンクをジャーナル属性で置換します。これらはリンクと参照の両方として機能します。

- Logseqでは、グラフ構築後にユーザー日付フォーマットを変更することは困難です。これは、再インデックスを実行した後でも、リンクが古い日付フォーマットのままであるためです（[Logseq#4279](https://github.com/logseq/logseq/issues/4279)）。この問題を解決するために、このプラグインが開発されました。

> サポートされているのはMarkdown形式のみです

[![最新リリースバージョン](https://img.shields.io/github/v/release/YU000jp/logseq-plugin-legacy-date-format)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
[![ライセンス](https://img.shields.io/github/license/YU000jp/logseq-plugin-legacy-date-format?color=blue)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/LICENSE)
[![ダウンロード](https://img.shields.io/github/downloads/YU000jp/logseq-plugin-legacy-date-format/total.svg)](https://github.com/YU000jp/logseq-plugin-legacy-date-format/releases)
公開日：2023/08/20

## ショーケース

- ユーザー日付フォーマットを変更した場合
  - 非アクティブなリンクをObsidianと一貫したyyyy-MM-dd形式に置換します。
  - 階層付きyyyy/MM/dd形式に置換します。

## オプション

1. すべてのファイルでジャーナルリンクを置換
   - 旧フォーマットから新フォーマットに置換します。クエリ内で検索および置換を行います。
     > Logseqでユーザー日付フォーマットを変更し、再インデックスを実行した後。
1. ページを開いた際のリダイレクト
   - ユーザー日付フォーマットの変更によるリンクの期限切れを防ぐためにリダイレクトを有効にします。ページを開く際、タイトルが旧フォーマットと一致する場合、ジャーナルページにリダイレクトされます。このオプションを有効にすると、リンクが非アクティブになるのを防ぎます。

---

## はじめに

Logseq Marketplaceからインストール
  - 右上のツールバーで [`---`] を押して [`プラグイン`] を開きます。マーケットプレイスを選択し、「Legacy」を検索フィールドに入力して、検索結果から選択してインストールします。

### 使い方

- プラグイン設定からセットアップ

   ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/e74ed3e8-a141-447f-a971-5238521383e0)

- 旧フォーマットから新フォーマットに置換

   ![画像](https://github.com/YU000jp/logseq-plugin-legacy-date-format/assets/111847207/1a175dc3-3c38-456f-838a-4f0cbdb3dc7b)

- 日付フォーマットを変更した後、Logseqで再インデックスを実行する必要があります。注意すべき重要なポイントがいくつかあります：

  1. ブロックのUUIDが変更され、埋め込みや参照などの機能を使用できなくなる可能性があります。
  1. ジャーナル以外のページには、作成日の "create-at" プロパティが更新されます。ただし、これは見えないプロパティであり、問題を引き起こしません。

#### すべての日付フォーマットのデモ

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

## おすすめ

- [曜日と週番号を表示するプラグイン](https://github.com/YU000jp/logseq-plugin-show-weekday-and-week-number)

## ショーケース / 質問 / アイデア / ヘルプ

> [議論](https://github.com/YU000jp/logseq-plugin-legacy-date-format/discussions) タブに移動して、この種の情報を尋ねたり見つけたりしてください。

製作者 > [YU000jp（GitHub）](https://github.com/YU000jp)

<a href="https://www.buymeacoffee.com/yu000japan" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="🍌製作者にコーヒーをおごってください!" style="height: 42px;width: 152px" ></a>
