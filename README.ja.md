# TID by TAI64N

## 概要
TAI64N形式のユニークな識別子(TID)を生成し、対応するファイルパスを作成するツールです。

## デモ
特になし。

## 機能
- TAI64Nフォーマットのユニークな識別子(TID)の生成
- TIDに対応するファイルパスの生成

## 必要環境
特になし。

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