'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() { 
  const router = useRouter();
  function handleClick(){
    router.push('products')
  }
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>Welcome to Nextjs course 2024</h1>
      <Link href={"/products"}>Navigate to products page</Link>
      <Link href={"/account"}>Navigate to account page</Link>
      <h2 className="mt-5 font-bold">Alternative way for navigation UseRouter</h2>
      <button onClick={handleClick}>Navigate to Products page</button>
    </main>
  );
}
