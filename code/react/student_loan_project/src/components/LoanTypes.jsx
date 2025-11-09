import React from "react";
import { evaluate } from 'mathjs';
import '../App.css';
// import { useEffect } from "react";

function Loans() {
  const Loans = [
    {
      name: "Undergraduate Loan",
      description: "Designed for students pursuing their first degree (BA, BSc, LLB, etc ) ",
      interestRate: 1.5,
      repaymentPeriod: 5,
      eligibility: "Must be enrolled full-time in an accredited undergraduate program."
    },
    {
      name: "Postgraduate Loan",
      description: "For master's and PhD students (MBA, MPhil, PhD, etc).",
      interestRate: 1.8,
      repaymentPeriod: 7,
      eligibility: "Must have completed undergraduate studies."
    },
    {
      name: "Professional Course Loan",
      description: "Supports students in specialized certifications and professional programs (CPA, CFA, etc).",
      interestRate: 1.8,
      repaymentPeriod: 4,
      eligibility: "Must be admitted into a certified program."
    },
    {
      name: "Emergency Loan",
      description: "Short-term financial assistance for unexpected expenses related to education.",
      interestRate: 1,
      repaymentPeriod: 2,
      eligibility: "Must prove urgent need with documentation."
    }
  ];

  return (
    <div className="loan-types-page">
      <div className="title-container">
        <h1 className="title">Student Loans - Types</h1>
        <p className="sub-title">Explore the various types of loans available to students at our university.</p>
    </div>
      <ol>
        {Loans.map((loan, index) => (
          <li key={index} className="loan-type-list">
            <h2>{loan.name}</h2>
            <p>{loan.description}</p>
            <p><strong>Interest Rate:</strong> {loan.interestRate}%</p>
            <p><strong>Repayment Period:</strong> {loan.repaymentPeriod} years</p>
            <p><strong>Eligibility:</strong> {loan.eligibility}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

function LoansCalc() {
  const[input, setInput] = React.useState(0);

  // const LoanTypes = ["Undergrad", "Postgrad", "Professional", "Emergency"]


  const handleClick = (value) => {
  setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };


const handleCalculate = () => {
  try {
    const result = evaluate(input);
    setInput(result.toString());
  } catch  {
    setInput('Error');
  }
};

  return (
    <>
    <div className="calculator">

       <p className="calculator-info">
       <strong>Want to estimate your loan repayment?</strong><br />
         Use the calculator to get a quick idea based on interest rates and repayment periods.
    </p>
      
      <div className="display">{input || '0'}</div>
        
        <div className="number-buttons">
        <button onClick={handleClear}>C</button>
         {['%','/', '*'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}

        {[7,8,9,'x'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {[4,5,6,'-'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        {[1,2,3,'+'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
          
        {["Loan Calc ▼ ",0,'.'].map((val) => (
          <button key={val} onClick={() => handleClick(val)}>{val}</button>
        ))}
        <button onClick={handleCalculate}>=</button>
         
        </div>
      </div>
      </>
   
  );
}


export default function LoanTypes() {
  // useEffect(() => {
  //   document.body.className = "loan-types-body";
    

  //   return () => {
  //     document.body.className = ""; 
  //   };
  // }, []);

  return (
    <div className="loan-types">
      <Loans />
      <LoansCalc />
    </div>
  );
}





// function LoanCalcs() {
//   return (
//     <div className="loan-calc">
//       <h1>Student Loan Calculator</h1>
//       <form>
//         <label htmlFor="loan-amount">Loan Amount:</label>
//         <input type="number" id="loan-amount" name="loan-amount" required />

//         <label htmlFor="interest-rate">Interest Rate (%):</label>
//         <input type="number" id="interest-rate" name="interest-rate" required />

//         <label htmlFor="loan-term">Loan Term (years):</label>
//         <input type="number" id="loan-term" name="loan-term" required />

//         <button type="submit">Calculate</button>
//       </form>
//     </div>
//   );
// }