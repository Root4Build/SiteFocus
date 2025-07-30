import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-64 bg-gray-900 overflow-hidden">
      {/* Background image with business professional */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=600')"
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-20 rounded-full text-white hover:bg-opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      
      {/* Content overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-2">Hello</h1>
          <p className="text-xl mb-2">New Ericsson share purchase plan is open</p>
          <p className="text-xl">for enrolment. See NEW TASK below</p>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full" />
        <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full" />
      </div>
    </section>
  );
}
