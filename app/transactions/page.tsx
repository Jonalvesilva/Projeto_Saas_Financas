import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";

export default async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <section className="w-full h-screen min-h-[550px] bg-black px-4">
        <div className="w-full flex items-center justify-between py-6">
          <h1 className="font-bold text-2xl text-white">Transações</h1>
          <UpsertTransactionButton />
        </div>
        <DataTable columns={transactionColumns} data={transactions} />
      </section>
    </>
  );
}
