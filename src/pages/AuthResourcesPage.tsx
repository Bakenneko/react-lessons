import {useEffect} from "react";
import {loadAuthProducts} from "../services/api.service.ts";

export const AuthResourcesPage = () => {


    useEffect(() => {
        loadAuthProducts().then(products =>{
            console.log(products)
        })

    }, []);

    return (
        <>
            AuthResourcesPage

        </>
    );
};