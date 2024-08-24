import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Chart from "react-apexcharts";
import { GetOrders } from "../Apicall";

const TotalSales = () => {
  const [interval, setInterval] = useState("daily");
  const fetchOrders = async () => {
    const response = await GetOrders({ interval: interval });
    return response.data;
  };

  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders", interval],
    queryFn: fetchOrders,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const amount = orders.map(({ totalAmount, ...rest }) => {
    return totalAmount;
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
  console.log(orders,"orders")

  
  console.log(amount,"amount")
  return (
    <>
      <h1>Total Sales Growth OverTime</h1>
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

export default TotalSales;
