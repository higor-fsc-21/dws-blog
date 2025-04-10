import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CategoryButton } from "./CategoryButton";

describe("CategoryButton", () => {
  it("renders with default props", () => {
    render(<CategoryButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Category");
  });

  it("renders with selected categories", () => {
    const categories = ["React", "TypeScript"];
    render(<CategoryButton selectedCategories={categories} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("React, TypeScript");
    expect(button).toHaveClass("selected");
  });

  it("renders with open state", () => {
    render(<CategoryButton isOpen />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("open");
    expect(button.querySelector("svg")).toHaveClass("iconOpen");
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<CategoryButton onClick={handleClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<CategoryButton disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders chevron icon", () => {
    render(<CategoryButton />);
    const button = screen.getByTestId("icon-chevron-down");
    expect(button).toBeInTheDocument();
  });
});
