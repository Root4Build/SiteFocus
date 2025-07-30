import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AppDownloadSection() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200 border-t-4 border-t-orange-500">
      <CardContent className="p-6">
        <div className="text-left">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">EquateMobile App</h2>
          <p className="text-slate-600 mb-4">As soon as possible.</p>
          
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            Download now - EquateMobile offers you the flexibility to access your share plan portfolio 
            on the go, anytime, anywhere!
          </p>
          
          <Button className="bg-success hover:bg-success/90 text-success-foreground px-6 py-3 rounded-lg font-medium">
            More Information
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
