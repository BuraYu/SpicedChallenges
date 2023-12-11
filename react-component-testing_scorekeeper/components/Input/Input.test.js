import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const onChangeTest = jest.fn();

  render(
    <Input
      labelText="Test Label"
      placeholder="Test placeholder"
      name="RolfName"
      value="PeterValue"
      onChange={onChangeTest}
      required
    />
  );

  const label = screen.getByText("Test Label");
  expect(label.tagName).toBe("LABEL");
  expect(label).toHaveAttribute("for", "RolfName");

  const input = screen.getByPlaceholderText("Test placeholder");
  expect(input.tagName).toBe("INPUT");
  expect(input).toHaveAttribute("id", "RolfName");
  expect(input).toHaveAttribute("name", "RolfName");
  expect(input).toHaveAttribute("placeholder", "Test placeholder");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", "PeterValue");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const onChange = jest.fn();

  render(
    <Input
      labelText="Test Label"
      placeholder="Test placeholder"
      name="RolfName"
      value="PeterValue"
      onChange={onChange}
      required
    />
  );

  const input = screen.getByPlaceholderText("Test placeholder");

  userEvent.type(input, "A");
  userEvent.type(input, "A");

  expect(onChange).toHaveBeenCalledTimes(1);
});
