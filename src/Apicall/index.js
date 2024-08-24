import axioInstance from "./instance"
 
export const GetOrders = async (payload) => {
    try {
        const response = await axioInstance.post('api/shopifyOrders',payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
}
 
export const GetCustomers = async () => {
    try {
        const response = await axioInstance.get('api/shopifyCustomers');
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
}
 
export const GetProducts = async () => {
    try {
        const response = await axioInstance.get('api/shopifyProducts');
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
}

export const RepeatCustomers = async (payload) => {
    try {
        const response = await axioInstance.post('api/repeatCustomers',payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
}

export const SalesGrowth = async (payload) => {
    try {
        const response = await axioInstance.post('api/salesGrowthRate',payload);
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
}