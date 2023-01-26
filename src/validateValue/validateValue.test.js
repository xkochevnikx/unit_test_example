//! с помощью рекваер импортируем тестируемую функцию
const validateValue = require("./validateValue");

//! для тестирования вызываем функцию тест и первым аргументом передаём название а вторым коллбэк с функцией экспект в которую передаём тестируемую функцию и после через точку вызываем метод(их много) с помощью которого проверяем результат

test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true);
});

//! describe обрабатывает сразу несколько сценариев

describe("Валидация НЕСКОЛЬКИХ значений", () => {
  test("корректное значение", () => {
    expect(validateValue(1)).toBe(true);
  });
  test("корректное значение", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("меньше корректного", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("больше корректного", () => {
    expect(validateValue(101)).toBe(false);
  });
  test("пограниченое значение снизу", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("пограниченое значение сверху", () => {
    expect(validateValue(100)).toBe(true);
  });
});
