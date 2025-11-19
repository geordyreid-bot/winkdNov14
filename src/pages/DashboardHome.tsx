import React from 'react';
import { Page } from '../types';

interface DashboardHomeProps {
  navigate: (page: Page) => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ navigate }) => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dashboard Home</h1>
      <p className="mt-4 text-brand-text-secondary">Welcome to your WinkDrops dashboard. From here you can access all features.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button onClick={() => navigate('Create Wink')} className="p-6 bg-brand-primary-100 text-brand-primary-800 rounded-lg font-bold text-lg hover:bg-brand-primary-200">
          Create Wink
        </button>
        <button onClick={() => navigate('Create Nudge')} className="p-6 bg-brand-secondary-100 text-brand-secondary-800 rounded-lg font-bold text-lg hover:bg-brand-secondary-200">
          Send a Nudge
        </button>
        <button onClick={() => navigate('Self Check-in')} className="p-6 bg-brand-secondary-100 text-brand-secondary-800 rounded-lg font-bold text-lg hover:bg-brand-secondary-200">
          Self Check-in
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;
