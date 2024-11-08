"use client";
import { UserButton } from "@clerk/nextjs";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../_components/ui/sheet_modify";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="h-[70px] bg-gradient-to-tl from-cyan-900 to-slate-900">
      <nav className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-x-3 sm:gap-x-10">
          <div className="flex items-center">
            <Image src="/logo.png" width={70} height={30} alt="logo" />
            <h2 className="hidden sm:flex text-2xl text-white font-semibold">
              Open Finance JS
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-x-4">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-cyan-200 text-lg font-semibold"
                  : "text-white text-lg"
              }
            >
              Dashboard
            </Link>
            <Link
              href="/transactions"
              className={
                pathname === "/transactions"
                  ? "text-cyan-200 text-lg font-semibold"
                  : "text-white text-lg"
              }
            >
              Transações
            </Link>
            <Link
              href="/subscription"
              className={
                pathname === "/subscription"
                  ? "text-cyan-200 text-lg font-semibold"
                  : "text-white text-lg"
              }
            >
              Assinatura
            </Link>
          </div>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon
                  size={20}
                  className="flex text-white lg:hidden cursor-pointer"
                />
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-tl from-cyan-900 to-slate-900 border-gray-900 overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="flex items-center justify-center gap-x-3">
                    {" "}
                    <Image src="/logo.png" width={60} height={30} alt="logo" />
                    <h2 className="text-lg text-white font-semibold overflow-hidden truncate">
                      Open Finance JS
                    </h2>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center justify-center mt-16 gap-y-6">
                  <Link
                    href="/"
                    className={
                      pathname === "/"
                        ? "text-cyan-200 text-xl font-semibold"
                        : "text-white text-xl"
                    }
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/transactions"
                    className={
                      pathname === "/transactions"
                        ? "text-cyan-200 text-xl font-semibold"
                        : "text-white text-xl"
                    }
                  >
                    Transações
                  </Link>
                  <Link
                    href="/subscription"
                    className={
                      pathname === "/subscription"
                        ? "text-cyan-200 text-xl font-semibold"
                        : "text-white text-xl"
                    }
                  >
                    Assinatura
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="hidden min-[370px]:flex">
          <UserButton
            showName
            appearance={{
              elements: {
                userButtonOuterIdentifier: {
                  color: "white",
                  fontSize: "16px",
                },
              },
            }}
          />
        </div>
        <div className="flex min-[370px]:hidden">
          <UserButton />
        </div>
      </nav>
    </div>
  );
}
