import React, { useState, useEffect } from 'react';

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Fetch payment history from the API
    fetch('/api/payments')
      .then(res => res.json())
      .then(data => setPayments(data));
  }, []);

  return (
    <div className="payment-history">
      <h1>Payment History</h1>
      <div className="payment-list">
        {payments.map(payment => (
          <div key={payment.id} className="payment-item">
            <span>Method: {payment.paymentMethod}</span>
            <span>Amount: {payment.amount}</span>
            <span>Status: {payment.paymentStatus}</span>
            <span>Refund Amount: {payment.refundAmount}</span>
            <span>Refund Status: {payment.refundStatus}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
