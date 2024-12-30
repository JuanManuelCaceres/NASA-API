import API_KEY from "@/api-config/api-key";

// const API_KEY=API_KEY; // redundant assignment removed
const API_URI='https://api.nasa.gov/planetary/apod?api_key=';
const API_APOD=`${API_URI}${API_KEY}`;

export default async (urlParams?:string)=>{
    try {
        const response = await fetch(`${API_APOD}${
            typeof urlParams !=='undefined'&& urlParams?.length>0?urlParams:''}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
}