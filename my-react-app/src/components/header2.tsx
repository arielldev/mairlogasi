"use client";

import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
  RefreshCw,
  Menu,
  LayoutGrid,
  X,
  ChevronDown,
  Phone,
  PlayCircle,
  Award,
  UserCheck,
  FileText,
  Home,
  MessageCircleQuestion,
} from "lucide-react";

const products = [
  {
    name: "הסמכות רב",
    description: "הסמכות שמצביעות על הידע והניסיון המקצועי שלי",
    href: "#",
    icon: Award, // Award icon fits well for certifications and professional growth
  },
  {
    name: "המלצות",
    description:
      "המלצות מלקוחות ושותפים עסקיים, שמעידות על איכות העבודה והשירות",
    href: "#",
    icon: UserCheck, // UserCheck is suitable for recommendations and testimonials
  },
  {
    name: "כתבות",
    description: "כתבות שפורסמו עלי שמציגות את ההתמחות והידע שלי בתעשייה",
    href: "#",
    icon: FileText, // FileText is great for articles and written content
  },
];

const callsToAction = [
  { name: "צפה בהדגמה", href: "#", icon: PlayCircle },
  { name: "צור קשר", href: "#", icon: Phone },
];

const otherLinks = [
  { name: "שאלות נפוצות", href: "/faq", icon: MessageCircleQuestion },
  { name: "גלריה", href: "/gallery", icon: LayoutGrid },
  { name: "אודות", href: "#", icon: RefreshCw },
  { name: "בית", href: "/", icon: Home },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header (lg and up) */}
      <header className="hidden lg:block bg-white shadow-md" dir="ltr">
        <nav className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8">
          {/* Logo on left */}
          <div>
            <a href="#" className="p-2">
              <img
                src="/mair.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
            </a>
          </div>
          {/* Navigation on right */}
          <div className="flex items-center space-x-8">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 cursor-pointer">
                <ChevronDown size={20} className="text-gray-400 " />
                המלצות והסמכות
              </Popover.Button>
              <Popover.Panel className="absolute top-full -right-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white  shadow-lg transition">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-blue-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          size={24}
                          className="text-gray-600 group-hover:text-blue-600"
                        />
                      </div>
                      <div className="flex-auto text-right">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-blue-50"
                    >
                      <item.icon
                        aria-hidden="true"
                        size={20}
                        className="text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Popover>
            {otherLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm font-semibold text-gray-900 "
              >
                <link.icon size={20} className="text-gray-600" />
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Persistent Header (visible on mobile) */}
      <header className="lg:hidden bg-white shadow-md" dir="rtl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          {/* Mobile: Menu button on left */}
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
          {/* Mobile: Logo on right */}
          <div className="flex-1 flex justify-end">
            <a href="#" className="p-2">
              <img
                src="/mair.jpg"
                alt="Logo"
                className="h-11 w-11 rounded-full object-cover"
              />
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-72 bg-white flex flex-col">
          {/* Drawer Header: Logo on right, Close button on left */}
          <div className="flex flex-row-reverse items-center justify-between p-4 border-b border-gray-200">
            <div>
              <a href="#" className="p-2">
                <img
                  src="/mair.jpg"
                  alt="Logo"
                  className="h-11 w-11 rounded-full object-cover"
                />
              </a>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              <X size={24} />
            </button>
          </div>
          {/* Mobile Navigation Content */}
          <div className="flex-grow overflow-y-auto p-4" dir="ltr">
            <div className="flex flex-col space-y-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center w-full rounded-md bg-gray-50 px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50">
                      <div className="flex items-center gap-2">
                        {/* Chevron and product icon on the far left */}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                        <LayoutGrid size={20} className="text-gray-600" />
                      </div>
                      <span className="flex-grow text-right">
                        {" "}
                        המלצות והסמכות{" "}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                      {products.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50"
                        >
                          <div className="flex-shrink-0">
                            <item.icon size={20} className="text-gray-600" />
                          </div>
                          <div className="flex-grow text-right">
                            {item.name}
                          </div>
                        </a>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              {otherLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50"
                >
                  <div className="flex-shrink-0">
                    <link.icon size={20} className="text-gray-600" />
                  </div>
                  <div className="flex-grow text-right">{link.name}</div>
                </a>
              ))}
            </div>
          </div>
          {/* Drawer Footer: Enhanced Contact Us Button */}
          <div className="p-4 border-t border-gray-200">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-4 py-3 text-base font-semibold text-white"
            >
              <Phone size={20} className="text-white" />
              <span>צור קשר</span>
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
