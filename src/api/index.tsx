import axios from "axios";

export const api = () => {

    const URL_API = axios.create({
        baseURL: 'http://localhost:3001'
    })

    
  return {URL_API}
}


