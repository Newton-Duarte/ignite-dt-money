import { useMemo } from 'react'
import { useTransactionsList } from './useTransactionsList'

export function useSummary() {
  const transactions = useTransactionsList()

  const summary = useMemo(() => {
    return transactions.reduce(
      (accumulator, transaction) => {
        if (transaction.type === 'income') {
          accumulator.income += transaction.price
          accumulator.total += transaction.price
        } else {
          accumulator.outcome += transaction.price
          accumulator.total -= transaction.price
        }

        return accumulator
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transactions])

  return summary
}
