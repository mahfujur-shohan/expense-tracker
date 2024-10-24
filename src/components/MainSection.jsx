import ExpenseList from "./ExpenseList";
import ExpenseTracker from "./ExpenseTracker";
import IncomeList from "./IncomeList";
import TotalBalance from "./TotalBalance";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";

export default function MainSection() {
  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ExpenseTracker />

          <div className="lg:col-span-2">
            <div className="bg-white">
              <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                  <TotalBalance />
                  <TotalIncome />
                  <TotalExpense />
                </dl>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
              <IncomeList />

              <ExpenseList />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
