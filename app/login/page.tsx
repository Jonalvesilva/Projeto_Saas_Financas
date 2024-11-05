import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

export default function Login() {
  return (
    <>
      <section className="w-full h-screen min-h-[550px] bg-gradient-to-br from-slate-900 to-black ">
        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          <div className="relative w-[85%] h-full mx-auto flex flex-col justify-center ">
            <div className="flex items-center mb-8 relative right-4">
              <Image src="/logo.png" width={90} height={30} alt="logo" />
              <h2 className="text-2xl text-white font-semibold">
                Open Finance JS
              </h2>
            </div>
            <h2 className="text-4xl text-white mb-6">Bem-vindo</h2>
            <p className="text-lg md:text-xl text-white text-justify">
              A Open Finance JS é a solução definitiva para quem deseja
              controlar e otimizar suas finanças de maneira simples e eficiente.
              Seja para gerenciar seu orçamento pessoal, controlar as finanças
              de um pequeno negócio ou fazer o acompanhamento financeiro de uma
              empresa, nossa plataforma oferece todas as ferramentas necessárias
              para tornar a gestão financeira mais acessível e inteligente.
            </p>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:bg-white hover:text-black duration-300 mt-10 w-full lg:w-fit"
            >
              <LogInIcon /> Fazer login ou criar uma conta
            </Button>
          </div>
          <div className="hidden md:flex relative w-full h-full">
            <Image src="/login.jpg" fill alt="login" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
