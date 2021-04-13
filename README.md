## React Training

社内外勉強会用のリポジトリ一般公開しています。
このチュートリアルに関する原文の著作権は筆者に帰属していますが、ここで紹介しているソースコードや、サンプルプログラムに関しては付随するプログラムのライセンスにしたがっている限り商用・非商用問わず自由に利用していただいて構いません。

## はじめに

このチュートリアルではNode.js, CSS, HTMLの基礎知識を持っていることを前提としています。
また、Typescriptを利用するため、初歩的な静的型付け言語の知識を必要とします。
もし、これらの知識に不安がある場合は以下のソースなどで予習を行ってください。

### HTML/CSSの基礎知識

https://saruwakakun.com/html-css/basic

### Node.jsの前提知識

https://qiita.com/tkow/items/69728531b922f288c7a5

### Typescriptの基礎知識

https://typescript-jp.gitbook.io/deep-dive/getting-started

### ドットインストールの講座

https://dotinstall.com/lessons/basic_nodejs
https://dotinstall.com/lessons/basic_reactjs

## 学習の仕方

このチュートリアルはReactを実装していく上で身につけるべき考え方とReact関連ツールの利用方法を理解する事をゴールとして章立てして構成しています。
最終成果物は[lesson-chat](./lesson-chat)にありますが、それぞれのツールの使い方の事例毎に興味がある所をかいつまんで読んでいけるように構成しました。
また、目次通りにステップを踏む事でmasterブランチのlesson-chatを構築できるように構成してあります。
深く理解したい方はtemplateブランチを実際に手を動かしながら練習してみてください。

## 注意

Node.jsのライブラリはnode_modulesという名称ですが複数のnode_modulesを扱う時はpackagesと言う語句が使われていてその境界が曖昧です。このチュートリアルでは特に断りがある場合を除いて、ほとんどの文脈でライブラリ、モジュール、パッケージと言う言葉を同一の語句の意味として扱っています。


## 目次

[開発環境を整える](./docs/step1/開発環境を整える.md)

[Reactのプロジェクト構成について](./docs/step2/Reactのプロジェクト構成について.md)

[コンポーネントを作る](./docs/step3/コンポーネントを作る.md)
