import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center text-5xl font-light flex-col gap-8">
      <div>
        Welcome! 
      </div>
      <Link href={'/jobs'}>
        <button className=" border-x-0 border-t-0 border-b-2 p-3 text-xl">
          Let's find you a new job together!
        </button>
      </Link>
    </div>
  );
}
