import axios from "axios";

const URL = ""

const saveFormData = async() => {
    try {
        const response = await axios.post(URL)
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default{
    saveFormData
}