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
        <hr className=" border-[1px] border-stone-200 w-[15%]"/>
        <Link href={'/jobs'}>
          <button className=" text-white rounded-md font-semibold border-0 bg-orange-700 p-3 text-xl shadow-md hover:bg-orange-800 transition-colors">
            Let's find you a new job together!
          </button>
        </Link>
      </div>
    </div>
  );
}
