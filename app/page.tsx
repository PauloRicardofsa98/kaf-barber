import { SearchIcon } from "lucide-react";
import Image from "next/image";

import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";

import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Badge } from "./_components/ui/badge";
import { Card, CardContent } from "./_components/ui/card";

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

      <Card className="mt-6">
        <CardContent className="flex justify-between">
          <div className="flex flex-col gap-2 py-5">
            <Badge className="w-fit">Confirmado</Badge>
            <h3 className="font-semibold">Corte de cabelo</h3>

            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              </Avatar>
              <p className="text-sm">Barbearia Kaf</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm">Agosto</p>
            <p className="text-2xl">04</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
