import { useState } from "react";
import InputSpec from "./components/InputSpec";
import ResultTable from "./components/ResultTable";

const USER_INPUT = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
};

function App() {
  const [userInput, setUserinput] = useState(USER_INPUT);

  function HandleUserInput(label, value) {
    setUserinput((preUserInput) => {
      return {
        ...preUserInput,
        [label]: value,
      };
    });
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <InputSpec
            label="initialInvestment"
            onChangeNumber={HandleUserInput}
          />
          <InputSpec
            label="annualInvestment"
            onChangeNumber={HandleUserInput}
          />
        </div>
        <br />
        <div className="input-group">
          <InputSpec label="expectedReturn" onChangeNumber={HandleUserInput} />
          <InputSpec label="duration" onChangeNumber={HandleUserInput} />
        </div>
      </div>
      <ResultTable userInput={userInput} />
    </>
  );
}

export default App;
