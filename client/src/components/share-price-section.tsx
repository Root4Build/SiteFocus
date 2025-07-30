import { Card, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SharePriceSection() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-slate-800">SHARE PRICE</h3>
          <Info className="h-5 w-5 text-slate-400" />
        </div>
        
        <div className="mb-4">
          <Select defaultValue="ericsson">
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select pricing option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ericsson">Pricing relates to Ericsson B Shares</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <div className="text-sm text-slate-500">29-JUL-2025 2:29 AM - CLOSED</div>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-slate-800">SEK 71.50</div>
            <div className="text-sm text-success">0.72%</div>
            <div className="text-xs text-slate-500">Since last trading day</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
