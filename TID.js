import { TAI64N } from "https://code4fukui.github.io/TAI64N-es/TAI64N.js";
import { DateTime, TimeZone } from "https://js.sabae.cc/DateTime.js";

const TIMEZONE = TimeZone.JST;

export class TID {
  static create() {
    return TAI64N.stringify(TAI64N.now());
  }
  static getPath(tid, ext = "cbor") {
    const tai64n = TAI64N.parse(tid);
    const date = TAI64N.toDate(tai64n);
    const dt = new DateTime(date);
    const ymd = dt.toLocal(TIMEZONE).day.toStringYMD();
    return ymd + "/" + tid + "." + ext;
  }
}
