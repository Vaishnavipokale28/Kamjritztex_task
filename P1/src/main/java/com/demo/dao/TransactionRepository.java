package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.demo.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
}
