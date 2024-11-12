import { Card, CardContent, CardHeader } from "./ui/card";

interface Props {
  icon: React.ReactNode;
  title: string;
  amount: number;
}
export default function SummaryCardItem({ icon, title, amount }: Props) {
  return (
    <Card className="bg-gray-50/30">
      <CardHeader>
        <div className="flex items-center gap-x-2 text-white">
          {icon}
          <p>{title}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-semibold text-white">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>
      </CardContent>
    </Card>
  );
}
