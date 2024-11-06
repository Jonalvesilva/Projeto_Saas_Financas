import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <section className="w-full h-screen min-h-[550px] bg-gradient-to-br from-slate-900 to-black ">
        <div className="w-full flex items-center justify-between px-3 py-6">
          <h1 className="font-bold text-2xl text-white">Transações</h1>
          <Button variant="outline" className="rounded-full">
            Adicionar Transação<ArrowDownUpIcon></ArrowDownUpIcon>
          </Button>
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </section>
    </>
  );
}
