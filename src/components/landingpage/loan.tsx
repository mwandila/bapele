
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const LoanApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(500);
  const [months, setMonths] = useState(1);
  const [loanType, setLoanType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const calculateFees = () => {
    const serviceFee = Math.min(50, amount * 0.05);
    const amountReceived = amount - serviceFee;
    const monthlyInterestRate = 0.015; // 1.5% monthly interest
    const totalInterest = amount * monthlyInterestRate * months;
    const repayment = amount + totalInterest;
    const monthlyRepayment = repayment / months;
    return { serviceFee, amountReceived, repayment, monthlyRepayment };
  };

  const { serviceFee, amountReceived, repayment, monthlyRepayment } = calculateFees();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log({ amount, months, loanType, name, email });
    // Handle form submission logic here
  };

  const handleAmountChange = (e: { target: { value: string; }; }) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(Math.min(value, 10000)); // Set a maximum loan amount of 10,000
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader>
              <h2 className="text-2xl font-bold">Loan Amount and Duration</h2>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Label htmlFor="amount">How much would you like?</Label>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">K</span>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    min="0"
                    max="10000"
                    step="10"
                    className="text-lg font-semibold"
                  />
                </div>
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
                <span className="text-lg font-semibold">{months} month{months > 1 ? 's' : ''}</span>
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader>
              <h2 className="text-2xl font-bold">Loan Type</h2>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={setLoanType} className="space-y-2">
                {['Civil Servant Loan','Collateral Backed Loan', 'Business Loan'].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader>
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader>
              <h2 className="text-2xl font-bold">Loan Summary</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Loan Amount</span>
                  <span>K{amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan Duration</span>
                  <span>{months} month{months > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loan Type</span>
                  <span>{loanType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Fee</span>
                  <span>K{serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Amount You Receive</span>
                  <span>K{amountReceived.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Repayment</span>
                  <span>K{repayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Repayment</span>
                  <span>K{monthlyRepayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Next Payment Date</span>
                  <span>{new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Progress value={(step / 4) * 100} className="mb-4" />
      <Card>
        {renderStep()}
        <CardFooter className="flex justify-between">
          {step > 1 && (
            <Button onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {step < 4 ? (
            <Button onClick={nextStep} className="bg-blue-500 hover:bg-blue-600 text-white">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600 text-white">
              Submit Application
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoanApplicationForm;