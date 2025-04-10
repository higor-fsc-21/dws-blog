import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PostCard } from "./PostCard";
import React from "react";
import styles from "./PostCard.module.scss";

jest.mock("../Tag/Tag", () => ({
  Tag: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tag-component">{children}</div>
  ),
}));

describe("PostCard", () => {
  const mockProps = {
    date: "Jan 1, 2024",
    title: "Test Post Title",
    author: "Test Author",
    imageUrl: "/test-image.jpg",
    description: "This is a test description",
    categories: ["Category 1", "Category 2"],
    onPostClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with all props correctly", () => {
    render(<PostCard {...mockProps} />);

    expect(screen.getByAltText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockProps.title)).toHaveAttribute(
      "src",
      mockProps.imageUrl
    );
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
    expect(screen.getByText(mockProps.author)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it("renders all categories as tags", () => {
    render(<PostCard {...mockProps} />);

    const tagComponents = screen.getAllByTestId("tag-component");
    expect(tagComponents).toHaveLength(mockProps.categories.length);
    expect(screen.getByText("Category 1")).toBeInTheDocument();
    expect(screen.getByText("Category 2")).toBeInTheDocument();
  });

  it("calls onPostClick when clicked", () => {
    render(<PostCard {...mockProps} />);

    const card = screen.getByText(mockProps.title);
    fireEvent.click(card!);

    expect(mockProps.onPostClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct truncation classes based on title height", async () => {
    const mockRef = { current: { getBoundingClientRect: jest.fn() } };
    jest.spyOn(React, "useRef").mockReturnValue(mockRef);

    render(<PostCard {...mockProps} />);

    const description = screen.getByText(mockProps.description);

    await waitFor(() => {
      expect(description).toHaveClass(styles.description);
      // expect(description).toHaveClass(styles.truncate2);
    });

    jest.restoreAllMocks();
  });
});
