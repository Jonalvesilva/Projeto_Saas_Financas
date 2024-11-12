import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "./_components/header";
import { CgFileDocument } from "react-icons/cg";
import SummaryCard from "./_components/summary-card";
import TimeSelect from "./_components/time-select";
import { MONTH_OPTIONS } from "./_constants/constants";

interface HomeProps {
  searchParams: {
    month: string;
    year: string;
  };
}
export default async function Home({
  searchParams: { month, year },
}: HomeProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const title = month
    ? `Dashboard - ${MONTH_OPTIONS.filter((item) => item.value == Number(month))[0].label} ${year}`
    : `Dashboard - Geral`;

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-black px-4 flex flex-col">
        <div className="w-full flex items-center justify-between py-6">
          <h1 className="font-bold text-2xl text-white">{title}</h1>
          <div className="text-white flex flex-col items-center gap-x-4 min-[450px]:flex-row">
            <div className="flex items-center gap-x-2">
              <span>Relatório IA</span>
              <CgFileDocument />
            </div>
            <TimeSelect />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-2">
            <SummaryCard month={month} year={year} />
          </div>
        </div>
      </section>
    </>
  );
}
