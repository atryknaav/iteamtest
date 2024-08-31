import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className=" bg-stone-900 text-stone-200 w-full h-full flex items-center justify-center text-5xl font-light flex-col gap-8">
        <div>
          Welcome! 
        </div>
        <Link href={'/jobs'}>
          <button className=" text-stone-400 border-stone-400 border-x-0 border-t-0 border-b-2 p-3 text-xl">
            Let's find you a new job together!
          </button>
        </Link>
      </div>
    </div>
  );
}
