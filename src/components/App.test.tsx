import { assertEquals } from "std/testing/asserts";

Deno.test("1 + 1 = 2", () => {
  const x = 1 + 1;
  assertEquals(x, 2);
});
