import ResultRow from "./ResultRow";
import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ userInput }){
  console.log(calculateInvestmentResults(userInput))

  function total(year){
    let interest = 0;
    let capital = Number(userInput.initialInvestment);
    for(let i = 0; i < year; i++){
      interest += calculateInvestmentResults(userInput)[i].interest
      capital += calculateInvestmentResults(userInput)[i].annualInvestment
    }


    return{
      interest: interest,
      capital: capital,
    }
  }

  return(
    <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateInvestmentResults(userInput).map((row,key) => (
            <ResultRow key={key} rowInput={row} rowTotal={total(row.year)}/>
          ))}
        </tbody>
      </table>
  )
}