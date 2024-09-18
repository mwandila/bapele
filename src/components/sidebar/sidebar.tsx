// components/ui/sidebar.tsx
import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink } from '@/components/ui/nav';
import axios from 'axios';

interface SidebarProps {
  userRole: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // allow any additional props
}

interface SidebarItem {
  href: string;
  label: string;
}

const Sidebar: React.FC<SidebarProps> = ({ userRole, children, className, ...props }) => {
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([]);

  useEffect(() => {
    axios.get(`/api/sidebar-items/${userRole}`)
      .then(response => {
        setSidebarItems(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userRole]);

  return (
    <aside className={`w-64 bg-white p-4 shadow-md ${className}`} {...props}>
      <Nav>
        {sidebarItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink href={item.href} className="text-sm text-gray-500 hover:text-gray-700">
              {item.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      {children}
    </aside>
  );
};

export default Sidebar;
