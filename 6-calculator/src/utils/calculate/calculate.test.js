import calculate from "./calculate";

describe("중위표현식을 계산하면", () => {
  it("1 + 2 는 3 이다.", () => {
    const answer = calculate(["1", "+", "2"]);
    expect(answer).toBe(3);
  });
  it("1 - 2 * 3 는 -5 다.", () => {
    const answer = calculate(["1", "-", "2", "*", "3"]);
    expect(answer).toBe(-5);
  });
  it("2 * 3 + 4 는 10 다.", () => {
    const answer = calculate(["2", "*", "3", "+", "4"]);
    expect(answer).toBe(10);
  });
  it("33 + 67 는 100 이다.", () => {
    const answer = calculate(["33", "+", "67"]);
    expect(answer).toBe(100);
  });
});
