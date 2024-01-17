
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { useTransactions } from '../../hooks/useTransactions';
import { SearchForm } from './components/SearchForm';

import * as S from './styles';

export function Transactions() {
  const { transactions } = useTransactions();

  return (
    <div>
      <Header />
      <Summary />

      <S.Container>
        <SearchForm />
        <S.Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <S.PriceHighlight variant={transaction.type}>
                  R$ {transaction.price}
                  </S.PriceHighlight>
                </td>
                <td>{transaction.type}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  )
}
