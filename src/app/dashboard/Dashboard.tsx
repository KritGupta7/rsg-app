import React, { useState, useEffect } from 'react';
import { FiBook, FiUsers, FiClock, FiSettings, FiMenu, FiX, FiPlus, FiEdit2 } from 'react-icons/fi';
import './Dashboard.css';
import GuideEditModal from '@/components/GuideEditModal'; // Make sure this path is correct

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with 0 instead of window.innerWidth
  const [isMounted, setIsMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Handle edit button click
  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Determine if we're on mobile - only check if component is mounted
  const isMobile = isMounted && windowWidth <= 430;

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
          <div className="menu-item active">
            <FiBook className="menu-icon" />
            <span>Library</span>
          </div>
          <div className="menu-item">
            <FiUsers className="menu-icon" />
            <span>Users</span>
          </div>
          <div className="menu-item">
            <FiClock className="menu-icon" />
            <span>History</span>
          </div>
          <div className="menu-item settings-item">
            <FiSettings className="menu-icon" />
            <span>Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <h1>Library</h1>
        </div>

        {/* Subjects dropdown - now directly below header */}
        <div className="sort-dropdown">
          <button className="sort-button">
            <span className="sort-icon"></span>
            Subjects
            <span className="dropdown-arrow">▼</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="content">
          <div className="guide-card">
            <div className="card-image">
              <img
                src="/rutgers-guide-cover.png"
                alt="Resident Survival Guide Cover"
                className="guide-cover"
              />
            </div>
            <div className="guide-info">
              <div className="guide-title-row">
                <h2>Resident Survival Guide</h2>
                <FiEdit2 className="edit-icon" onClick={handleEditClick} />
              </div>
              <p>Medicine</p>
            </div>
          </div>
        </div>

        {/* New Button */}
        <div className="new-button">
          <FiPlus className="plus-icon" />
          <span>New</span>
        </div>
      </div>

      {/* Modal */}
      <GuideEditModal isOpen={isModalOpen} onClose={handleCloseModal} />

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

export default Dashboard;