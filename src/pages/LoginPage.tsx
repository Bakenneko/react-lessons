import {useEffect} from "react";
import {login} from "../services/api.service.ts";

export const LoginPage = () => {
    useEffect(() => {
        login({
            username: "emilys",
            password: "emilyspass",
            expireInMins: 1
        });
    }, []);
    return (
        <>

            login Page

        </>
    );
};