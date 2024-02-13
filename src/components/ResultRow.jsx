import { formatter } from "../util/investment";

export default function ResultRow({ rowInput, rowTotal }) {
  console.log(rowInput)
  return (
    <tr>
      <th>{rowInput.year}</th>
      <td>{ formatter.format(rowInput.valueEndOfYear) }</td>
      <td>{ formatter.format(rowInput.interest) }</td>
      <td>{ formatter.format(rowTotal.interest) }</td>
      <td>{ formatter.format(rowTotal.capital) }</td>
    </tr>
  );
}
