// src/app/layout.tsx
"use client";
import * as React from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@fluentui/react-components";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  const handleLogin = () => {
    signIn("azure-ad-b2c");
  };

  const handleLogout = () => {
    signOut();
  };

  return (
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
  );
};

export default RootLayout;