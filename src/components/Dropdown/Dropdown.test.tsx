import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

jest.mock("../buttons", () => ({
  CategoryButton: ({
    onClick,
    selectedCategories,
    isOpen,
    disabled,
  }: {
    onClick: () => void;
    selectedCategories: string[];
    isOpen: boolean;
    disabled?: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      data-is-open={isOpen}
      data-testid="category-button"
      data-selected-categories={selectedCategories.join(",")}
    >
      CategoryButton
    </button>
  ),
}));

describe("Dropdown", () => {
  const mockOptions = [
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" },
    { id: "3", label: "Option 3" },
  ];

  const mockSelectedOptions = [mockOptions[0]];
  const mockOnChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with closed state by default", () => {
    render(
      <Dropdown
        options={mockOptions}
        selectedOptions={mockSelectedOptions}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByTestId("category-button")).toBeInTheDocument();
    expect(screen.getByTestId("category-button")).toHaveAttribute(
      "data-is-open",
      "false"
    );
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();
  });

  it("opens dropdown when clicking the button", () => {
    render(
      <Dropdown
        options={mockOptions}
        selectedOptions={mockSelectedOptions}
        onChange={mockOnChange}
      />
    );

    const button = screen.getByTestId("category-button");
    fireEvent.click(button);

    expect(button).toHaveAttribute("data-is-open", "true");
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  it("selects and deselects options", () => {
    render(
      <Dropdown
        options={mockOptions}
        selectedOptions={mockSelectedOptions}
        onChange={mockOnChange}
      />
    );

    fireEvent.click(screen.getByTestId("category-button"));

    fireEvent.click(screen.getByText("Option 2"));
    expect(mockOnChange).toHaveBeenCalledWith([mockOptions[0], mockOptions[1]]);

    fireEvent.click(screen.getByText("Option 1"));
    expect(mockOnChange).toHaveBeenCalledWith([]);
  });

  it("passes selected categories to CategoryButton", () => {
    render(
      <Dropdown
        options={mockOptions}
        selectedOptions={mockSelectedOptions}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByTestId("category-button")).toHaveAttribute(
      "data-selected-categories",
      "Option 1"
    );
  });

  it("disables button when isLoading is true", () => {
    render(
      <Dropdown
        options={mockOptions}
        selectedOptions={mockSelectedOptions}
        onChange={mockOnChange}
        isLoading={true}
      />
    );

    expect(screen.getByTestId("category-button")).toHaveAttribute(
      "disabled",
      ""
    );
  });
});
