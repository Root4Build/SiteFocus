import { ChevronDown, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-xl font-bold text-primary">EquateShare</div>
          </div>
          
          {/* Center Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Overview
            </a>
            
            {/* Library Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                  Library <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Documents</DropdownMenuItem>
                <DropdownMenuItem>Forms</DropdownMenuItem>
                <DropdownMenuItem>Resources</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Help Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium">
                  Help <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Support Center</DropdownMenuItem>
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
                <DropdownMenuItem>FAQ</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
          
          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center text-slate-700 hover:text-primary">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium mr-2">
                  VG
                </div>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Personal Details</DropdownMenuItem>
              <DropdownMenuItem>Financial Details</DropdownMenuItem>
              <DropdownMenuItem>Security</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
