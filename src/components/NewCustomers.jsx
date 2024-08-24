import { useQuery } from "@tanstack/react-query";
import Chart from "react-apexcharts";
import { GetCustomers } from "../Apicall";

const NewCustomers = () => {
  const fetchOrders = async () => {
    const response = await GetCustomers();
    return response.data;
  };

  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const amount = orders.map(({ count, ...rest }) => {
    return count;
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
      categories: [],
    },
  };

  return (
    <>
      <h1>New Customers Added Over Time</h1>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        width="500"
      />
    </>
  );
};

export default NewCustomers;
