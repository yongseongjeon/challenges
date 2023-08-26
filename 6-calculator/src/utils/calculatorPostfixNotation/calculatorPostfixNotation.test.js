import { calculatePostfixNotation } from "./calculatorPostfixNotation";

describe("후위표현식을 계산하면", () => {
  it("12+ 는 3 다.", () => {
    const answer = calculatePostfixNotation("12+");
    expect(answer).toBe(3);
  });
  it("123*- 는 -5 다.", () => {
    const answer = calculatePostfixNotation("123*-");
    expect(answer).toBe(-5);
  });
  it("23*4+ 는 10 다.", () => {
    const answer = calculatePostfixNotation("23*4+");
    expect(answer).toBe(10);
  });
  it("123*45/-+ 는 6.2 다.", () => {
    const answer = calculatePostfixNotation("123*45/-+");
    expect(answer).toBe(6.2);
  });
  it("123*4*-55/+ 는 -22 이다.", () => {
    const answer = calculatePostfixNotation("123*4*-55/+");
    expect(answer).toBe(-22);
  });
});
