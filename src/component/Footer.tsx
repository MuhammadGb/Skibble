import React from "react";
import { Button, Footer } from "flowbite-react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { BiLogo500Px } from "react-icons/bi";

const FooterLayout = () => {
  return (
    <Footer
      container
      className="relative text-white bg-gray-800 rounded-none top-32"
      role="contentinfo"
    >
      <div className="w-full overflow-x-hidden">
        <div className="">
          <div className="flex flex-wrap justify-between">
            <div>
              <div className="flex items-center">
                <BiLogo500Px size={40} aria-hidden="true" />{" "}
                <p className="mt-3 ml-0 text-sm">
                  <span className="font-semibold">ShopEase</span> is your
                  one-stop shop for all your needs. Quality products at
                  unbeatable prices.
                </p>
              </div>
              <div className="mt-6 m">
                <div>
                  <h5
                    className="mb-2 text-lg font-bold"
                    id="newsletter-heading"
                    tabIndex={0}
                  >
                    Newsletter
                  </h5>
                  <p className="mb-4 text-sm">
                    Subscribe to our newsletter for exclusive offers and
                    updates.
                  </p>
                </div>
                <form className="flex">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 border-none rounded-l-md focus:ring-2 focus:ring-blue-500"
                    aria-describedby="newsletter-heading"
                  />
                  <Button
                    type="submit"
                    color="info"
                    className="px-4 py-2 text-white rounded-l-none rounded-r-md"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-6 sm:mt-0">
              <h5
                className="mb-4 text-lg font-bold"
                id="quick-links-heading"
                tabIndex={0}
              >
                Quick Links
              </h5>
              <ul className="space-y-2">
                <Footer.Link href="/about" aria-label="About Us page">
                  About Us
                </Footer.Link>
                <Footer.Link href="/contact" aria-label="Contact page">
                  Contact
                </Footer.Link>
                <Footer.Link href="/faq" aria-label="FAQs page">
                  FAQs
                </Footer.Link>
                <Footer.Link href="/returns" aria-label="Return Policy page">
                  Return Policy
                </Footer.Link>
              </ul>
            </div>

            <div className="mt-6 sm:mt-0">
              <h5
                className="mb-4 text-lg font-bold"
                id="customer-support-heading"
                tabIndex={0}
              >
                Customer Support
              </h5>
              <ul className="space-y-2">
                <Footer.Link href="/support" aria-label="Support Center page">
                  Support Center
                </Footer.Link>
                <Footer.Link href="/tracking" aria-label="Order Tracking page">
                  Order Tracking
                </Footer.Link>
                <Footer.Link href="/shipping" aria-label="Shipping Info page">
                  Shipping Info
                </Footer.Link>
                <Footer.Link href="/privacy" aria-label="Privacy Policy page">
                  Privacy Policy
                </Footer.Link>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 mt-6 md:flex-row md:px-10">
            <div className="flex mr-6 space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Go to Facebook page"
                tabIndex={0}
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Go to Twitter page"
                tabIndex={0}
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Go to Instagram page"
                tabIndex={0}
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <p className="mt-4 ml-6 text-sm md:mt-0" tabIndex={0}>
              &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterLayout;
