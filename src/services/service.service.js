import axios from "./axios";

class Service {
    async getAll() {
        try {
            let { data } = await axios.get(`/services`);
            return data;
        } catch (error) {
            if (error.response && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Failed to fetch Servies");
            }
        }
    }
    async getSingleService(serviceId) {
        try {
            const token = sessionStorage.getItem('token') || null;
            let { data } = await axios.get(`/services/${serviceId}`, {
                headers: { "Authorization": `Bearer ${token}` }
            });
            return data;
        } catch (error) {
            if (error.response && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Failed to fetch service");
            }
        }
    }
    async createService(serviceData) {
        try {
            const token = sessionStorage.getItem('token') || null;
            let { data } = await axios({
                method: 'post',
                url: `/services`,
                data: serviceData,
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return data;
        } catch (error) {
            if (error.response && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Failed to add service");
            }
        }
    }
    async editService(productId, serviceData) {
        try {
            const token = sessionStorage.getItem('token') || null;
            let { data } = await axios({
                method: 'put',
                url: `/services/${productId}`,
                data: serviceData,
                headers: {
                    'Content-Type': "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            return data
        } catch (error) {
            if (error.response && error.response.data.error) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Failed to update service");
            }
        }
    }

    async deleteService(id) {
        try {
            const token = sessionStorage.getItem('token') || null;
            let { data } = await axios.delete(`/services/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
            });
            return data;
        } catch (error) {
            throw new Error(`error in Admin deletService`)
        }
    }

}

// eslint-disable-next-line 
export default new Service;
