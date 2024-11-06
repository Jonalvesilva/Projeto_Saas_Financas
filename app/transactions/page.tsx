import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <section className="w-full h-screen min-h-[550px] bg-black px-4">
        <div className="w-full flex items-center justify-between py-6">
          <h1 className="font-bold text-2xl text-white">Transações</h1>
          <Button
            variant="outline"
            className="rounded-full max-[370px]:p-0 max-[370px]:px-2"
          >
            Adicionar Transação
            <ArrowDownUpIcon className="max-[370px]:hidden"></ArrowDownUpIcon>
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </section>
    </>
  );
}
