import { add, CostumeReducer } from "@/reducers/costume";

describe("CostumeReducer Tests", () => {
  test("initial state", () => {
    expect(CostumeReducer(undefined, { type: "" })).toEqual({
      costume: undefined,
    });
  });
  test("add", () => {
    expect(
      CostumeReducer(
        undefined,
        add({
          costume: { name: "名前", height: 10, width: 10, image: "image.jpeg" },
        })
      )
    ).toEqual({
      costume: { name: "名前", height: 10, width: 10, image: "image.jpeg" },
    });
  });
});
