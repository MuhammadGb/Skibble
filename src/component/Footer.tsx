import React from "react";
import { Button, Footer } from "flowbite-react";

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
                <p className="mt-7 ml-0 text-md">
                  <span className="font-semibold">Kitchen</span>
                </p>
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
            </div>

            <div className="mt-6 sm:mt-0">
              <h5
                className="mb-4 text-lg font-bold"
                id="customer-support-heading"
                tabIndex={0}
              >
                Customer Support
              </h5>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center py-4 mt-6 md:flex-row md:px-10">
            <p className="mt-4 ml-6 text-sm md:mt-0" tabIndex={0}>
              &copy; {new Date().getFullYear()} Kitchen. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterLayout;
