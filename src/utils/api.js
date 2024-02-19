import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: 'AIzaSyDVMPqX7f3NwXuy0bw1QFV22Nrmaj355lA',
    cx: 'a0630235d54b8437e',
}
export const fetchDataFromApi = async(payload) => {
   const {data} = await axios.get(BASE_URL,{
       params: {...params, ...payload},
   })
   return data;
};




