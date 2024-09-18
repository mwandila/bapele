
"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Users, Calendar } from 'lucide-react';

const Borrower = () => {
  const [newLoanAmount, setNewLoanAmount] = useState('');

  const overviewData = {
    totalBorrowed: 50000,
    remainingBalance: 30000,
    nextPaymentDue: '2024-09-15'
  };

  const loanApplications = [
    { id: 1, amount: 10000, status: 'Pending' },
    { id: 2, amount: 15000, status: 'Approved' },
    { id: 3, amount: 5000, status: 'Rejected' },
  ];

  const repaymentSchedule = [
    { id: 1, dueDate: '2024-09-15', amount: 1000 },
    { id: 2, dueDate: '2024-10-15', amount: 1000 },
    { id: 3, dueDate: '2024-11-15', amount: 1000 },
  ];

  return (
    <Card className="w-full max-w-4x4 bg-white rounded-lg shadow-md p-6">
      <CardHeader className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold flex items-center text-blue-500"><Users className="mr-2" /> Borrower Dashboard</h2>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-green-500">Overview</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-blue-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Total Borrowed</p>
                  <p className="text-2xl font-bold text-blue-500">K{overviewData.totalBorrowed}</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Remaining Balance</p>
                  <p className="text-2xl font-bold text-orange-500">K{overviewData.remainingBalance}</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Next Payment Due</p>
                  <p className="text-2xl font-bold text-purple-500">{overviewData.nextPaymentDue}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Loan Applications */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-red-500">Loan Applications</h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm text-gray-500">Application ID</TableHead>
                  <TableHead className="text-sm text-gray-500">Amount</TableHead>
                  <TableHead className="text-sm text-gray-500">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanApplications.map((application) => (
                  <TableRow key={application.id} className="border-b border-gray-200">
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{application.id}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">K{application.amount}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{application.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <div className="mt-4 space-y-2">
              <h4 className="font-semibold text-yellow-500">Apply for New Loan</h4>
              <div className="flex space-x-2">
                <Input
                  type="number"
                  value={newLoanAmount}
                  onChange={(e) => setNewLoanAmount(e.target.value)}
                  placeholder="Loan Amount"
                  className="py-2 pl-10 text-sm text-gray-700"
                />
                <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply</Button>
              </div>
            </div>
          </section>

          {/* Repayment Schedule */}
          <section>
            <h3 className="text-xl font-semibold mb-2 flex items-center text-teal-500">
              <Calendar className="mr-2" /> Repayment Schedule
            </h3>
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-sm text-gray-500">Payment ID</TableHead>
                  <TableHead className="text-sm text-gray-500">Due Date</TableHead>
                  <TableHead className="text-sm text-gray-500">Amount</TableHead>
                  <TableHead className="text-sm text-gray-500">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {repaymentSchedule.map((payment) => (
                  <TableRow key={payment.id} className="border-b border-gray-200">
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{payment.id}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">{payment.dueDate}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">K{payment.amount}</TableCell>
                    <TableCell className="py-2 pl-10 text-sm text-gray-700">
                      <Button variant="outline" size="sm" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Pay Early</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>

          {/* Loan Progress */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-pink-500">Loan Progress</h3>
            <Progress value={60} className="w-full bg-blue-500" />
            <p className="text-sm text-gray-500 mt-2">60% of total loan repaid</p>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default Borrower;
