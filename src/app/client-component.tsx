//src/app/client-component.tsx
"use client";

import { Text } from "@fluentui/react-components";
import { Session } from "next-auth";

interface ClientComponentProps {
  session: Session | null;
}

const ClientComponent: React.FC<ClientComponentProps> = ({ session }) => {
  return (
    <div>
      {session && session!.user ? (
        <>
          <Text font="monospace">Welcome, {session.user.email}!</Text>
          <Text>
            You have successfully logged in using NextAuth with Azure AD B2C.
          </Text>
        </>
      ) : (
        <Text>You need to be logged in to view this page.</Text>
      )}
    </div>
  );
};

export default ClientComponent;
