import { ReactNode } from "react";
import Header from "./Header";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="px-20 py-10 bg-gray-100 min-h-[100vh]">{children}</div>
    </>
  );
}

export default Layout;
