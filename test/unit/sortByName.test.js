const sorting = require("../../app");

describe("Test suit for books names sorting", () => {
  it("Books names should be sorted in ascending order", () =>{
    const input = [
      "Война и мир",
      "Алые паруса",
      "Преступление и наказание",
      "Властелин Колец",
      "Гарри Поттер"
    ];

    const expected = [
      "Алые паруса",
      "Властелин Колец",
      "Война и мир",
      "Гарри Поттер",
      "Преступление и наказание"
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

 it("Books names sould not be sorted", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер"
    ];

    const expected = [
      "Гарри Поттер",
      "Гарри Поттер"
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});