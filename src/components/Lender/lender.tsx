"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { DollarSign, TrendingUp, BellRing } from 'lucide-react';

const Lender = () => {
  const [newLoanAmount, setNewLoanAmount] = useState('');
  const [newLoanRate, setNewLoanRate] = useState('');

  const overviewData = {
    availableFunds: 100000,
    activeLoans: 5,
    interestEarned: 2500
  };

  const loanData = [
    { id: 1, amount: 10000, status: 'Active', performance: 'On time' },
    { id: 2, amount: 15000, status: 'Paid', performance: 'Completed' },
    { id: 3, amount: 5000, status: 'Defaulted', performance: 'Late' },
  ];

  const notifications = [
    { id: 1, message: 'Upcoming repayment for Loan #1 due in 3 days' },
    { id: 2, message: 'New loan application received from Borrower #123' },
  ];

  return (
    <Card className="w-full max-w-4x4 bg-white rounded-lg shadow-md p-6">
      <CardHeader className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold flex items-center text-blue-500"><DollarSign className="mr-2" /> Lender Dashboard</h2>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-green-500">Overview</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-blue-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Available Funds</p>
                  <p className="text-2xl font-bold text-blue-500">K{overviewData.availableFunds}</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Active Loans</p>
                  <p className="text-2xl font-bold text-orange-500">{overviewData.activeLoans}</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Interest Earned</p>
                  <p className="text-2xl font-bold text-purple-500">K{overviewData.interestEarned}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Management */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-red-500">Loan Management</h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm text-gray-500">Loan ID</TableHead>
                  <TableHead className="text-sm text-gray-500">Amount</TableHead>
                  <TableHead className="text-sm text-gray-500">Status</TableHead>
                  <TableHead className="text-sm text-gray-500">Performance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanData.map((loan) => (
                  <TableRow key={loan.id} className="border-b border-gray-200">
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{loan.id}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">K{loan.amount}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{loan.status}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{loan.performance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 space-y-2">
              <h4 className="font-semibold text-yellow-500">Create New Loan Offer</h4>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  value={newLoanAmount}
                  onChange={(e) => setNewLoanAmount(e.target.value)}
                  placeholder="Loan Amount"
                  className="py-2 pl-10 text-sm text-gray-700"
                />
                <Input
                  type="number"
                  value={newLoanRate}
                  onChange={(e) => setNewLoanRate(e.target.value)}
                  placeholder="Interest Rate (%)"
                  className="py-2 pl-10 text-sm text-gray-700"
                />
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Offer</Button>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-teal-500">Loan Performance Analytics</h4>
              <p className="text-sm text-gray-500">Default Rate: 5%</p>
              <p className="text-sm text-gray-500">Repayment Rate: 95%</p>
            </div>
          </section>

          {/* Notifications */}
          <section>
            <h3 className="text-xl font-semibold mb-2 flex items-center text-pink-500">
              <BellRing className="mr-2" /> Notifications
            </h3>
            {notifications.map((notification) => (
              <Alert key={notification.id} className="mb-2">
                <AlertTitle className="text-sm text-gray-500">New Notification</AlertTitle>
                <AlertDescription className="text-sm text-gray-500">{notification.message}</AlertDescription>
              </Alert>
            ))}
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default Lender;
