"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

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
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
  },
  {
    accessorKey: "actions",
    header: "",
  },
];