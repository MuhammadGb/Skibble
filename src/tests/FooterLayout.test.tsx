import { render, screen, fireEvent } from "@testing-library/react";
import FooterLayout from "@/component/Footer";

describe("FooterLayout Tests", () => {
  it("renders the logo and description", () => {
    render(<FooterLayout />);

    expect(screen.getByText("ShopEase")).toBeInTheDocument();
    expect(
      screen.getByText(
        "ShopEase is your one-stop shop for all your needs. Quality products at unbeatable prices."
      )
    ).toBeInTheDocument();
  });

  it("renders the newsletter section", () => {
    render(<FooterLayout />);

    expect(screen.getByText("Newsletter")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Subscribe to our newsletter for exclusive offers and updates."
      )
    ).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("Your email");
    expect(emailInput).toBeInTheDocument();

    const subscribeButton = screen.getByRole("button", {
      name: "Subscribe to newsletter",
    });
    expect(subscribeButton).toBeInTheDocument();
  });

  it("renders quick links", () => {
    render(<FooterLayout />);

    expect(screen.getByText("Quick Links")).toBeInTheDocument();

    expect(screen.getByLabelText("About Us page")).toBeInTheDocument();
    expect(screen.getByLabelText("Contact page")).toBeInTheDocument();
  });

  it("renders customer support links", () => {
    render(<FooterLayout />);

    expect(screen.getByText("Customer Support")).toBeInTheDocument();

    expect(screen.getByLabelText("Support Center page")).toBeInTheDocument();
    expect(screen.getByLabelText("Privacy Policy page")).toBeInTheDocument();
  });

  it("renders social media icons with accessible labels", () => {
    render(<FooterLayout />);

    expect(screen.getByLabelText("Go to Facebook page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to Twitter page")).toBeInTheDocument();
    expect(screen.getByLabelText("Go to Instagram page")).toBeInTheDocument();
  });

  it("renders copyright information", () => {
    render(<FooterLayout />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} ShopEase. All rights reserved.`)
    ).toBeInTheDocument();
  });

  it("handles newsletter subscription input", () => {
    render(<FooterLayout />);

    const emailInput = screen.getByPlaceholderText("Your email");
    const subscribeButton = screen.getByRole("button", {
      name: "Subscribe to newsletter",
    });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");

    fireEvent.click(subscribeButton);
  });
});
