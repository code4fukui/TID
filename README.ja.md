# TID

TAI64NベースのユニークIDジェネレーター。

## 使い方

```js
import { TID } from "https://code4fukui.github.io/TID/TID.js";

const tid = TID.create();
console.log(tid);
const path = TID.getPath(tid, "txt");
console.log(path);
```

## 参考

- [TAI64N](https://github.com/code4fukui/TAI64N-es)

## ライセンス

MIT License
