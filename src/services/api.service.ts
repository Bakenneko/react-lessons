import axios from "axios";
import {IUserWithTokens} from "../models/auth/IUserWithTokens.ts";
import {IProduct} from "../models/auth/IProduct.ts";
import {IProductsResponseModelType} from "../models/auth/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";

type LoginData = {
    username: string;
    password: string;
    expireInMins: number
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject)=>{
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;
})


export const login = async ({username,password,expireInMins}:LoginData): Promise<IUserWithTokens> => {
    const {data:userWithTokens}= await axiosInstance.post<IUserWithTokens>('/login',{username,password,expireInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async ():Promise<IProduct[]> => {
    const {data: {products}}= await axiosInstance.get<IProductsResponseModelType>('/products');
    return products
}