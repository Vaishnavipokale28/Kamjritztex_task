// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
    const [transaction, setTransaction] = useState({
        accountNumber: '',
        amount: '',
        timestamp: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTransaction({ ...transaction, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTransaction(transaction);
        setTransaction({
            accountNumber: '',
            amount: '',
            timestamp: '',
            status: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Account Number:
                <input type="text" name="accountNumber" value={transaction.accountNumber} onChange={handleChange} />
            </label>
            <label>
                Amount:
                <input type="text" name="amount" value={transaction.amount} onChange={handleChange} />
            </label>
            <label>
                Timestamp:
                <input type="text" name="timestamp" value={transaction.timestamp} onChange={handleChange} />
            </label>
            <label>
                Status:
                <input type="text" name="status" value={transaction.status} onChange={handleChange} />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
