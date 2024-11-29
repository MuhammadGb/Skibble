import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavbarLayout from "@/component/Navbar";
import { useCart } from "@/globals/CartProvider";

// Mock useCart hook
jest.mock("../globals/CartProvider", () => ({
  useCart: jest.fn(),
}));

describe("NavbarLayout", () => {
  const mockSetIsOpen = jest.fn();
  const mockHandleSearch = jest.fn();
  const mockSetQuery = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useCart as jest.Mock).mockReturnValue({
      setIsOpen: mockSetIsOpen,
      cartItems: [],
    });
  });

  it("renders the Navbar with logo, search bar, and cart button", () => {
    render(
      <NavbarLayout
        handleSearch={mockHandleSearch}
        query=""
        setQuery={mockSetQuery}
      />
    );

    expect(screen.getByLabelText("Go to homepage")).toBeInTheDocument();

    const searchInput = screen.getByPlaceholderText(
      "Search for names and categories of products..."
    );
    expect(searchInput).toBeInTheDocument();

    const cartButton = screen.getByLabelText("View cart");
    expect(cartButton).toBeInTheDocument();
  });

  it("calls handleSearch on search input change", () => {
    render(
      <NavbarLayout
        handleSearch={mockHandleSearch}
        query=""
        setQuery={mockSetQuery}
      />
    );

    const searchInput = screen.getByPlaceholderText(
      "Search for names and categories of products..."
    );

    fireEvent.change(searchInput, { target: { value: "test query" } });
    expect(mockHandleSearch).toHaveBeenCalledTimes(1);
    expect(mockHandleSearch).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "test query" } })
    );
  });

  it("displays the correct cart item count", () => {
    (useCart as jest.Mock).mockReturnValue({
      setIsOpen: mockSetIsOpen,
      cartItems: [{ id: 1 }, { id: 2 }, { id: 3 }],
    });

    render(
      <NavbarLayout
        handleSearch={mockHandleSearch}
        query=""
        setQuery={mockSetQuery}
      />
    );

    const cartBadge = screen.getByText("3");
    expect(cartBadge).toBeInTheDocument();
  });

  it("displays '9+' when cart item count exceeds 9", () => {
    (useCart as jest.Mock).mockReturnValue({
      setIsOpen: mockSetIsOpen,
      cartItems: Array(12).fill({ id: 1 }),
    });

    render(
      <NavbarLayout
        handleSearch={mockHandleSearch}
        query=""
        setQuery={mockSetQuery}
      />
    );

    const cartBadge = screen.getByText("9+");
    expect(cartBadge).toBeInTheDocument();
  });

  it("opens the cart when the cart button is clicked", () => {
    render(
      <NavbarLayout
        handleSearch={mockHandleSearch}
        query=""
        setQuery={mockSetQuery}
      />
    );

    const cartButton = screen.getByLabelText("View cart");
    fireEvent.click(cartButton);
    expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
    expect(mockSetIsOpen).toHaveBeenCalledWith(true);
  });
});
