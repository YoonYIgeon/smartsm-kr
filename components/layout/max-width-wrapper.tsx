import { ReactNode } from "react";

// --------- COMPONENT ---------
export function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="px-4 md:px-6">
      <div className="mx-auto max-w-3xl w-full">{children}</div>
    </main>
  );
}
