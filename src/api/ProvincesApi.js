import axios from "axios";

export const ProvincesApi = async ()=>{
    let result = null;
    try {
        result = (await axios.get('https://provinces.open-api.vn/api/?depth=2')).data;
    } catch (e) {
        console.log(" API error: " + e);
    }
    return result;
}