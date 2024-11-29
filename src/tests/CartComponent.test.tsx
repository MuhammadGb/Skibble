import { render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import CartComponent from "@/component/Cart";
import { useCart } from "@/globals/CartProvider";

jest.mock("../globals/CartProvider", () => ({
  useCart: jest.fn(),
}));

describe("CartComponent Tests", () => {
  const mockSetIsOpen = jest.fn();
  const mockHandleRemoveFromCart = jest.fn();
  const mockSetCartItems = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("displays an empty cart message when there are no items", () => {
    (useCart as jest.Mock).mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
      cartItems: [],
      setCartItems: mockSetCartItems,
      handleAddToCart: jest.fn(),
      handleRemoveFromCart: mockHandleRemoveFromCart,
    });

    render(<CartComponent />);

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("removes an item when the trash icon is clicked", () => {
    (useCart as jest.Mock).mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
      cartItems: [
        {
          id: 1,
          name: "Product A",
          price: 20,
          description: "Product A",
          category: "gadgets",
          image: "/img-a.jpg",
          quantity: 1,
        },
      ],
      setCartItems: mockSetCartItems,
      handleAddToCart: jest.fn(),
      handleRemoveFromCart: mockHandleRemoveFromCart,
    });

    render(<CartComponent />);

    expect(screen.getByText("Product A")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Remove item"));

    expect(mockHandleRemoveFromCart).toHaveBeenCalledWith(1);
  });

  it("increments and decrements item quantity properly", () => {
    const mockHandleAddToCart = jest.fn();

    (useCart as jest.Mock).mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
      cartItems: [
        {
          id: 1,
          name: "Product B",
          price: 30,
          description: "Product B",
          category: "gadgets",
          image: "/img-b.jpg",
          quantity: 1,
        },
      ],
      setCartItems: mockSetCartItems,
      handleAddToCart: mockHandleAddToCart,
      handleRemoveFromCart: mockHandleRemoveFromCart,
    });

    render(<CartComponent />);

    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Add to item quantity"));
    expect(mockHandleAddToCart).toHaveBeenCalledWith({
      id: 1,
      name: "Product B",
      price: 30,
      description: "Product B",
      category: "gadgets",
      image: "/img-b.jpg",
      quantity: 1,
    });

    fireEvent.click(screen.getByLabelText("Subtract from item quantity"));
    expect(mockHandleRemoveFromCart).toHaveBeenCalledWith(1);
  });

  it("prevents increasing item quantity beyond the limit of 5", () => {
    const mockHandleAddToCart = jest.fn();

    (useCart as jest.Mock).mockReturnValue({
      isOpen: true,
      setIsOpen: mockSetIsOpen,
      cartItems: [
        {
          id: 1,
          name: "Product C",
          price: 50,
          description: "Product C",
          category: "accessories",
          image: "/img-c.jpg",
          quantity: 5,
        },
      ],
      setCartItems: mockSetCartItems,
      handleAddToCart: mockHandleAddToCart,
      handleRemoveFromCart: mockHandleRemoveFromCart,
    });

    render(<CartComponent />);

    expect(screen.getByText("5")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Add to item quantity"));

    expect(mockHandleAddToCart).not.toHaveBeenCalled();
  });
});
