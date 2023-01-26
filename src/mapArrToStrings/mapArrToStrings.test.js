const mapArrToStrings = require("./mapArrToStrings");

describe("преобразование массива чисел в массив строк", () => {
  test("корректное значение", () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });

  test("мешанина", () => {
    expect(mapArrToStrings([1, 2, 3, null, undefined])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });

  test("пустой массив", () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
});
