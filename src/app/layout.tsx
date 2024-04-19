// src/app/layout.tsx
"use client";
import { signIn, signOut, SessionProvider } from "next-auth/react"; // Import SessionProvider
import { Button } from "@fluentui/react-components";

interface LayoutProps {
  children: React.ReactNode; // Explicitly specify the type of children prop
}

const Layout = ({ children }: LayoutProps) => {
  const handleLogin = () => {
    signIn("azure-ad-b2c");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
    <SessionProvider>
      {" "}
      {/* Wrap layout with SessionProvider */}
      <html lang="en">
        <body>
          <div>
            <header>
              <nav>
                <Button onClick={handleLogin}>Login</Button>
                <Button onClick={handleLogout}>Logout</Button>
              </nav>
            </header>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
};

export default Layout;
