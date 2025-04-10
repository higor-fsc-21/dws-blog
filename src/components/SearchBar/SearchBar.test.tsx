import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("renders with default props", () => {
    render(<SearchBar />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("searchBar");
  });

  it("renders with custom className", () => {
    render(<SearchBar className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("handles onChange events", () => {
    const handleChange = jest.fn();
    render(<SearchBar onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("handles onSubmit on Enter key", () => {
    const handleSubmit = jest.fn();
    render(<SearchBar onSubmit={handleSubmit} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders search button", () => {
    render(<SearchBar />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("button");
  });

  it("handles search button click", () => {
    const handleSubmit = jest.fn();
    render(<SearchBar onSubmit={handleSubmit} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
