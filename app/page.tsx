import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Header from "./_components/header";
import { CgFileDocument } from "react-icons/cg";
import SummaryCard from "./_components/summary-card";
import TimeSelect from "./_components/time-select";
import { MONTH_OPTIONS } from "./_constants/constants";
import SummaryChart from "./_components/summary-chart";
import { getDashboard } from "./_data/get-dashboard";
import { TransactionChart } from "./_components/summary-chart";

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
    ? `${MONTH_OPTIONS.filter((item) => item.value == Number(month))[0].label} ${year}`
    : `Geral`;

  const dataChart: TransactionChart = await getDashboard(month, year);

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-black px-4 flex flex-col">
        <div className="w-full flex items-center justify-between py-6 flex-col gap-y-4 md:flex-row md:gap-y-0">
          <h1 className="font-bold text-2xl text-white">
            Dashboard
            <span className="hidden md:inline font-bold text-2xl text-white">{` - ${title}`}</span>
          </h1>
          <h1 className="font-bold text-2xl text-white md:hidden">{title}</h1>
          <div className="text-white flex items-center gap-x-4">
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
            <SummaryChart data={dataChart} />
          </div>
        </div>
      </section>
    </>
  );
}
