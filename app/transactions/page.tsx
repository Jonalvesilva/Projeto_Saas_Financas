import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import UpsertTransactionButton from "../_components/add-transaction-button";
import Header from "../_components/header";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";

export default async function Transactions() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: { userId: userId },
    orderBy: {
      date: "desc",
    },
  });

  const userCanAdd = await canUserAddTransaction();

  return (
    <>
      <Header />
      <section className="w-full h-screen bg-black px-4 flex flex-col">
        <div className="w-full flex items-center justify-between py-6">
          <h1 className="font-bold text-2xl text-white">Transações</h1>
          <UpsertTransactionButton userCanAddTransaction={userCanAdd} />
        </div>

        <div className="flex-1 overflow-auto">
          <DataTable columns={transactionColumns} data={transactions} />
        </div>
      </section>
    </>
  );
}
