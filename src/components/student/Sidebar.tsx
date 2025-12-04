import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  GitCompare,
  FolderOpen,
  Bell,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: number;
}

const mainNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/student/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    label: "My Applications",
    href: "/student/applications",
    icon: <FileText size={20} />,
    badge: 3,
  },
  {
    label: "Loan Comparison",
    href: "/student/compare",
    icon: <GitCompare size={20} />,
  },
  {
    label: "Documents",
    href: "/student/documents",
    icon: <FolderOpen size={20} />,
  },
];

const secondaryNavItems: NavItem[] = [
  {
    label: "Notifications",
    href: "/student/notifications",
    icon: <Bell size={20} />,
    badge: 3,
  },
  {
    label: "Profile Settings",
    href: "/student/profile",
    icon: <User size={20} />,
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = location.pathname === item.href;

    return (
      <Link to={item.href} onClick={() => setIsMobileOpen(false)}>
        <motion.div
          className={`
            sidebar-item flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
            transition-all duration-300 relative group
            ${isActive 
              ? "bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-primary-light" 
              : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary-light"
            }
            ${isCollapsed ? "justify-center" : ""}
          `}
          whileHover={{ x: isCollapsed ? 0 : 4 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-r-full"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {/* Icon */}
          <span className={`${isActive ? "text-primary dark:text-primary-light" : ""} transition-colors flex-shrink-0`}>
            {item.icon}
          </span>

          {/* Label */}
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-medium text-sm whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>

          {/* Badge */}
          {item.badge && !isCollapsed && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="ml-auto bg-gradient-to-r from-primary to-accent text-white text-xs font-semibold px-2 py-0.5 rounded-full"
            >
              {item.badge}
            </motion.span>
          )}

          {/* Collapsed badge */}
          {item.badge && isCollapsed && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {item.badge}
            </span>
          )}

          {/* Tooltip for collapsed state */}
          {isCollapsed && (
            <div className="absolute left-full ml-3 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-lg">
              {item.label}
              <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </div>
          )}
        </motion.div>
      </Link>
    );
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`p-4 ${isCollapsed ? "px-3" : "px-6"}`}>
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center shadow-lg shadow-primary/25 overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/favicon.png" alt="Edumate" className="w-7 h-7 object-contain" />
          </motion.div>
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex flex-col"
              >
                <span className="font-display font-bold text-lg gradient-text">
                  Edumate
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 -mt-1">Student Portal</span>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="flex-1 px-3 py-4 space-y-1">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-4 mb-3"
            >
              Main Menu
            </motion.p>
          )}
        </AnimatePresence>
        
        {mainNavItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        {/* Divider */}
        <div className="my-4 border-t border-slate-200 dark:border-slate-700" />

        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider px-4 mb-3"
            >
              Account
            </motion.p>
          )}
        </AnimatePresence>

        {secondaryNavItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>

      {/* Logout Button */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-700">
        <motion.button
          className={`
            w-full flex items-center gap-3 px-4 py-3 rounded-xl
            text-slate-500 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400
            transition-all duration-300
            ${isCollapsed ? "justify-center" : ""}
          `}
          whileHover={{ x: isCollapsed ? 0 : 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut size={20} />
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="font-medium text-sm"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Collapse Toggle - Desktop only */}
      <div className="hidden lg:block p-3 border-t border-slate-200 dark:border-slate-700">
        <motion.button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 dark:hover:text-slate-300 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          <AnimatePresence mode="wait">
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="text-xs font-medium"
              >
                Collapse
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg shadow-lg border border-slate-200 dark:border-slate-700"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileOpen ? <X size={24} className="text-slate-700 dark:text-slate-300" /> : <Menu size={24} className="text-slate-700 dark:text-slate-300" />}
      </motion.button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        className={`
          hidden lg:flex flex-col h-screen sticky top-0
          bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700
          shadow-soft transition-all duration-300
        `}
        animate={{ width: isCollapsed ? 80 : 260 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <SidebarContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden fixed left-0 top-0 bottom-0 w-72 z-50 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl border-r border-slate-200 dark:border-slate-700 shadow-2xl"
          >
            <SidebarContent />
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
