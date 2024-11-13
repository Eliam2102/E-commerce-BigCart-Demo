import axiosInstance from "../Api/axiosConfig";


export const obtenerProductos = async () => {
    const response = await axiosInstance.get('/productos');
    console.log('Response completa:', response.data);
    return response.data;
}