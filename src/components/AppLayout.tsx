import React, { useState, useEffect } from 'react';
import { FiBook, FiUsers, FiClock, FiSettings, FiMenu, FiX } from 'react-icons/fi';
import { useRouter, usePathname } from 'next/navigation';

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Track window resize and initial width
  useEffect(() => {
    // This only runs on the client side
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle sidebar for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle navigation
  const handleNavigation = (path) => {
    router.push(path);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Determine if we're on mobile - only check if component is mounted
  const isMobile = isMounted && windowWidth <= 430;

  // Function to determine if a menu item is active
  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <div className="dashboard-container">
      {/* Mobile header with hamburger menu */}
      {isMobile && (
        <div className="mobile-header">
          <button className="menu-toggle" onClick={toggleSidebar}>
            <FiMenu />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isMobile ? (sidebarOpen ? 'sidebar-open' : 'sidebar-closed') : ''}`}>
        {isMobile && sidebarOpen && (
          <div className="sidebar-header">
            <FiX
              className="close-sidebar"
              onClick={toggleSidebar}
            />
          </div>
        )}

        <div className="logo-section">
          <div className="logo-wrapper">
            <img
              src="/rutgers-r-logo.png"
              alt="R logo"
              className="r-logo"
            />
          </div>
          <h1>Handbook</h1>
        </div>

        <div className={`menu-section ${isMobile && sidebarOpen ? 'menu-section-mobile' : ''}`}>
          <div
            className={`menu-item ${isActive('/dashboard') ? 'active' : ''}`}
            onClick={() => handleNavigation('/dashboard')}
          >
            <FiBook className="menu-icon" />
            <span>Library</span>
          </div>
          <div
            className={`menu-item ${isActive('/users') ? 'active' : ''}`}
            onClick={() => handleNavigation('/users')}
          >
            <FiUsers className="menu-icon" />
            <span>Users</span>
          </div>
          <div
            className={`menu-item ${isActive('/history') ? 'active' : ''}`}
            onClick={() => handleNavigation('/history')}
          >
            <FiClock className="menu-icon" />
            <span>History</span>
          </div>
          <div
            className={`menu-item settings-item ${isActive('/settings') ? 'active' : ''}`}
            onClick={() => handleNavigation('/settings')}
          >
            <FiSettings className="menu-icon" />
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>

      {/* Overlay for mobile sidebar */}
      {isMobile && sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AppLayout;