import axios, { Axios } from 'axios';
export async function getItems(Name){
    const URL=`https://itunes.apple.com/search?term=${Name}&limit=25.`
    const response = await axios.get(URL);
    console.log(response.data['results']);
    return response.data['results'];
}

export const apiClient={
    get(){

    },    
    async post(URL,data){
        try{
            const response = await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){

    }
}