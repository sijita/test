import axios from "axios"
import { useEffect, useState } from "react"
import UserContext from "../context/AuthContext";
import { useContext } from "react";

const baseUrl = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/getproducts'

export const useProducts = () => {

    const {credentials} = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState(null) 

    useEffect(() =>{
        axios.post(baseUrl, {
            userToken: JSON.parse(credentials.data).userToken
        })
        .then((res) => {
            setProducts(JSON.parse(res.data.data))
            setIsLoading(false)
        })
    }, [credentials])

    return (
        {isLoading, products}
    )
}