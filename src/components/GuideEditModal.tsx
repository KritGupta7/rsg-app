import React from 'react';
import { FiEye, FiPlus, FiEdit2, FiShare2, FiX, FiChevronDown } from 'react-icons/fi';
import './GuideEditModal.css';

interface GuideEditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuideEditModal = ({ isOpen, onClose }: GuideEditModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          <FiX />
        </button>

        <div className="modal-content">
          <div className="modal-left">
            <div className="guide-cover-container">
              <img
                src="/rutgers-guide-cover.png"
                alt="Resident Survival Guide Cover"
                className="modal-guide-cover"
              />
              <div className="view-book-button">View Book</div>
            </div>
          </div>

          <div className="modal-right">
            <div className="guide-title-section">
              <h1>
                Resident Survival Guide
                <FiEdit2 className="title-edit-icon" />
              </h1>

              <div className="category-section">
                <h2>
                  Medicine
                  <FiEdit2 className="category-edit-icon" />
                </h2>
                <div className="published-status">
                  <span>Published</span>
                  <FiEye className="eye-icon" />
                </div>
                <button className="category-button">
                  <FiPlus className="plus-icon" />
                  Category
                </button>
              </div>
            </div>

            <div className="sections-list">
              <div className="section-item">
                <div className="section-drag-handle">≡</div>
                <div className="section-title">Title Page</div>
                <div className="section-actions">
                  <FiEye className="section-icon" />
                  <FiPlus className="section-icon" />
                  <FiEdit2 className="section-icon" />
                </div>
              </div>

              <div className="section-item">
                <div className="section-drag-handle">≡</div>
                <div className="section-title">Acknowledgements</div>
                <div className="section-actions">
                  <FiEye className="section-icon" />
                  <FiPlus className="section-icon" />
                  <FiEdit2 className="section-icon" />
                </div>
              </div>

              <div className="section-item expandable">
                <div className="section-header">
                  <div className="section-drag-handle">≡</div>
                  <div className="expand-icon">
                    <FiChevronDown />
                  </div>
                  <div className="section-title">1 GENERAL INFORMATION</div>
                  <div className="section-actions">
                    <FiEye className="section-icon" />
                    <FiPlus className="section-icon" />
                    <FiEdit2 className="section-icon" />
                  </div>
                </div>
              </div>

              <div className="subsection-item">
                <div className="section-drag-handle">≡</div>
                <div className="section-title">1.1 TEAM SUPPORT</div>
                <div className="section-actions">
                  <FiEye className="section-icon" />
                  <FiShare2 className="section-icon" />
                  <FiEdit2 className="section-icon" />
                </div>
              </div>

              <div className="subsection-item">
                <div className="section-drag-handle">≡</div>
                <div className="section-title">1.2 DAILY MENTAL CHECKLIST</div>
                <div className="section-actions">
                  <FiEye className="section-icon" />
                  <FiShare2 className="section-icon" />
                  <FiEdit2 className="section-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideEditModal;