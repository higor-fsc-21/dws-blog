import { render, screen, fireEvent } from "@testing-library/react";
import { SortButton } from "../SortButton";

const newestRegex = /sort by newest first/i;
const oldestRegex = /sort by oldest first/i;

describe("SortButton", () => {
  it("renders with default props", () => {
    render(<SortButton />);
    const button = screen.getByRole("button", { name: newestRegex });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Newest first");
  });

  it("renders with initial order as oldest", () => {
    render(<SortButton initialOrder="oldest" />);
    const button = screen.getByRole("button", { name: oldestRegex });
    expect(button).toHaveTextContent("Oldest first");
  });

  it("toggles order when clicked", async () => {
    render(<SortButton />);
    const button = screen.getByRole("button", { name: newestRegex });

    await fireEvent.click(button);
    expect(button).toHaveTextContent("Oldest first");

    await fireEvent.click(button);
    expect(button).toHaveTextContent("Newest first");
  });

  it("calls onOrderChange when order changes", async () => {
    const handleOrderChange = jest.fn();
    render(<SortButton onOrderChange={handleOrderChange} />);
    const button = screen.getByRole("button", { name: newestRegex });

    await fireEvent.click(button);
    expect(handleOrderChange).toHaveBeenCalledWith("oldest");

    await fireEvent.click(button);
    expect(handleOrderChange).toHaveBeenCalledWith("newest");
  });

  it("renders sort icon", () => {
    render(<SortButton />);
    expect(screen.getByTestId("icon-arrow-up-down")).toBeInTheDocument();
  });
});
