import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "../_components/header";
import PlansPricing from "../_components/plans-pricing";

export default async function Subscription() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Header />
      <section className="w-full h-screen bg-black px-4 flex flex-col min-h-[950px]">
        <div className="flex flex-col h-full">
          <div className="w-full flex items-center justify-between py-6 flex-col gap-y-4 lg:flex-row lg:gap-y-0">
            <h1 className="font-bold text-2xl text-white">Assinatura</h1>
          </div>
          <div className="flex flex-grow justify-center lg:items-center">
            <PlansPricing />
          </div>
        </div>
      </section>
    </>
  );
}
