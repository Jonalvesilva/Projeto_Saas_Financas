import { db } from "@/app/_lib/prisma";
import { TransactionType } from "@prisma/client";

export type TypePercentage = {
  [key in TransactionType]: number;
};

export const getDashboard = async (month: string, year: string) => {
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

  const transactionsTotal = Number(
    (
      await db.transaction.aggregate({
        where,
        _sum: { amount: true },
      })
    )._sum.amount,
  );

  const typesPercentage: TypePercentage = {
    [TransactionType.DEPOSIT]: Math.round(
      (Number(deposits || 0) / transactionsTotal) * 100,
    ),
    [TransactionType.INVESTMENT]: Math.round(
      (Number(investiments || 0) / transactionsTotal) * 100,
    ),
    [TransactionType.EXPENSE]: Math.round(
      (Number(expenses || 0) / transactionsTotal) * 100,
    ),
  };

  return {
    balance,
    deposits,
    expenses,
    investiments,
    typesPercentage,
  };
};
