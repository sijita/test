import axios from "axios"

const baseUrl = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate/login'

const login = async credentials => {
    const { data } = await axios.post(baseUrl, credentials)
    return data
}

export default { login }