export function shortenString(input: string, maxLength: number) {
  if (typeof input !== "string") {
    return input;
  }
  maxLength = maxLength ?? 18;

  if (input?.length > maxLength) {
    return input?.slice(0, maxLength) + "...";
  } else {
    return input;
  }
}

export const dropDownTheme = {
  base: "block w-full cursor-pointer rounded-full border-0 text-sm",
  field: {
    base: "relative w-full rounded-full",
    select: {
      base: "block w-full h-9 font-semibold lg:h-10 text-[11px] md:text-[14px] !text-[#6C7A85] !rounded-full ",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4",
      },
      colors: {
        gray: " bg-[#f1f4f4] border-0 border-solid border-gray-300 text-gray-900 focus:border-0 focus:ring-0",
      },
    },
  },
};
export const dropDownThemeNew = {
  base: "block w-full cursor-pointer rounded-full border-0 text-sm",
  field: {
    base: "relative w-full rounded-full",
    select: {
      base: "block w-full h-9 font-semibold lg:h-10 text-[11px] md:text-[14px] !text-black !rounded-full ",
      sizes: {
        sm: "p-2 sm:text-xs",
        md: "p-2.5 text-sm",
        lg: "sm:text-md p-4",
      },
      colors: {
        gray: " bg-transparent border border-solid border-gray-300 text-gray-900 focus:border-0 focus:ring-0",
      },
    },
  },
};
export const tabTheme = {
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:ring-0 ",
      variant: {
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "active rounded-t-lg border-b-2 border-[#00BF6D] text-black font-semibold",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-black ",
          },
        },
      },
    },
  },
};

export const tabThemeNew = {
  base: "flex flex-col ",
  tablist: {
    base: "flex text-center !border-0 ",
    tabitem: {
      base: "  flex items-center justify-center rounded-t-lg px-4 py-2 text-xs font-medium focus:outline-none focus:ring-0 ",
      variant: {
        underline: {
          base: "",
          active: {
            on: "active rounded-full !border-0  text-white bg-[#00BF6D]",
            off: "!border-0  text-gray-500 hover:text-black ",
          },
        },
      },
    },
  },
};
