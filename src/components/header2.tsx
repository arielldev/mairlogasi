"use client";

import { useState, useEffect, useMemo, ElementType, Fragment } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  RefreshCw,
  Menu,
  LayoutGrid,
  X,
  ChevronDown,
  PlayCircle,
  Award,
  UserCheck,
  FileText,
  Home,
  MessageCircleQuestion,
} from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: ElementType | null;
  description?: string;
};

const products: NavItem[] = [
  {
    name: "הסמכות רב",
    description: "הסמכות שמצביעות על הידע והניסיון המקצועי שלי",
    href: "/recommendations/graduations",
    icon: Award,
  },
  {
    name: "המלצות",
    description:
      "המלצות מלקוחות ושותפים עסקיים, שמעידות על איכות העבודה והשירות",
    href: "/recommendations/customers",
    icon: UserCheck,
  },
  {
    name: "כתבות",
    description: "כתבות שפורסמו עלי שמציגות את ההתמחות והידע שלי בתעשייה",
    href: "/recommendations/articles",
    icon: FileText,
  },
];

const callsToAction: NavItem[] = [
  { name: "צפה בהדגמה", href: "#", icon: PlayCircle },
  { name: "צור קשר", href: "https://wa.link/k03lkr", icon: null }, // We'll override the icon for צור קשר
];

const otherLinks: NavItem[] = [
  { name: "שאלות נפוצות", href: "/faq", icon: MessageCircleQuestion },
  { name: "גלריה", href: "/gallery", icon: LayoutGrid },
  { name: "אודות", href: "/about", icon: RefreshCw },
  { name: "בית", href: "/", icon: Home },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helpers for active styling
  const getLinkClasses = (linkHref: string): string => {
    const base = "flex items-center gap-1 text-sm font-semibold ";
    return (
      base + (currentPath === linkHref ? "text-blue-600" : "text-gray-900")
    );
  };

  const getIconColor = (linkHref: string): string =>
    currentPath === linkHref ? "text-blue-600" : "text-gray-600";

  const mobileOtherLinks = useMemo(() => otherLinks.slice().reverse(), []);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block bg-white shadow-md" dir="ltr">
        <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
          {/* Logo */}
          <div>
            <a href="#" className="p-2">
              <img
                src="/mair.jpg"
                alt="Logo"
                className="h-11 w-11 rounded-full object-cover"
              />
            </a>
          </div>
          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 cursor-pointer">
                <ChevronDown size={20} className="text-gray-400" />
                המלצות והסמכות
              </Popover.Button>
              <Popover.Panel className="absolute top-full -right-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg transition">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-blue-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        {item.icon && (
                          <item.icon
                            aria-hidden="true"
                            size={24}
                            className={getIconColor(item.href)}
                          />
                        )}
                      </div>
                      <div className="flex-auto text-right">
                        <a
                          href={item.href}
                          className="block "
                        >
                          <span className=" text-gray-900 font">{item.name}</span>
                      
                        {item.description && (
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        )}
                          </a>
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
                      {item.name === "צור קשר" ? (
                        <img
                          src="/whatsapp-logo.png"
                          alt="WhatsApp Logo"
                          className="h-5 w-5"
                        />
                      ) : (
                        item.icon && (
                          <item.icon
                            aria-hidden="true"
                            size={20}
                            className="text-gray-400"
                          />
                        )
                      )}
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
                className={getLinkClasses(link.href)}
              >
                {link.icon && (
                  <link.icon size={20} className={getIconColor(link.href)} />
                )}
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden bg-white shadow-md" dir="rtl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex-1 flex justify-start">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-gray-700 hover:text-blue-600"
            >
              <Menu size={24} />
            </button>
          </div>
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

      {/* Mobile Menu Drawer with Transition.Root */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setMobileMenuOpen}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 z-50 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in duration-200 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto w-72 bg-white flex flex-col">
                {/* Drawer Header */}
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

                {/* Navigation Content */}
                <div className="flex-grow overflow-y-auto p-4" dir="ltr">
                  <div className="flex flex-col space-y-2">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex items-center w-full rounded-md bg-gray-50 px-4 py-3 text-base font-semibold text-gray-900 hover:bg-blue-50">
                            <div className="flex items-center gap-2">
                              <ChevronDown
                                size={20}
                                className={`transition-transform duration-200 ${
                                  open ? "rotate-180" : ""
                                }`}
                              />
                              <LayoutGrid size={20} className="text-gray-600" />
                            </div>
                            <span className="flex-grow text-right">
                              המלצות והסמכות
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
                                  {item.icon && (
                                    <item.icon
                                      size={20}
                                      className={getIconColor(item.href)}
                                    />
                                  )}
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
                    {mobileOtherLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-2 rounded-md px-4 py-3 text-base font-semibold hover:bg-blue-50 ${
                          currentPath === link.href
                            ? "text-blue-600"
                            : "text-gray-900"
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {link.icon && (
                            <link.icon
                              size={20}
                              className={getIconColor(link.href)}
                            />
                          )}
                        </div>
                        <div className="flex-grow text-right">{link.name}</div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Drawer Footer */}
                <div className="p-4 border-t border-gray-200">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 px-4 py-3 text-base font-semibold text-white"
                  >
                    <img
                      src="/whatsapp-logo.png"
                      alt="WhatsApp Logo"
                      className="h-5 w-5"
                    />
                    <span>צור קשר דרך</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
