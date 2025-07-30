export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white mt-16" style={{ height: '40px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
        <div className="text-sm">© 2025 EquateShare. All rights reserved.</div>
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">Privacy</a>
          <a href="#" className="hover:text-gray-300">Terms</a>
          <a href="#" className="hover:text-gray-300">Support</a>
        </div>
      </div>
    </footer>
  );
}
