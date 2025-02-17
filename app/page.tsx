import { SearchIcon } from "lucide-react";
import Image from "next/image";

import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";

export default function Home() {
  return (
    <>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, Paulo!</h2>
        <p>segunda-feira, 17 de fevereiro.</p>
      </div>

      <div className="mt6 flex items-center gap-2">
        <Input placeholder="Faça sua busca..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div className="relative mt-6 h-[150px] w-full">
        <Image
          src="/banner-01.png"
          alt="Agende nos melhores com Kaf Barber"
          fill
          className="rounded-xl object-cover"
        />
      </div>
    </>
  );
}
