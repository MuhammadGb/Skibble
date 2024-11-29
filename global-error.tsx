"use client";

import { useEffect } from "react";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="h-[100vh] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <h2>Something went wrong....</h2>
            <button onClick={() => reset()}>Try again</button>
          </div>
        </div>
      </body>
    </html>
  );
}
