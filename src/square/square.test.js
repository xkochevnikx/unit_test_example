const square = require("./square");

describe("square", () => {
  //! когда группируем тесты в дескрайб есть возможность перед запуском каждого теста проводить какие ли операции с помощью функции :
  beforeEach(() => {
    //! в нее передаём коллбэк в котором что то делаем
  });
  //! бефоролл запускается единожды перед запуском всех тестов
  beforeAll(() => {});
  test("мокаем метод Math.pow на 1 вызов", () => {
    // expect(square(2)).toBe(4);
    // //! определяет что возвращаемое значение меньше указанного
    // expect(square(3)).toBeLessThan(5);
    // //! определяет что возвращаемое значение больше указанного
    // expect(square(2)).toBeGreaterThan(3);
    // //! определяет что возвращаемое значение не undefined
    // expect(square(2)).not.toBeUndefined();

    //! этот метод отслеживает вызовы вложенных функций. сохраняем в переменную вызов метода и параметрами он принимает модуль и метод вызов которого в функции хотим ЗАМОКАТЬ. потом вызываем родительскую функцию. потом экспект и функцию счетчик с параметром ожидающего колличества вызовов. ЭТО НАЗЫВАЕТСЯ ЗАМОКАТЬ МЕТОД
    const spyMathPow = jest.spyOn(Math, "pow");
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  //! проверку не прошли потому что перед этим был вызов и эти моки накапливаются. что бы этого не было после каждого вызова надо их очищать ща ниже в афтеричь это сделаем и всё заработает правильно.
  test("мокаем метод Math.pow на отсутсвие вызова", () => {
    const spyMathPow = jest.spyOn(Math, "pow");
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });
});

//! афтер функции аналогичные но запускаются уже после тестов
afterEach(() => {
  //! очищаем стек счетчика отработки вызовов методов после тестирования
  jest.clearAllMocks();
});
afterAll(() => {});