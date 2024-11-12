import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import SummaryCardItem from "./summary-card-item";
import UpsertTransactionButton from "./add-transaction-button";
import { db } from "../_lib/prisma";

interface Props {
  month: string;
  year: string;
}

export default async function SummaryCard({ month, year }: Props) {
  const where = {
    date: month &&
      year && {
        gte: new Date(`${year}-${month}-01`),
        lt: new Date(`${year}-${month}-31`),
      },
  };
  const deposits = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const investiments = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const expenses = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );
  const balance = deposits - investiments - expenses;

  return (
    <>
      <Card className="bg-gray-50/30">
        <CardHeader className="flex-row justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <WalletIcon
                size={18}
                className="relative top-[-1px] text-white"
              />
              <p className="text-white">Saldo</p>
            </div>
            <UpsertTransactionButton />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold text-white">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(balance)}
          </p>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-y-4 md:gap-x-4 md:gap-y-0">
        <SummaryCardItem
          title="Investido"
          icon={
            <PiggyBankIcon
              size={18}
              className="relative top-[-1px] text-yellow-500"
            />
          }
          amount={investiments}
        />
        <SummaryCardItem
          title="Receitas"
          icon={
            <TrendingUpIcon
              size={18}
              className="relative top-[-1px] text-green-500"
            />
          }
          amount={deposits}
        />
        <SummaryCardItem
          title="Despesas"
          icon={
            <TrendingDownIcon
              size={18}
              className="relative top-[-1px] text-red-500"
            />
          }
          amount={expenses}
        />
      </div>
    </>
  );
}
