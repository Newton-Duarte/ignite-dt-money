import * as Dialog from '@radix-ui/react-dialog';

import * as S from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <S.TransactionTypeContainer>
            <S.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </S.TransactionTypeButton>

            <S.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </S.TransactionTypeButton>
          </S.TransactionTypeContainer>

          <button type="submit">Cadastrar</button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}