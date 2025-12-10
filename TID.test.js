import * as t from "https://deno.land/std/testing/asserts.ts";
import { TID } from "./TID.js";

Deno.test("simple", () => {
  const tid = TID.create();
  console.log(tid);
  t.assertEquals(tid.length, "@400000006939f5ff03dfd240".length);

  const tid2 = "@400000006939f5ff03dfd240";
  const path = TID.getPath(tid2, "json");
  console.log(path);
  t.assertEquals(path, "20251211/@400000006939f5ff03dfd240.json");
});
