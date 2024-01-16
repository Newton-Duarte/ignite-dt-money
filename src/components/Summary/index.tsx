import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import * as S from './styles';

export function Summary() {
  return (
    <S.Container>
      <S.Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color='#fff' />
        </header>
        <strong>R$ 17.400,00</strong>
      </S.Card>
    </S.Container>
  )
}
