import axios from "axios";
import {IUserWithTokens} from "../models/auth/IUserWithTokens.ts";



const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

type LoginData = {
    username: string;
    password: string;
    expireInMins: number
}

export const login = async ({username,password,expireInMins}:LoginData) => {
    const {data:userWithTokens}= await axiosInstance.post<IUserWithTokens>('/login',{username,password,expireInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
}