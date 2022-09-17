const [warn, error] = [1, 2]

module.exports = {
  env: {
    browser:true,
    es2021: true,
    node:   true,
  },
  extends: ['eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'],
  parser:       '@typescript-eslint/parser',
  parserOptions:{
    ecmaVersion:'latest',
    sourceType: 'module',
  },
  plugins: ['react',
    '@typescript-eslint'],
  rules: {
    quotes:                            [ error, 'single' ], // シングルクォーテーションを強制
    'no-console':                      warn, // consoleは残さない
    'no-debugger':                     warn, // debuggerは残さない
    'no-alert':                        error, // alert, confirm, promptを残さない
    'no-unused-vars':                  error, // 使用されていない変数は残さない
    'no-unused-private-class-members': error, // 使用されていないプライベートクラスの変数は残さない
    'new-cap':                         error, // コンストラクター名は大文字で始める
    indent:                            [error, 2], // インデント幅はスペース2
    semi:                              [error, 'never'], // セミコロンは不要
    curly:                             [error, 'multi'],
    'nonblock-statement-body-position':[error, 'beside'], // if (boolean) return <></> 1ラインで条件文が書ける
    'space-before-blocks':             [ // if(a){ => if (a) { (){}にスペースをつける
      error, {
        'functions':'always',
        'keywords': 'always',
        'classes':  'always',
      },
    ],
    'space-infix-ops':              error, // 1+1 => 1 + 1 予約キーワードにスペースをつける
    'block-spacing':                error, // {の後ろにスペースを空ける
    'no-whitespace-before-property':[error], // foo .bar => foo.bar プロパティの.は隣接させる
    'keyword-spacing':              [error, {
      'before':true,
      'after': true,
    }], // if文の{}()の前後にスペースを強制
    'space-before-function-paren': [error, { // キーワードの前にスペースを強制しない
      anonymous: 'never',
      named:     'never',
      asyncArrow:'always', // asyncキーワードの場合だけはスペースを付ける
    }],
    'func-call-spacing':[error, 'never'], // fun () => fun() ()をにスペースをつけない
    'space-in-parens':  [error, 'never'], // if ( a ) => if (a) ()の中の余計なスペースは削除
    'brace-style':      [error, 'stroustrup', {allowSingleLine: true}], // カーリーブレイスのあとは改行する。ただし、1行でも書ける。
    'comma-dangle':     [error, 'always-multiline' ], // 末尾のコンマを共用しない
    'comma-spacing':    [error, {
      'before':false,
      'after': true,
    }], // ,のスペース感覚を一定に
    'comma-style': [ // コンマのスタイル
      error, 'last',
      {
        'exceptions': {
          'ArrayExpression':    false,
          'CallExpression':     false,
          'FunctionDeclaration':false,
          'FunctionExpression': false,
          'ObjectExpression':   false,
          'VariableDeclaration':false,
          'NewExpression':      false,
        },
      },
    ],
    'dot-notation':      [error, {'allowKeywords': true}], // foo["bar"] => foo.bar 可能な限り.演算子を強制する
    'dot-location':      [error, 'property'], // .演算子に対して一貫したスタイルを強制
    'operator-linebreak':[ // 演算子に対して一貫したスタイルを強制
      error,
      'before',
      {'overrides': {'=': 'after'}},
    ],
    'eqeqeq':      [error, 'always', {'null': 'ignore'}], // 比較は===,!==を強制
    'import/order':[ error, {
      alphabetize:       {order: 'asc'},
      'newlines-between':'always',
      groups:            [ 'builtin', 'external', 'index', 'parent', 'sibling', 'type' ], // 順序
      pathGroups:        [
        {
          pattern: '@spad/**',
          group:   'external',
          position:'after',
        },
      ],
      pathGroupsExcludedImportTypes: [ 'builtin' ],
    } ],
    'no-trailing-spaces': [error, { // 末尾のスペースは許可しない
      'skipBlankLines':true,
      'ignoreComments':true,
    }],
    'spaced-comment': [ // コメントには行にスペースをつける
      error, 'always',
      {
        'line': {
          'exceptions': ['<debug>',
            '</debug>'],
        },
        'block': {'balanced': true},
      },
    ],
    'key-spacing': [ // :キーワードに対して一貫したスタイルを強制
      error,
      {
        'beforeColon':false,
        'afterColon': true, // :のあとにスペースを開ける
        'mode':       'minimum', // :のあとの変数の位置を揃える
        'align':      {
          'beforeColon':false,
          'afterColon': false,
          'on':         'value', // valueの位置を揃え
          // る
        },
      },
    ],
    'computed-property-spacing':   [error, 'never'], // foo['bar']などのブラケットに対して一貫したスタイルを強制
    'eol-last':                    [ error, 'always' ], // ファイルの末尾に空の改行をつける
    'object-curly-spacing':        [error, 'never'], // カーリーブレイスに対して一貫したスタイルを強制する
    'object-curly-newline':        ['error', {'multiline': true}], // カーリーブレイスの開始と終了のスタイル
    'object-property-newline':     'error', // オブジェクトのスタイル
    'one-var-declaration-per-line':[error, 'initializations'], // 変数宣言に一貫したスタイルを強制
    'max-len':                     [ // 行の長さを制限
      error,
      {
        'code':                  120,
        'ignoreComments':        true, // コメントは無視する
        'ignoreStrings':         true, // stringは無視する
        'ignoreRegExpLiterals':  true, // 正規表現は無視する
        'ignoreUrls':            true, // URLは無視する
        'ignoreTrailingComments':true, // 行末コメントは無視する
      },
    ],
    'padding-line-between-statements': [
      error,
      {
        blankLine:'always',
        prev:     'directive',
        next:     '*',
      }, // use strictのあとは改行
      {
        blankLine:'always',
        prev:     '*',
        next:     'return',
      }, // returnの前は改行
      {
        blankLine:'always',
        prev:     [ 'const', 'let' ],
        next:     '*',
      }, // const/letのあとは改行する
      {
        blankLine:'never',
        prev:     [ 'const', 'let' ],
        next:     [ 'const', 'let' ],
      }, // const/letが続いた場合は改行しない
      {
        blankLine:'always',
        prev:     '*',
        next:     [ 'if', 'switch', 'while', 'do', 'for', 'try' ],
      }, // 制御構文の前に改行を入れる
      {
        blankLine:'always',
        prev:     '*',
        next:     [ 'export' ],
      }, // exportの前は改行
      {
        blankLine:'never',
        prev:     'export',
        next:     [ 'export' ],
      }, // exportが続いた場合は改行しない
      {
        blankLine:'always',
        prev:     '*',
        next:     [ 'cjs-export' ],
      }, // CommonJSの前では改行する
      {
        blankLine:'never',
        prev:     [ 'cjs-export' ],
        next:     [ 'cjs-export' ],
      }, // CommonJSが連続する場合は無視
    ],
    'no-multi-str':           error, // エスケープで複数行の文字列を表すことを禁止する。
    'no-multi-spaces':        error, // 複数スペースを許可しない
    'no-multiple-empty-lines':[ // 改行を複数ある場合圧縮
      error,
      {
        max:   1,
        maxEOF:0,
      },
    ],
    'camelcase':               [error, {'properties': 'always'}], // 変数のキャメルケースを強制する
    'implicit-arrow-linebreak':error, // アロー関数に一貫したスタイルを強制する
    'arrow-body-style':        [error, 'as-needed'], // アロー関数に一貫したスタイルを強制する
    'func-style':              [error, 'expression'], // functionは必ず変数として宣言させる
    // eslint-disable-next-line no-magic-numbers
    'max-nested-callbacks':    [error, 3], // 関数のネストは2階層まで
    'no-confusing-arrow':      error, // 比較と混同される表現は()をつける
    'sort-imports':            error, // importはソートする
    'no-duplicate-imports':    [error, {'includeExports': true}], // importの重複排除
    'no-magic-numbers':        error, // マジックナンバーを禁止

    // ここからはここから言わなくても大丈夫だろうけど一応入れておくオプション
    'array-callback-return':      error, // reduceなどの配列の操作でcallbackする関数にreturnを強制する
    'no-param-reassign':          error, // パラメータの再設定を禁止
    'no-loop-func':               error, // loop内部で安全でない関数宣言は禁止
    'require-await':              warn, // waitがないasync関数の呼び出しを警告する
    'no-self-compare':            error, // 変数自身の比較を禁止
    'no-template-curly-in-string':error, // `${}`を'${}'で間違って入れないようにする
    'no-use-before-define':       error, // 変数を宣言する前に変数を使用しない
    'no-eval':                    error, // evalを禁止
    'array-bracket-newline':      [error, 'consistent'], // 配列のスタイル
  },
  settings: {
    'import/resolver': {
      typescript:{project: './'},
      node:      {
        extensions:['.js', '.jsx', '.ts', '.tsx'],
        paths:     [ 'src/**/*' ],
      },
    },
  },
  overrides: [{
    files:'src/**',
    rules:{'no-template-curly-in-string': warn},
  }],
}
