import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const link1 = screen.getByText("Play");
  expect(link1).toBeInTheDocument();
  expect(link1.tagName).toBe("A");

  const link2 = screen.getByText("History");
  expect(link2).toBeInTheDocument();
  expect(link1.tagName).toBe("A");
});
