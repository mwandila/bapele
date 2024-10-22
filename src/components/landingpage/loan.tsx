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
    const monthlyInterestRate = 0.015;
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
  };

  const handleAmountChange = (e: { target: { value: string; }; }) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAmount(Math.min(value, 10000));
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold">Loan Amount and Duration</h2>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="mb-6">
                <Label htmlFor="amount" className="text-sm sm:text-base">How much would you like?</Label>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-base sm:text-lg font-semibold">K</span>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    min="0"
                    max="10000"
                    step="10"
                    className="text-base sm:text-lg font-semibold"
                  />
                </div>
              </div>
              <div className="mb-4">
                <Label className="text-sm sm:text-base">For how many months?</Label>
                <div className="px-2 mt-2">
                  <Slider
                    value={[months]}
                    onValueChange={(value) => setMonths(value[0])}
                    max={12}
                    step={1}
                    className="my-4"
                  />
                </div>
                <span className="text-base sm:text-lg font-semibold">{months} month{months > 1 ? 's' : ''}</span>
              </div>
            </CardContent>
          </>
        );
      case 2:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold">Loan Type</h2>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <RadioGroup onValueChange={setLoanType} className="space-y-4">
                {['Civil Servant Loan', 'Collateral Backed Loan', 'Business Loan'].map((type) => (
                  <div key={type} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                    <RadioGroupItem value={type} id={type} />
                    <Label htmlFor={type} className="text-sm sm:text-base cursor-pointer">{type}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </>
        );
      case 3:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold">Personal Information</h2>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>
            </CardContent>
          </>
        );
      case 4:
        return (
          <>
            <CardHeader className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold">Loan Summary</h2>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-3 text-sm sm:text-base">
                {[
                  ['Loan Amount', `K${amount.toFixed(2)}`],
                  ['Loan Duration', `${months} month${months > 1 ? 's' : ''}`],
                  ['Loan Type', loanType],
                  ['Service Fee', `K${serviceFee.toFixed(2)}`],
                  ['Amount You Receive', `K${amountReceived.toFixed(2)}`],
                  ['Total Repayment', `K${repayment.toFixed(2)}`],
                  ['Monthly Repayment', `K${monthlyRepayment.toFixed(2)}`],
                  ['Next Payment Date', new Date(Date.now() + months * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()]
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-1 border-b border-gray-100">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-6">
      <Progress value={(step / 4) * 100} className="mb-6" />
      <Card className="shadow-lg">
        {renderStep()}
        <CardFooter className="p-4 sm:p-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          {step > 1 && (
            <Button 
              onClick={prevStep} 
              variant="outline"
              className="w-full sm:w-auto"
            >
              Previous
            </Button>
          )}
          {step < 4 ? (
            <Button 
              onClick={nextStep} 
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white"
            >
              Next
            </Button>
          ) : (
            <Button 
              onClick={handleSubmit} 
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white"
            >
              Submit Application
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoanApplicationForm;