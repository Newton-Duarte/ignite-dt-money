import { Header } from "../components/Header";
import { Summary } from "../components/Summary";

import * as S from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.Container>
        <S.Table>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <S.PriceHighlight variant="income">
                R$ 12.000,00
                </S.PriceHighlight>
              </td>
              <td>Venda</td>
              <td>16/01/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td><S.PriceHighlight variant="outcome">
                - R$ 59,00
                </S.PriceHighlight></td>
              <td>Alimentação</td>
              <td>10/01/2024</td>
            </tr>
          </tbody>
        </S.Table>
      </S.Container>
    </div>
  )
}
