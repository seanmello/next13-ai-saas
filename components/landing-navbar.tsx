"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="https://media.discordapp.net/attachments/1062513593284829366/1156737582936375347/smalltalk2.gif?ex=65160f52&is=6514bdd2&hm=75cc5a077cee85739d182d6a6166e65b0ded3df93038dbd2bea032a89b927d58&=&width=584&height=584" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Small Talk
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get TALKING....
          </Button>
        </Link>
      </div>
    </nav>
  )
}