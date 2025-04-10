import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { BrowserRouter } from "react-router-dom";

jest.mock("../Header/Header", () => {
  return function MockHeader() {
    return <div data-testid="header-component">Header Component</div>;
  };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Outlet: () => <div data-testid="outlet-component">Outlet Content</div>,
}));

describe("Layout", () => {
  it("renders the header component", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    expect(screen.getByTestId("header-component")).toBeInTheDocument();
  });

  it("renders the outlet component in the main section", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass("main");
    expect(screen.getByTestId("outlet-component")).toBeInTheDocument();
  });

  it("has the correct layout structure", () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const layoutDiv = screen.getByTestId("header-component").parentElement;
    expect(layoutDiv).toHaveClass("layout");
  });
});
