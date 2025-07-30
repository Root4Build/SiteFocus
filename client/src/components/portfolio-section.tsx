import { Card, CardContent } from "@/components/ui/card";
import { Info, TrendingUp } from "lucide-react";

export default function PortfolioSection() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800">YOUR PORTFOLIO</h3>
          <Info className="h-5 w-5 text-slate-400" />
        </div>
        <p className="text-sm text-slate-600 mb-2">Estimated Gross Value</p>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-slate-400" />
          <div>
            <div className="text-sm text-slate-500">TOTAL</div>
            <div className="text-2xl font-bold text-slate-800">₹2,654,525.28</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
