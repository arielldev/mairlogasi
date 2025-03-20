export default function WhatsAppBanner() {
  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-blue-600 to-blue-700 text-white"
      dir="rtl"
    >
      <a
        href="https://wa.me/972507608061"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg">צור קשר דרך</span>
            <img
              src="/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="h-10 w-auto"
            />
          </div>
          <span className="bg-white text-blue-700 font-bold px-3 py-1 rounded shadow hover:bg-blue-100 transition-colors mt-2">
            <div className=" sm:mt-0">050-7608061</div>
          </span>
        </div>
      </a>
    </div>
  );
}
