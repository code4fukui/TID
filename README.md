# TID

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A unique identifier generator based on TAI64N.

## Usage

```js
import { TID } from "https://code4fukui.github.io/TID/TID.js";

const tid = TID.create();
console.log(tid);
const path = TID.getPath(tid, "txt");
console.log(path);
```

## Reference

- [TAI64N](https://github.com/code4fukui/TAI64N-es)

## License

MIT License