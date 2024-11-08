import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";
import Header from "../_components/header";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Header />
      <section className="w-full h-screen bg-black px-4 flex flex-col">
        <div className="w-full flex items-center justify-between py-6">
          <h1 className="font-bold text-2xl text-white">Transações</h1>
          <UpsertTransactionButton />
        </div>

        <div className="flex-1 overflow-auto">
          <DataTable columns={transactionColumns} data={transactions} />
        </div>
      </section>
    </>
  );
}
