import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.price
        accumulator.total += transaction.price
      } else {
        accumulator.outcome += transaction.price
        accumulator.total -= transaction.price
      }

      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>R$ {summary.income}</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>R$ {summary.outcome}</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>R$ {summary.total}</strong>
      </S.Card>
    </S.Container>
  )
}
