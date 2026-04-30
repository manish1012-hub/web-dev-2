import { createContext, useState, useContext } from "react"

const ExpenseContext = createContext()

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function addExpense(expense) {
    setExpenses([...expenses, expense])
  }

  function deleteExpense(id) {
    setExpenses(expenses.filter(exp => exp.id !== id))
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, darkMode, toggleDarkMode }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export function useExpenses() {
  return useContext(ExpenseContext)
}