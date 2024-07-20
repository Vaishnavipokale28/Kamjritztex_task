import requests
import time

API_URL = "http://localhost:8080/api/transactions"

def get_transactions():
    response = requests.get(API_URL)
    if response.status_code == 200:
        return response.json()
    else:
        print("Failed to retrieve transactions")
        return []

def detect_fraud(transactions):
    for transaction in transactions:
        if transaction['amount'] > 10000:  # Example fraud detection rule
            print(f"Fraud detected: {transaction}")

if _name_ == "_main_":
    while True:
        transactions = get_transactions()
        detect_fraud(transactions)
        time.sleep(10)  # Check every 10 seconds