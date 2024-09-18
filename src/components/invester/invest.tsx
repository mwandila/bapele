
"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, PieChart } from 'lucide-react';

const Investor = () => {
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [selectedRisk, setSelectedRisk] = useState('');

  const overviewData = {
    totalInvested: 100000,
    portfolioPerformance: '+7.5%',
    expectedReturns: 7500
  };

  const investmentOpportunities = [
    { id: 1, amount: 5000, interestRate: '5%', term: '12 months', risk: 'Low' },
    { id: 2, amount: 10000, interestRate: '7%', term: '24 months', risk: 'Medium' },
    { id: 3, amount: 15000, interestRate: '9%', term: '36 months', risk: 'High' },
  ];

  const performanceData = [
    { month: 'Jan', roi: 5 },
    { month: 'Feb', roi: 7 },
    { month: 'Mar', roi: 6 },
    { month: 'Apr', roi: 8 },
    { month: 'May', roi: 9 },
    { month: 'Jun', roi: 7 },
  ];

  return (
    <Card className="w-full max-w-4x4 bg-white rounded-lg shadow-md p-6">
      <CardHeader className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-bold flex items-center text-blue-500"><TrendingUp className="mr-2" /> Investor Dashboard</h2>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          {/* Overview Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-green-500">Overview</h3>
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-blue-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Total Invested</p>
                  <p className="text-2xl font-bold text-blue-500">K{overviewData.totalInvested}</p>
                </CardContent>
              </Card>
              <Card className="bg-orange-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Portfolio Performance</p>
                  <p className="text-2xl font-bold text-orange-500">{overviewData.portfolioPerformance}</p>
                </CardContent>
              </Card>
              <Card className="bg-purple-100 p-4 rounded-lg">
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500">Expected Returns</p>
                  <p className="text-2xl font-bold text-purple-500">K{overviewData.expectedReturns}</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Investment Opportunities */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-red-500">Investment Opportunities</h3>
            <div className="space-y-2 mb-4">
              <Select onValueChange={setSelectedRisk}>
                <SelectTrigger className="w-full py-2 pl-10 text-sm text-gray-700">
                  <SelectValue placeholder="Select Risk Level" />
                </SelectTrigger>
                <SelectContent className="bg-white shadow-md p-2">
                  {investmentOpportunities.map((opportunity) => (
                    <SelectItem key={opportunity.id} value={opportunity.risk} className="py-2 pl-10 text-sm text-gray-700 hover:bg-gray-100">
                      {opportunity.risk}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Table className="w-full">
                <TableHead>
                  <TableRow>
                    <TableHeader className="text-sm text-gray-500">Amount</TableHeader>
                    <TableHeader className="text-sm text-gray-500">Interest Rate</TableHeader>
                    <TableHeader className="text-sm text-gray-500">Term</TableHeader>
                    <TableHeader className="text-sm text-gray-500">Risk</TableHeader>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {investmentOpportunities
                    .filter((opportunity) => opportunity.risk === selectedRisk)
                    .map((opportunity) => (
                      <TableRow key={opportunity.id} className="border-b border-gray-200">
                        <TableCell className="py-2 pl-10 text-sm text-gray-700">K{opportunity.amount}</TableCell>
                        <TableCell className="py-2 pl-10 text-sm text-gray-700">{opportunity.interestRate}</TableCell>
                        <TableCell className="py-2 pl-10 text-sm text-gray-700">{opportunity.term}</TableCell>
                        <TableCell className="py-2 pl-10 text-sm text-gray-700">{opportunity.risk}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Performance Chart */}
          <section>
            <h3 className="text-xl font-semibold mb-2 text-yellow-500">Performance Chart</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="roi" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </CardContent>
    </Card>
  );
};

export default Investor;
