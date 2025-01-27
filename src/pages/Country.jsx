import { useEffect, useState, useTransition } from "react";
import { CountryData } from "../api/CountryApi";
import { CountryInfoCard } from "../components/Layout/CountryInfoCard";


export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const response = await CountryData();
            setCountries(response.data);
        })
    },[]);

    if(isPending) return <h1>Loading.......</h1>
    return (
        <section className="country-section">
            <ul className="grid grid-four-cols card-layout">
                 {countries.map((currCountry, index) => {
                    return <CountryInfoCard country = {currCountry} Key = {index}/>
                 })}
            </ul>
        </section>
    );
}