import { Card, CardContent } from "@/components/ui/card";

export default function TasksSection() {
  return (
    <Card className="bg-white shadow-sm border border-gray-200">
      <CardContent className="p-6">
        <div className="flex relative">
          {/* Extended grey ribbon covering both sections for EquateMobile App */}
          <div className="absolute bg-gray-400 h-12 rounded left-0 right-0 z-0 flex items-center" style={{ top: '90px', paddingLeft: '16px' }}>
            <div className="text-left">
              <div className="text-xs font-bold text-black">EquateMobile App</div>
              <div className="text-xs text-gray-700">As soon as possible.</div>
            </div>
          </div>
          
          {/* Left Side - Task List */}
          <div className="w-1/3 pr-4 relative z-10">
            <h2 className="text-lg font-semibold text-slate-800 mb-6">YOUR TASKS</h2>
            <h3 className="text-sm font-medium text-slate-600 mb-4">NEW TASKS (2)</h3>
            
            {/* Task items */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-transparent text-xs">EquateMobile App</h4>
                  <p className="text-xs text-transparent">As soon as possible.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-slate-800 text-xs">Ericsson share purchase plan</h4>
                  <p className="text-xs text-slate-600">Complete before: 24-Aug-2025</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Timeline Chart */}
          <div className="w-2/3 pl-4 border-l border-gray-200 relative z-10">
            {/* Vertical separator lines spanning full height */}
            <div className="absolute top-0 w-px h-full bg-gray-300 opacity-50" style={{ left: 'calc(33.33% + 11px)' }}></div>
            <div className="absolute top-0 w-px h-full bg-gray-300 opacity-50" style={{ left: 'calc(66.66% + 3px)' }}></div>
            
            {/* Date indicator */}
            <div className="inline-block bg-slate-700 text-white px-3 py-1 rounded text-xs font-medium mb-4">
              Today, 29 JUL
            </div>
            
            {/* Timeline header with months */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center text-sm text-slate-500 font-medium">AUG 2025</div>
              <div className="text-center text-sm text-slate-500 font-medium">SEP 2025</div>
              <div className="text-center text-sm text-slate-500 font-medium">OCT 2025</div>
            </div>
            
            {/* Task progress bars */}
            <div className="space-y-6">
              {/* EquateMobile App - Empty space since ribbon covers it */}
              <div className="relative h-6">
                {/* Space for ribbon */}
              </div>
              
              {/* Gap between ribbon and orange bar */}
              <div className="h-3"></div>
              
              {/* Ericsson share purchase - Progress ends at first vertical line */}
              <div className="relative">
                <div className="relative bg-gray-200 h-3 rounded-full">
                  <div className="absolute left-0 top-0 w-1/3 h-3 bg-accent rounded-full" />
                  <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent rounded-full border-2 border-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
