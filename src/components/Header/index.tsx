import logoImg from '../../assets/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.Content>
    </S.Container>
  )
}
