import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TasksSection from "@/components/tasks-section";
import AppDownloadSection from "@/components/app-download-section";
import PortfolioSection from "@/components/portfolio-section";
import SharePriceSection from "@/components/share-price-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex">
          {/* Tasks Section - Takes 2/3 width */}
          <div className="flex-2" style={{ flex: '2' }}>
            <TasksSection />
          </div>
          {/* App Download Section - Takes 1/3 width */}
          <div className="flex-1">
            <AppDownloadSection />
          </div>
        </div>
        
        <div className="flex gap-8 mt-8">
          <div className="flex-1">
            <PortfolioSection />
          </div>
          <div className="flex-1">
            <SharePriceSection />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
