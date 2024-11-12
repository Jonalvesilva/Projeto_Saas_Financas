"use client";

import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
import { TransactionType } from "@prisma/client";
import { TypePercentage } from "../_data/get-dashboard";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFFFFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55B02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesas",
    color: "#E93030",
  },
} satisfies ChartConfig;

export interface TransactionChart {
  balance: number;
  deposits: number;
  investiments: number;
  expenses: number;
  typesPercentage: TypePercentage;
}

interface Data {
  data: TransactionChart;
}

export default function SummaryChart(data: Data) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: data.data.deposits ?? 0,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: data.data.expenses ?? 0,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: data.data.investiments ?? 0,
      fill: "#ffd500",
    },

    {
      type: "Não Definido",
      amount: data.data.balance == 0 ? 1 : 0,
      fill: "gray",
    },
  ];

  console.log(data.data.expenses);

  return (
    <div className="mt-6 grid grid-cols-1 xl:grid-cols-[1fr,2fr] xl:gap-x-6">
      <div>
        {" "}
        <Card className="flex flex-col bg-gray-50/25">
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px] "
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="amount"
                  nameKey="type"
                  innerRadius={80}
                />
              </PieChart>
            </ChartContainer>
          </CardContent>

          <div className="flex flex-col items-center text-white py-2 gap-y-2">
            <div className="grid grid-cols-[2fr,1fr] justify-items-center">
              <div className="flex gap-x-2">
                <TrendingUpIcon size={22} className="text-green-500" />
                <p>Receitas</p>
              </div>
              <p>
                {isNaN(data.data.typesPercentage[TransactionType.DEPOSIT])
                  ? 0
                  : data.data.typesPercentage[TransactionType.DEPOSIT]}
                %
              </p>
            </div>
            <div className="grid grid-cols-[2fr,1fr] justify-items-center">
              <div className="flex gap-x-2">
                <TrendingDownIcon size={22} className="text-red-500" />
                <p>Despesas</p>
              </div>
              <p>
                {isNaN(data.data.typesPercentage[TransactionType.EXPENSE])
                  ? 0
                  : data.data.typesPercentage[TransactionType.EXPENSE]}
                %
              </p>
            </div>
            <div className="grid grid-cols-[2fr,1fr] justify-items-center">
              <div className="flex gap-x-2">
                <PiggyBankIcon size={22} className="text-yellow-500" />
                <p>Investido</p>
              </div>
              <p>
                {" "}
                {isNaN(data.data.typesPercentage[TransactionType.INVESTMENT])
                  ? 0
                  : data.data.typesPercentage[TransactionType.INVESTMENT]}
                %
              </p>
            </div>
          </div>
        </Card>
      </div>
      <div className="h-16 border border-white"></div>
    </div>
  );
}
