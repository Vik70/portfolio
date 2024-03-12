import Image from "next/image";
import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    <main>
        <div className="flex flex-col gap-20">
            <div className='flex flex-col h-[850px] gap-20'>
                <Hero />
            </div>
        </div>
    </main>
  );
}
