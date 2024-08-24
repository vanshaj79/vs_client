import React from 'react'
import TotalSales from './components/TotalSales'
import NewCustomers from './components/NewCustomers'
import RepeatCustomer from './components/RepeatCustomer';
import SalesGrowthRate from './components/SalesGrowthRate';

const Dashboard = () => {
  return (
    <div className="row mx-0">
      <div className="col-6">
        <TotalSales />
      </div>
      <div className="col-6">
        <NewCustomers />
      </div>
      <div className="col-6 mt-4">
        <RepeatCustomer />
      </div>
      <div className="col-6 mt-4">
        <SalesGrowthRate />
      </div>
    </div>
  );
}

export default Dashboard
