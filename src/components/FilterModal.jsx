import React from 'react';
import './FilterModal.css';

function FilterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="filter-modal">
        <div className="filter-grid">
          <button className="filter-button">Publique</button>
          <button className="filter-button">7j</button>
          <button className="filter-button">Science</button>
          <button className="filter-button">Préféré</button>
        </div>
        <div className="filter-label">Filtres</div>
      </div>
    </div>
  );
}

export default FilterModal;
