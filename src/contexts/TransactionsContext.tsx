import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { TRANSACTIONS_URL } from '../constants/api-routes'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export type TransactionType = 'income' | 'outcome'

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: TransactionType
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get(TRANSACTIONS_URL, {
      params: {
        q: query || '',
      },
    })

    setTransactions(response.data)
  }

  async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post(TRANSACTIONS_URL, {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
