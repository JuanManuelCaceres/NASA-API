const API_KEY='Mhz8tp3BdgjfCvb3gE0iaEeQMMPo9LmvU2O14f9y';
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