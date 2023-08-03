import { AxiosResponse } from "axios";
import services from "..";

const ServiceProducts = {
    async fetchProducts(): Promise<Product[]> {
        try {
            const response: AxiosResponse<Product[]> = await services.get('/products')
            return response.data
        } catch (error) {
            throw new Error('Error fetching user data: ' + error);
        }
    }
}

export default ServiceProducts