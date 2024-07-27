const isDateTomorrowYesterdayFutureOrPast = require("../services/isDateTomorrowYesterdayFutureOrPast");

describe("isDateTomorrowYesterdayFutureOrPast", () => {
  it("should return Yesterday for new Date(2022, 3, 11)", () => {
    const date = new Date(2022, 3, 11);
    expect(isDateTomorrowYesterdayFutureOrPast(date)).toBe("Yesterday");
  });

  it("should return Tomorrow for new Date(2022, 3, 13)", () => {
    const date = new Date(2022, 3, 13);
    expect(isDateTomorrowYesterdayFutureOrPast(date)).toBe("Tomorrow");
  });

  it("should return Future for new Date(2024, 3, 17)", () => {
    const date = new Date(2024, 3, 17);
    expect(isDateTomorrowYesterdayFutureOrPast(date)).toBe("Future");
  });

  it("should return Past for new Date(2020, 3, 10)", () => {
    const date = new Date(2020, 3, 10);
    expect(isDateTomorrowYesterdayFutureOrPast(date)).toBe("Past");
  });
});
