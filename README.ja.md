# TAI64N によるユニークID生成ツール「TID」

TAI64N形式のユニークな識別子(TID)を生成し、対応するファイルパスを作成するツールです。

## 機能

- TAI64Nフォーマットのユニークな識別子(TID)の生成
- TIDに対応するファイルパスの生成

## 使い方

```js
import { TID } from "https://code4fukui.github.io/TID/TID.js";

const tid = TID.create();
console.log(tid);
const path = TID.getPath(tid, "txt");
console.log(path);
```

## ライセンス

MIT License