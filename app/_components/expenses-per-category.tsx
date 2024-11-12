import { TRANSACTION_CATEGORY_LABEL } from "../_constants/constants";
import { TotalExpensePerCategory } from "../_data/get-dashboard";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress_modify";
import { ScrollArea } from "./ui/scroll-area";

interface ExpensesPerCategoryProps {
  expensesPerCategory?: TotalExpensePerCategory[];
}
export default function ExpensesPerCategory({
  expensesPerCategory,
}: ExpensesPerCategoryProps) {
  return (
    <>
      <ScrollArea className="rounded-md border  h-full bg-gray-50/30">
        <CardHeader>
          <CardTitle className="text-white text-2xl">
            Gasto por Categoria
          </CardTitle>
        </CardHeader>
        <CardContent>
          {expensesPerCategory!.length > 0 ? (
            expensesPerCategory!.map((category) => (
              <div key={category.category} className="space-y-2 mb-6">
                <div className="flex justify-between w-full">
                  <p className="text-sm text-white font-semibold">
                    {TRANSACTION_CATEGORY_LABEL[category.category]}
                  </p>
                  <p className="text-sm text-white font-semibold">
                    {category.percentageOfTotal}%
                  </p>
                </div>
                <Progress value={category.percentageOfTotal} />
              </div>
            ))
          ) : (
            <div className="flex items-center justify-center w-full h-[200px]">
              {" "}
              <p className="text-white text-xl">Nenhum gasto encontrado</p>
            </div>
          )}
        </CardContent>
      </ScrollArea>
    </>
  );
}
