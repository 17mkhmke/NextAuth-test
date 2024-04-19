//src/app/page.tsx
import { getSession } from "next-auth/react";
import { Session } from "next-auth";
import ClientComponent from "./client-component";

export default async function Page() {
  const session: Session | null = await getSession();

  return (
    <div>
      <ClientComponent session={session} />
    </div>
  );
}
