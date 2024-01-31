import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      hello
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
