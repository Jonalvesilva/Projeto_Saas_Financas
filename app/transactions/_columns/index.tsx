"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { PencilIcon, TrashIcon } from "lucide-react";
import {
  TRANSACTION_CATEGORY_LABEL,
  TRANSACTION_PAYMENT_LABEL,
} from "../../_constants/constants";

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-green-900 font-semibold">
            Depósito
            <div className="h-2 w-2 rounded-full bg-green-300 ml-2 animate-pulse"></div>
          </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="bg-red-600 font-semibold">
            Despesa{" "}
            <div className="h-2 w-2 rounded-full bg-red-300 ml-2 animate-pulse"></div>
          </Badge>
        );
      }
      return (
        <Badge className="bg-gray-700 font-semibold">
          Investimento{" "}
          <div className="h-2 w-2 rounded-full bg-gray-300 ml-2 animate-pulse"></div>
        </Badge>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTION_CATEGORY_LABEL[transaction.category];
    },
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) => {
      return TRANSACTION_PAYMENT_LABEL[transaction.paymentMethod];
    },
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) => {
      return new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    },
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) => {
      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount));
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => (
      <div className="flex justify-center">
        <Button variant="ghost" size="icon">
          <PencilIcon />
        </Button>
        <Button variant="ghost" size="icon">
          <TrashIcon />
        </Button>
      </div>
    ),
  },
];
