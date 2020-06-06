import HelloWorld from "../components/hello-world";
import Link from "next/link";

export default function Home() {
  return (
    <div className="app">
      <HelloWorld />
      <Link href="/about">About</Link>
    </div>
  );
}
