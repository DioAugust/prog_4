const getShowMoreButton = require("../services/getShowMoreButton");

jest.mock("../services/getCatFacts", () => jest.fn());

const getCatFacts = require("../services/getCatFacts");

describe("getShowMoreButton", () => {
  it('should return fact with "...Show more" appended if length > 100', async () => {
    getCatFacts.mockResolvedValue({ fact: "a".repeat(101) });
    const result = await getShowMoreButton();
    expect(result).toBe("a".repeat(100) + "...Show more");
  });

  it("should return the fact as is if length <= 100", async () => {
    getCatFacts.mockResolvedValue({ fact: "a".repeat(100) });
    const result = await getShowMoreButton();
    expect(result).toBe("a".repeat(100));
  });
});
