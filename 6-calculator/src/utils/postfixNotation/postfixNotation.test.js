import { convertToPostfixNotation } from "./postfixNotation";

describe("후위표현식으로 변환하면", () => {
  it("a+b 는 ab+ 이다.", () => {
    const answer = convertToPostfixNotation("a+b");
    expect(answer).toBe("ab+");
  });
  it("a-b*c 는 abc*- 이다.", () => {
    const answer = convertToPostfixNotation("a-b*c");
    expect(answer).toBe("abc*-");
  });
  it("a*b+c 는 ab*c+ 이다.", () => {
    const answer = convertToPostfixNotation("a*b+c");
    expect(answer).toBe("ab*c+");
  });
  it("a+b*c-d/e 는 abc*de/-+ 이다.", () => {
    const answer = convertToPostfixNotation("a+b*c-d/e");
    expect(answer).toBe("abc*de/-+");
  });
  it("a-b*c*d+e/f 는 abcd**ef/+- 이다.", () => {
    const answer = convertToPostfixNotation("a-b*c*d+e/f");
    expect(answer).toBe("abcd**ef/+-");
  });
});
