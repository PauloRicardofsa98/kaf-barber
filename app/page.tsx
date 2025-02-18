import { SearchIcon } from "lucide-react";
import Image from "next/image";

import Header from "@/app/_components/header";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";

import BarbershopItem from "./_components/barbershop-item";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { Badge } from "./_components/ui/badge";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";

const HomePage = async () => {
  const barbershops = await db.barbershop.findMany();
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold"> Olá, Paulo!</h2>
        <p>segunda-feira, 17 de fevereiro.</p>

        <div className="mt6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" alt="Barba" width={16} height={16} />
            Barba
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" alt="Acabamento" width={16} height={16} />
            Acabamento
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/sobrancelha.svg"
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image src="/massagem.svg" alt="Massagem" width={16} height={16} />
            Massagem
          </Button>
          <Button className="gap-2" variant="secondary">
            <Image
              src="/hidratacao.svg"
              alt="Hidratação"
              width={16}
              height={16}
            />
            Hidratação
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-5 py-5">
            <p className="text-sm text-gray-400">
              © 2025 Copyright <span className="font-bold"> Kaf Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
};

export default HomePage;
