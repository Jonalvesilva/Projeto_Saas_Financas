import { TransactionType } from "@prisma/client";

export const TRANSACTION_CATEGORY_LABEL = {
  EDUCATION: "Educação",
  ENTERTAIMENT: "Entreteimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_LABEL = {
  CREDIT_CARD: "Cartão de Credito",
  DEBIT_CARD: "Cartão de Debito",
  BAK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const TRANSACTION_TYPE_LABEL = [
  { value: TransactionType.EXPENSE, label: "Despesa" },
  { value: TransactionType.DEPOSIT, label: "Depósito" },
  { value: TransactionType.INVESTMENT, label: "Investimento" },
];

export const MONTH_OPTIONS = [
  {
    value: 12,
    label: "Dezembro",
  },
  {
    value: 11,
    label: "Novembro",
  },
  {
    value: 10,
    label: "Outubro",
  },
  {
    value: 9,
    label: "Setembro",
  },
  {
    value: 8,
    label: "Agosto",
  },
  {
    value: 7,
    label: "Julho",
  },
  {
    value: 6,
    label: "Junho",
  },
  {
    value: 5,
    label: "Maio",
  },
  {
    value: 4,
    label: "Abril",
  },
  {
    value: 3,
    label: "Março",
  },
  {
    value: 2,
    label: "Fevereiro",
  },
  {
    value: 1,
    label: "Janeiro",
  },
];

interface MonthYears {
  year: number;
  month: number;
  label: string;
}

export const monthYearsObjCreate = (yearLimit: number) => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const arr: Array<MonthYears> = [];

  for (let i = year; i >= yearLimit; i--) {
    MONTH_OPTIONS.map((item) => {
      if (!(i == year && item.value > month))
        arr.push({
          year: i,
          month: item.value,
          label: `${item.label} ${i}`,
        });
    });
  }
  return arr;
};
