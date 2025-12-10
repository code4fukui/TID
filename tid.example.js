import { TAI64N } from "https://code4fukui.github.io/TAI64N-es/TAI64N.js";

for (let i = 0; i < 100; i++) {
  const id1 = TAI64N.stringify(TAI64N.encode(new Date())); // by msec
  const id2 = TAI64N.stringify(TAI64N.now()); // unique
  console.log(id1, id2);
}