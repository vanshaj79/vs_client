import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Chart from "react-apexcharts";
import { RepeatCustomers } from "../Apicall";

const RepeatCustomer = () => {
  const [interval, setInterval] = useState("daily");    
  const fetchOrders = async () => {
    const response = await RepeatCustomers({ interval: interval });
    return response.data;
  };

  const {
    data: customers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["customers", interval],
    queryFn: fetchOrders,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const amount = customers.map(({ totalcount, ...rest }) => {
    return totalcount;
  });

  const chartSeries = [
    {
      name: "Series 1",
      data: amount,
    },
  ];

  const chartOptions = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: interval ==="daily" ? [] : interval === "monthly" ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] : ["2022","2023"],
    },
  };

  return (
    <>
      <h1>Repeated Customers Over Time</h1>
      <div className="d-flex gap-3">
        <button
          className="btn btn-primary"
          onClick={() => setInterval("daily")}
        >
          Daily
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setInterval("monthly")}
        >
          Monthly
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setInterval("yearly")}
        >
          Yearly
        </button>
      </div>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        width="500"
      />
    </>
  );
};

export default RepeatCustomer;
