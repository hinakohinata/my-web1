import axios from "axios"

const domain = "https://63d965735a330a6ae17b071f.mockapi.io"
export const callAPI = async (path, method, data = {}) => {
    try {
        if (method === "GET") {
            const response = await axios.get(domain + path//domain+ path + method
            )
            if (response.status === 200) {
                return response.data;
            }
        }else if(method==="POST"){}
        return;
    } catch (error) {
        console.log("Error call API")
    }
}