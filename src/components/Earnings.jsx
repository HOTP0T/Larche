import React from 'react';
import './Earnings.css';

function Earnings() {
  return (
    <div className="earnings">
      <header className="earnings-header">
        <button className="back-button">←</button>
        <h2>Earnings</h2>
      </header>

      <div className="earnings-summary">
        <div className="total-earnings">
          <span className="label">Total Earnings</span>
          <span className="amount">€2,450.00</span>
        </div>
        
        <div className="earnings-stats">
          <div className="stat">
            <span className="label">This Month</span>
            <span className="amount">€450.00</span>
          </div>
          <div className="stat">
            <span className="label">Last Month</span>
            <span className="amount">€380.00</span>
          </div>
        </div>
      </div>

      <div className="earnings-history">
        <h3>Transaction History</h3>
        <div className="transactions">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="transaction-item">
              <div className="transaction-info">
                <span className="transaction-title">Content Revenue</span>
                <span className="transaction-date">May {item}, 2023</span>
              </div>
              <span className="transaction-amount">+€45.00</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Earnings;
