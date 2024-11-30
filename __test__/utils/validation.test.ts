import { formatTimeToPad, isValid } from "@/utils/validation";

describe("color 関数群のテスト", () => {
  test("formatTimeToPad", () => {
    expect(formatTimeToPad(1)).toBe("01");
  });

  test("isValid", () => {
    expect(isValid("123456789", /^.{8,}$/)).toBe(true);
  });
});
