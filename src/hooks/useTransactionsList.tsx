import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useTransactionsList() {
  return useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
}
