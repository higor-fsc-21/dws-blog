import { render, screen, fireEvent } from "@testing-library/react";
import { SearchModal } from "./SearchModal";

jest.mock("lucide-react", () => ({
  ArrowLeftIcon: (props: any) => (
    <svg data-testid="arrow-left-icon" onClick={props.onClick} />
  ),
  X: (props: any) => <svg data-testid="x-icon" onClick={props.onClick} />,
}));

describe("SearchModal", () => {
  it("does not render when isOpen is false", () => {
    render(<SearchModal isOpen={false} />);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    render(<SearchModal isOpen={true} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("modalInput");
  });

  it("handles onChange events", () => {
    const handleChange = jest.fn();
    render(<SearchModal isOpen={true} onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("handles onSubmit on Enter key", () => {
    const handleSubmit = jest.fn();
    const handleClear = jest.fn();
    const handleClose = jest.fn();
    render(
      <SearchModal
        isOpen={true}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onClose={handleClose}
      />
    );
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleClear).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("handles clear button click", () => {
    const handleClear = jest.fn();
    render(<SearchModal isOpen={true} onClear={handleClear} />);
    const clearButton = screen.getByTestId("x-icon");
    fireEvent.click(clearButton);
    expect(handleClear).toHaveBeenCalledTimes(1);
  });

  it("handles submit button click", () => {
    const handleSubmit = jest.fn();
    const handleClear = jest.fn();
    const handleClose = jest.fn();
    render(
      <SearchModal
        isOpen={true}
        onSubmit={handleSubmit}
        onClear={handleClear}
        onClose={handleClose}
      />
    );
    const submitButton = screen.getByTestId("arrow-left-icon");
    fireEvent.click(submitButton);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleClear).toHaveBeenCalledTimes(1);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
