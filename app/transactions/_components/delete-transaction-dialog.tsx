"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../_components/ui/alert-dialog";
import { Button } from "../../_components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteTransaction } from "../_actions/delete-transaction";
import { success, error as errorToast } from "@/app/_functions/toast";

interface ButtonProps {
  transactionId: string;
}

export default function DeleteTransactionDialog({
  transactionId,
}: ButtonProps) {
  const deleteHandleClick = async () => {
    try {
      await deleteTransaction({ transactionId });
      success("Transação Deletada com Sucesso");
    } catch (error) {
      console.log(error);
      errorToast("Falha na exclusão da transação");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <TrashIcon />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Você realmente deseja deletar esta transação?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esta operação não poderá ser desfeita.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={deleteHandleClick}>
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
