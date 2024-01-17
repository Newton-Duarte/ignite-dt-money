import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'

import * as S from './styles'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransactions } from '../../hooks/useTransactions'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useTransactions()

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data

    await createTransaction({ description, price, category, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <S.Overlay />

      <S.Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <S.TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <S.TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </S.TransactionTypeButton>

                  <S.TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </S.TransactionTypeButton>
                </S.TransactionTypeContainer>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </S.Content>
    </Dialog.Portal>
  )
}
