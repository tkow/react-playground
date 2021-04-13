# VSCodeの使い方

##　この章の目標

- VSCodeの機能について知る
- 便利なプラグイン機能について知る
- キーの設定を自力でできるようになる
- vscodeを思考の速さで操作できるようになる[元ネタ](https://www.amazon.co.jp/%E5%AE%9F%E8%B7%B5Vim-%E6%80%9D%E8%80%83%E3%81%AE%E3%82%B9%E3%83%94%E3%83%BC%E3%83%89%E3%81%A7%E7%B7%A8%E9%9B%86%E3%81%97%E3%82%88%E3%81%86-Drew-Neil/dp/4048916599)

## VSCodeの利点

- Microsoftが作っているのでTypescriptのサポートに対して異常な速さで対応してくれます。
- 比較的軽めです。(Atom, JetBrains系, Sublimeと比較して)
- 初期設定で多くの便利な機能が使えます。
- pluginの拡張が容易で開発者人口が多く、学習コストがそれほど高くないと言われています。
- 無料で使えます。

Visual Studioの部分的機能を切り出しているエディタなのでVistual Studioが使える方はVisual Studioもお勧めします。

## VSCodeのインストール

https://azure.microsoft.com/ja-jp/products/visual-studio-code/

## VSCodeのよく使う基本的な機能

Macの場合を想定していますのでWindows Userの方は適宜コマンドを調べてください基本的にはCmdがsuperキーか、ctrlに対応していると思います。（有志の方がいらっしゃればWindows版の操作も更新するかもです。）
keyは同時入力するものを`\`\``で囲っています。クォートのない`+`は連続入力を表しています。

  ### 設定呼び出し

    - `Cmd + k` + `Cmd + s`でキーバインドの設定ができます
    - `Cmd + ,`でエディタ設定を開きます


## VSCodeのプラグイン

VSCodeにはプラグイン機能が充実しておりインストールするだけで様々な拡張機能が手に入ります。
今回はTypescript + Reactを利用する場合に便利な拡張機能を入れておきましょう。

- JavaScript and TypeScript Nightly
- vscode-styled-components(styled-componentsを利用する場合)
- GitLens — Git supercharged
- ESLint
- Prettier - Code formatter

他にも便利なプラグインがいろいろあるので探してみてください。


### キーバインド改変

    VSCodeでは便利なのにデフォルトで有効になっていないエディタ・キー設定が多くあります。設定呼び出しのショートカットを最初に持ってきた理由はキーバインドを確認してもらうことでエディタの機能を紹介しつつ、自分の使いやすいようにエディタ操作をカスタマイズしたりする過程を踏んでもらうためです。慣れてくると、自分で該当の操作のキーバインドを探して設定することで、作業効率をする方法を開拓していくことができるようになります。様々な言語を利用する多くの場合、拡張機能等の優位性からエディタを一つに絞ることができないことも多いのですが、エディタの設定はほとんどの場合変更がことができるので自分でお決まりのキーバインドを持っておくことで覚える労力を減らすことができます。

  ### 便利な操作

    ここでは各々好きなキーバインドを用いたりする事を前提にデフォルトキーではなくキーアクションのIDで紹介します。設定呼び出し(デフォルトキー`Cmd + k` + `Cmd + s`)を利用してキーアクションに対応するキーアクションを調べていきましょう。OS単位で一般的なキーバインドは多少省いてあります。

  ### インテリセンス関連(自動補完・サジェスト機能)
    - `editor.action.triggerSuggest`および `toggleSuggestionDetails`: その場でインテリセンスのサジェスチョンを開きます。入力文字の途中やサジェスチョンが消えている時でも再表示するすることができます。Macだとデフォルトで本体のキーバインドと被っているので、必ずキーバインドを変更して使えるようにした方が良いです。
    - `selectNextSuggestion`または`selectPrevSuggestion`: suggestionの選択ができます。矢印キーで十分ですが、tabでも移動できるようにすると便利です。（理由スニペットのタブストップへのジャンプとサジェスチョン確定でジャンプが被ると煩わしいなどの意図でキーバインドをずらしておくと使いやすくなります）

  ### 検索・置換関連の機能

    - `workbench.action.quickOpen`: ファイル名検索ができます。
    - `workbench.action.showCommands`でコマンドパレット(機能索引)が出せます。
      - `workbench.action.quickOpen`の検索バーの最初の文字に`>`を打つとコマンドパレットに切り替えることができます
    - `actions.find`でファイル名検索ができます。
    - `workbench.action.findInFiles`でプロジェクト内ファイル横断検索ができます。
    - `workbench.action.replaceInFiles`: ファイルを横断して文字列を置換する
    - `editor.action.startFindReplaceAction`: エディタ内の文字列を置換する

  ### ファイル移動関連

    - `editor.action.revealDefinition`: 参照元にコードジャンプができます
    - `workbench.action.navigateBack`: ファイル移動を含め直近のカーソル位置まで戻れます
    - `workbench.action.navigateForward`: ファイル移動を含め直近のGo Back前の位置までカーソル戻れます
    - `workbench.action.gotoLine`: ファイル内の指定の行数に飛べます
    - `breadcrumbs.focus`/`breadcrumbs.focusPrevious`/`breadcrumbs.focusPrevious`: breadcrumbを利用して同じディレクトリ・ファイル内のオブジェクトに高速でアクセスできます。

  ### カーソル・選択系

    - `editor.action.smartSelect.expand`/`editor.action.smartSelect.shrink`: カーソルの存在する括弧を一回り外/内まで選択状態にします
    - `Add Cursor Above`/`Add Cursor Below` : カーソルを上/下に増やします。
    - `cursorHome`/`cursorEnd` : カーソルを行頭/行末に移動します。
    - `cursorHomeSelect`/`cursorEndSelect` : カーソルから行頭/行末まで移動します。
    - `cursorWordLeft`/`cursorWordRightEnd`: 単語毎に移動します。
    - `editor.action.addSelectionToNextFindMatch`: 選択中の文字列と現時点のカーソル位置より後に出てきた同じ文字列を同時に選択します。特定の文字列を部分的に変更していきたい時などに便利です。
    - `editor.action.selectHighlights`: 選択中の文字列と同じ文字列を全て同時に選択します。ファイル中の文字列を一括置換したい場合などに便利です。
    - `editor.action.addCursorsToBottom`/`editor.action.addCursorsToTop`: ファイルの先頭/末尾までカーソルを増殖します。ファイルの大部分を一括でインデントしたい場合などに便利です。

  ### その他
    - workbench.action.terminal.toggleTerminal: VSCode上のterminalに操作を切り替えられる
    - 選択状態でない時にコピーアクション/カットアクションをすると、行単位で実行されます。カットは特に行を消したい時に連打すると便利です
    - 矢印キーを使わないカーソル移動はホームポジションから移動させずに済むので便利です。ctrl+b, ctrl+f, ctrl+n, ctrl+pでカーソル移動の代替ができます(vimキーバインドなどに慣れている人はpluginなどで調整すると良いと思います), ctrl + a/ctrl + e(行頭/行末移動)など。
    - カーソル増殖 + 選択系アクションを組み合わせると様々な応用が効きます。例えば、共通部分を選択した後にカーソルを行末に移動させるアクションを行うとその単語が含まれる行の末尾だけを同時に編集するというような操作ができます。

  ### おまけ
  著者が使っているキーバインド変更の一例です。まだまだ便利な機能もあると思います。気づいたら操作を効率化していきましょう。

  ```json
  [
    {
        "key": "ctrl+m",
        "command": "toggleSuggestionDetails",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+space",
        "command": "-toggleSuggestionDetails",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+m",
        "command": "editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+space",
        "command": "-editor.action.triggerSuggest",
        "when": "editorHasCompletionItemProvider && textInputFocus && !editorReadonly"
    },
    {
        "key": "ctrl+alt+m",
        "command": "editor.action.toggleTabFocusMode"
    },
    {
        "key": "ctrl+m",
        "command": "-editor.action.toggleTabFocusMode"
    },
    {
        "key": "ctrl+down",
        "command": "selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+pagedown",
        "command": "-selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "tab",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+down",
        "command": "-selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+enter",
        "command": "acceptSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "tab",
        "command": "-acceptSelectedSuggestion",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "pagedown",
        "command": "-selectNextPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+up",
        "command": "selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+pageup",
        "command": "-selectPrevPageSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+tab",
        "command": "selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+up",
        "command": "-selectPrevSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+enter",
        "command": "hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+escape",
        "command": "-hideSuggestWidget",
        "when": "suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "ctrl+]",
        "command": "editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+cmd+\\",
        "command": "-editor.action.jumpToBracket",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+cmd+l",
        "command": "editor.action.indentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "cmd+]",
        "command": "-editor.action.indentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "cmd+]",
        "command": "workbench.action.navigateForward"
    },
    {
        "key": "ctrl+shift+-",
        "command": "-workbench.action.navigateForward"
    },
    {
        "key": "cmd+[",
        "command": "workbench.action.navigateBack"
    },
    {
        "key": "ctrl+-",
        "command": "-workbench.action.navigateBack"
    },
    {
        "key": "shift+cmd+l",
        "command": "editor.action.outdentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "cmd+[",
        "command": "-editor.action.outdentLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+cmd+d",
        "command": "editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "shift+cmd+l",
        "command": "-editor.action.selectHighlights",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+cmd+r",
        "command": "workbench.view.debug"
    },
    {
        "key": "shift+cmd+d",
        "command": "-workbench.view.debug"
    },
    {
        "key": "right",
        "command": "breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "alt+right",
        "command": "-breadcrumbs.focusNext",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "left",
        "command": "breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "alt+left",
        "command": "-breadcrumbs.focusPrevious",
        "when": "breadcrumbsActive && breadcrumbsVisible"
    },
    {
        "key": "alt+down",
        "command": "breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "shift+cmd+.",
        "command": "-breadcrumbs.focusAndSelect",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "alt+up",
        "command": "breadcrumbs.focus",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "shift+cmd+;",
        "command": "-breadcrumbs.focus",
        "when": "breadcrumbsPossible"
    },
    {
        "key": "ctrl+shift+up",
        "command": "editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+up",
        "command": "-editor.action.moveLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "alt+up",
        "command": "-showPrevParameterHint",
        "when": "editorFocus && parameterHintsMultipleSignatures && parameterHintsVisible"
    },
    {
        "key": "ctrl+shift+down",
        "command": "editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "alt+down",
        "command": "-editor.action.moveLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+j",
        "command": "workbench.action.gotoLine"
    },
    {
        "key": "ctrl+g",
        "command": "-workbench.action.gotoLine"
    },
    {
        "key": "ctrl+s",
        "command": "cursorWordLeft",
        "when": "textInputFocus"
    },
    {
        "key": "alt+left",
        "command": "cursorWordLeft",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+cmd+j",
        "command": "editor.action.joinLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+j",
        "command": "-editor.action.joinLines",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+g",
        "command": "cursorWordEndRight",
        "when": "textInputFocus"
    },
    {
        "key": "alt+right",
        "command": "cursorWordEndRight",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+cmd+i",
        "command": "editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+i",
        "command": "-editor.action.insertCursorAtEndOfEachLineSelected",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+cmd+up",
        "command": "editor.action.addCursorsToTop"
    },
    {
        "key": "ctrl+shift+cmd+down",
        "command": "editor.action.addCursorsToBottom"
    },
    {
        "key": "ctrl+i",
        "command": "editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    },
    {
        "key": "f12",
        "command": "-editor.action.revealDefinition",
        "when": "editorHasDefinitionProvider && editorTextFocus && !isInEmbeddedEditor"
    }
  ]

  ```

## workspace

vscodeは開いているdirectory配下をworkspaceとして認識します。
workspace内のトップディレクトリに.vscodeというディレクトリに指定のファイルを置くとworkspace内でvscodeの設定を読み込むことができます。

https://code.visualstudio.com/docs/getstarted/settings

### settings.json

コマンドパレットでPreferences: Open Work Spaceで開いてみます。この時、UserあるいはWorkSpaceの設定が開かれます。
UserとWorkSpaceの設定はそれぞれ共通ですが、WorkSpaceの設定はUserの設定よりも優先されます。WorkSpaceの設定を変更すると現在開いているWorkspaceのdirectory内に.vscode/settings.jsonというファイルが作成されます。このファイルを共有することで、チーム全体で必要なvsoceの設定を共有することができます。手動でこのファイルを編集することもできます。


### settings.json

コマンドパレットでPreferences: Open Work Spaceで開いてみます。この時、UserあるいはWorkSpaceの設定が開かれます。
UserとWorkSpaceの設定はそれぞれ共通ですが、WorkSpaceの設定はUserの設定よりも優先されます。WorkSpaceの設定を変更すると現在開いているWorkspaceのdirectory内に.vscode/settings.jsonというファイルが作成されます。このファイルを共有することで、チーム全体で必要なvsoceの設定を共有することができます。手動でこのファイルを編集することもできます。

### snippetファイル

.vscode/*.code-snippetsという命名でファイルを作成するとworkspace内でsnippetを使えるようになります。（vscode pluginとしても公開できます）
定義はjson形式で以下のような形で定義します。（*snippet*: 素早くコードを書くためのテンプレートの事）
```
{
    "Initialize React Functional Component": {
		"prefix": "itfc",
		"body": [
			"import $2 from $1",
			"",
			"export type ${1:Component}Props = {",
			"  $2",
			"}",
			"",
			"function ${1:Component} (props:${1:Component}Props): React.ReactElement<${1:Component}Props> {",
			"  return $3;",
			"};",
			"",
			"export default ${1:Component};",
			""
		],
		"description": "Create a React Stateless Functional Component."
	},
}
```
top levelのkeyにはsnippetのID、prefixにはサジェスト機能で使用する際に入力するコマンド、bodyにはスニペットを呼び出した時にカーソル位置からペーストしたい文字列と指定の位置をTabを押していく事で${n}番目の位置に順番に入力カーソルを移動させるタブストップと呼ばれるプレースホルダー、descriptionにはsnippetの説明を定義できます。タブストップにはデフォルト値を設定することができてtabで入力をスキップすることでデフォルトの値をそのまま使うことができます。また、デフォルト値を入れておくことでユーザーがスニペットを呼び出した時に入力すべきものを明確にすることができます。よく使うコードは登録しておくと良いでしょう。
### その他

その他共有できる設定については以下も参照してみてください。

https://qiita.com/frozenbonito/items/130f1fce5d3f97997d81


### Settings Sync

エディタの設定を複数台のマシンで共有するためにvsocodeにはSettings Syncというツールがデフォルトで入っています。
これはGithuのGistというコード共有サービスを利用して、現在のユーザーのエディタ設定を保存して、他のマシンからダウンロードできるようにするという仕組みで動いています。
デフォルトではpublicな状態で保存されますがSetting Sync Extensionを用いるとPrivate Gistで管理することもできます。
https://code.visualstudio.com/docs/editor/settings-sync
