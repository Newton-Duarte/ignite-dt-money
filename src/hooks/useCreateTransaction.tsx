import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useCreateTransaction() {
  return useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })
}
