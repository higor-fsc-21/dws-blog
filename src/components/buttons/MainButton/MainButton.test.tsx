import { render, screen, fireEvent } from "@testing-library/react";
import { MainButton } from "../MainButton";

describe("MainButton", () => {
  it("renders with default props", () => {
    render(<MainButton>Click me</MainButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("primary");
    expect(button).not.toHaveClass("fullWidth");
  });

  it("renders with different props", () => {
    render(
      <MainButton
        fullWidth
        icon="activity"
        variant="secondary"
        className="custom-class"
      >
        Click me
      </MainButton>
    );
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("secondary");
    expect(button).toHaveClass("fullWidth");
    expect(button).toHaveClass("custom-class");
    expect(screen.getByTestId("icon-activity")).toBeInTheDocument();
  });

  it("handles click events", async () => {
    const handleClick = jest.fn();
    render(<MainButton onClick={handleClick}>Click me</MainButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    await fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<MainButton disabled>Click me</MainButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeDisabled();
  });
});
