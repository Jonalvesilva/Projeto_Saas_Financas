import { auth, clerkClient } from "@clerk/nextjs/server";
import { currentMonthTransaction } from "../get-current-month-transactions";

export const canUserAddTransaction = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error();
  }

  const user = await clerkClient().users.getUser(userId);

  if (user.publicMetadata.subscriptionPlan == "premium") {
    return true;
  }

  const numberTransaction = await currentMonthTransaction(userId);

  if (numberTransaction >= 10) {
    return false;
  }

  return true;
};
