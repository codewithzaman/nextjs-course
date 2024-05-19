import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Welcome to Nextjs course 2024</h1>
      <Link href={"/products"}>Navigate to products page</Link>
      <Link href={"/account"}>Navigate to account page</Link>
    </main>
  );
}
