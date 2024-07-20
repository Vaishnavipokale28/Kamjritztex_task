// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
const App = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/transactions');
            setTransactions(response.data);
        } catch (error) {
            console.error('There was an error fetching the transactions!', error);
        }
    };

    const addTransaction = async (transaction) => {
        try {
            const response = await axios.post('http://localhost:8080/api/transactions', transaction);
            setTransactions([...transactions, response.data]);
        } catch (error) {
            console.error('There was an error creating the transaction!', error);
        }
    };

    return (
        <div>
            <h1>Transaction Monitoring Platform</h1>
            <TransactionForm addTransaction={addTransaction} />
            <TransactionList transactions={transactions} />
        </div>
    );
};

export default App;
