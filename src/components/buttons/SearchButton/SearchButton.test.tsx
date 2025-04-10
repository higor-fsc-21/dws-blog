import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchButton } from "../SearchButton";

describe("SearchButton", () => {
  it("renders with default props", () => {
    render(<SearchButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("searchButton");
  });

  it("renders with custom className", () => {
    render(<SearchButton className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<SearchButton onClick={handleClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders search icon", () => {
    render(<SearchButton />);
    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument();
  });
});
