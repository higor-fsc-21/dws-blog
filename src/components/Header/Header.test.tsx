import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import useResponsive from "../../hooks/useResponsive";

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

const mockUseResponsive = useResponsive as unknown as jest.Mock;

describe("Header", () => {
  const mockNavigate = jest.fn();
  const mockSetSearch = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useApp as jest.Mock).mockReturnValue({ setSearch: mockSetSearch });
  });

  it("renders desktop version with SearchBar when isDesktop is true", () => {
    mockUseResponsive.mockReturnValue({
      isDesktop: true,
      isMobile: false,
    });

    render(<Header />);

    expect(screen.getByAltText("Dentsu World Services")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders mobile version with SearchButton when isMobile is true", () => {
    mockUseResponsive.mockReturnValue({
      isDesktop: false,
      isMobile: true,
    });

    render(<Header />);

    expect(screen.getByAltText("Dentsu World Services")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles search functionality in desktop version", () => {
    mockUseResponsive.mockReturnValue({
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
    mockUseResponsive.mockReturnValue({
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
