import axios, { AxiosInstance } from 'axios';

const quoteClient: AxiosInstance = axios.create({
    baseURL: 'https://animechan.vercel.app/api/quotes'
});

export default quoteClient;