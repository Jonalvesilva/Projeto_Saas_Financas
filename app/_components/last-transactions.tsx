import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Transaction } from "@prisma/client";
import {
  TRANSACTION_PAYMENT_LABEL_ICON,
  TRANSACTION_PAYMENT_TEXT_COLOR,
} from "../_constants/constants";

export interface LastTransactions {
  lastTransaction: Transaction[];
}

export default function LastTransactions({
  lastTransaction,
}: LastTransactions) {
  return (
    <>
      <ScrollArea className="rounded-md border bg-gray-50/30 mt-6 h-[300px] lg:mt-0 lg:h-full">
        <CardHeader className="font-bold text-white">
          <CardTitle className="flex justify-center">
            Últimas Transações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 bg-transparent">
          <div className="flex flex-col items-start justify-start">
            {lastTransaction?.map((transaction) => (
              <div
                className="flex justify-between items-center w-full"
                key={`transaction_${transaction.id}`}
              >
                <div className="flex gap-x-2">
                  <span className="relative top-1">
                    {
                      TRANSACTION_PAYMENT_LABEL_ICON[
                        `${transaction.paymentMethod}`
                      ]
                    }
                  </span>
                  <div className="flex flex-col pb-4">
                    <p className="text-sm text-white text-clip truncate">
                      {transaction.name}
                    </p>
                    <p className="text-sm text-white">{`${transaction.createdAt.toLocaleDateString("en-GB")}`}</p>
                  </div>
                </div>
                <div>
                  <p
                    className={`${TRANSACTION_PAYMENT_TEXT_COLOR[transaction.type]} font-semibold blackTextShadow`}
                  >
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(transaction.amount))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </ScrollArea>
    </>
  );
}
