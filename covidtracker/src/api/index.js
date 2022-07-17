import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlDaily = "https://covid19.mathdro.id/api/daily";
const urlCountries = "https://covid19.mathdro.id/api/countries";
const urlCountry = "https://covid19.mathdro.id/api/countries/[country]";

export const fetchData = async (country)=> {
    let finalUrl = '';
    if(country){
        finalUrl = urlCountries + '/' + country
    }else{
        finalUrl = url
    }

    try {
        const {data: { confirmed, deaths, recovered, lastUpdate }} = await axios.get(finalUrl);
        return {confirmed, deaths, recovered, lastUpdate}

    } catch (error) {
        console.log(error)
    }

}

export const fetchDailyData =async ()=> {
        try {
         const {data} = await axios.get(urlDaily);   

         const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
         }));
         return modifiedData;
        } catch (error) {
            
        }
}

export const countryList = async ()=> {
    try {
        const {data: {countries} } = await axios.get(urlCountries)
        return countries.map((country) => country.name);
        // return countries;
    } catch (error) {
        
    }
}