export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-magenta rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            FSL Education <span className="text-brand-magenta">Hub</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} FSL Education Hub. FSL reserved.
        </p>

        {/* <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-brand-magenta transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-magenta transition-colors">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
}