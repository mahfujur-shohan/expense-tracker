import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseTracker from "./ExpenseTracker";
import IncomeList from "./IncomeList";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

export default function MainSection() {
  const [transactions, setTransactions] = useState([]);

  function addTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  const income = transactions.filter((t) => t.type === "income");
  const expense = transactions.filter((t) => t.type === "expense");

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpense = expense.reduce((acc, item) => acc + item.amount, 0);
  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker addTransaction={addTransaction} />

          <div className="lg:col-span-2">
            <div className="bg-white">
              <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                  <TotalBalance balance={totalBalance} />
                  <TotalIncome totalIncome={totalIncome} />
                  <TotalExpense totalExpense={totalExpense} />
                </dl>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeList income={income} />

              <ExpenseList expense={expense} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
