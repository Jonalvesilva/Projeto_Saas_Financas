import { TransactionType } from "@prisma/client";
import { CiCreditCard1, CiCreditCard2, CiBank } from "react-icons/ci";
import { HiOutlineCash } from "react-icons/hi";
import { BsCash } from "react-icons/bs";
import { MdPix } from "react-icons/md";
import { RiFunctionLine } from "react-icons/ri";

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

type PaymentMethod =
  | "CREDIT_CARD"
  | "DEBIT_CARD"
  | "CASH"
  | "BANK_TRANSFER"
  | "BANK_SLIP"
  | "PIX"
  | "OTHER";

export const TRANSACTION_PAYMENT_LABEL_ICON: {
  [key in PaymentMethod]: JSX.Element;
} = {
  CREDIT_CARD: (
    <CiCreditCard1 size={38} className="relative right-1 text-white" />
  ),
  DEBIT_CARD: (
    <CiCreditCard2 size={38} className="relative right-1 text-white" />
  ),
  CASH: <BsCash size={30} className="text-white" />,
  BANK_TRANSFER: <CiBank size={38} className="text-white relative right-1" />,
  BANK_SLIP: <HiOutlineCash size={35} className="text-white" />,
  PIX: <MdPix size={35} className="text-white" />,
  OTHER: <RiFunctionLine size={35} className="text-white" />,
};
