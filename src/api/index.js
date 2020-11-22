import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData =async (country)=>{
    let changable = url;
    if(country){
        changable = `${url}/countries/${country}`
    }
    try{
    const {data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changable);
    const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate
    }
    return modifiedData;
}
    catch(error){
        console.log(error)
    }
}

export const fetchDailyData = async()=>{
    try{
        const {data} = await axios.get(`${url}/daily`);
        const dataChart = data.map((dailyData)=>({
            confirmed:dailyData.confirmed.total,
            deaths:dailyData.deaths.total,
            date:dailyData.reportDate
        }));
        return dataChart;
    }
    catch(error){
    }
}

export const countryFetchData = async()=>{
    try{
        const {data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country) => country.name)
    }
    catch(error){
        console.log(error)
    }
}