// pages/dashboard.tsx
import React from 'react';
import Sidebar from '../sidebar/sidebar';

interface DashboardProps {
  userRole: string;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole }) => {
  return (
    <div className="flex h-screen">
      <Sidebar userRole={userRole}>
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <p className="text-sm text-gray-500">Welcome to the dashboard!</p>
      </Sidebar>
      <main className="flex-1 p-4">
        {/* Page content here */}
      </main>
    </div>
  );
};

export default Dashboard;
