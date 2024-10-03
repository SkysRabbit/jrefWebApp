import Image from "next/image";
import { getSessionUser } from "./lib/sessions";

export default async function Home() {
  const user = await getSessionUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl">jref.io is comming soon!</h1>
      {user && <div>{`User ID:${user}`}</div>}
    </main>
  );
}
