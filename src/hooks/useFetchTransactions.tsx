import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useFetchTransactions() {
  return useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })
}
