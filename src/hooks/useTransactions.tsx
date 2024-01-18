import { TransactionsContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useTransactions() {
  return useContextSelector(TransactionsContext, (context) => context)
}
