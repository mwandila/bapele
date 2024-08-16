 "use client"

import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LoanApplicationForm = () => {
  const [amount, setAmount] = useState(500);
  const [months, setMonths] = useState(1);
  const [loanType, setLoanType] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ amount, months, loanType });
  };

  const calculateFees = () => {
    const serviceFee = 50;
    const amountReceived = amount - serviceFee;
    const repayment = amount + (amount * 0.1); // Simple 10% interest calculation
    return { serviceFee, amountReceived, repayment };
  };

  const { serviceFee, amountReceived, repayment } = calculateFees();

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <Label>How much would you like?</Label>
        <Slider
          value={[amount]}
          onValueChange={(value) => setAmount(value[0])}
          max={1000}
          step={10}
          className="my-2"
        />
        <span className="text-lg font-semibold">{amount}</span>
      </div>

      <div className="mb-4">
        <Label>For how many months?</Label>
        <Slider
          value={[months]}
          onValueChange={(value) => setMonths(value[0])}
          max={12}
          step={1}
          className="my-2"
        />
        <span className="text-lg font-semibold">{months}</span>
      </div>

      <div className="mb-4">
        <Label>What type of loan would you like?</Label>
        <RadioGroup onValueChange={setLoanType} className="mt-2">
          {['Civil Servant Loan', 'Agri Loan', 'Scheme Loan', 'Collateral Backed Loan', 'Business Loan', 'Buy Now Pay Later'].map((type) => (
            <div key={type} className="flex items-center space-x-2">
              <RadioGroupItem value={type} id={type} />
              <Label htmlFor={type}>{type}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mb-4">
        <div className="flex justify-between">
          <span>Service Fee</span>
          <span>K{serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Amount You Receive</span>
          <span>K{amountReceived.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Repayment</span>
          <span>K{repayment.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Next Payment Date</span>
          <span>{new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
        </div>
      </div>

      <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
        APPLY
      </Button>
    </form>
  );
};

export default LoanApplicationForm;