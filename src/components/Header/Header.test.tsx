import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";

// Mock dependencies
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../contexts/AppContext", () => ({
  useApp: jest.fn(),
}));

jest.mock("../../hooks/useResponsive", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Header", () => {
  const mockNavigate = jest.fn();
  const mockSetSearch = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useApp as jest.Mock).mockReturnValue({ setSearch: mockSetSearch });
  });

  it("renders desktop version with SearchBar when isDesktop is true", () => {
    require("../../hooks/useResponsive").default.mockReturnValue({
      isDesktop: true,
      isMobile: false,
    });

    render(<Header />);

    expect(screen.getByAltText("Dentsu World Services")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders mobile version with SearchButton when isMobile is true", () => {
    require("../../hooks/useResponsive").default.mockReturnValue({
      isDesktop: false,
      isMobile: true,
    });

    render(<Header />);

    expect(screen.getByAltText("Dentsu World Services")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles search functionality in desktop version", () => {
    require("../../hooks/useResponsive").default.mockReturnValue({
      isDesktop: true,
      isMobile: false,
    });

    render(<Header />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test search" } });
    fireEvent.keyDown(searchInput, { key: "Enter" });

    expect(mockSetSearch).toHaveBeenCalledWith("test search");
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("opens search modal when clicking search button in mobile version", () => {
    require("../../hooks/useResponsive").default.mockReturnValue({
      isDesktop: false,
      isMobile: true,
    });

    render(<Header />);

    const searchButton = screen.getByRole("button");
    fireEvent.click(searchButton);

    // Search modal should now be open
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
