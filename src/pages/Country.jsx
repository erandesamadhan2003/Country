import { useEffect, useState, useTransition } from "react";
import { CountryData } from "../api/CountryApi";
import { CountryInfoCard } from "../components/Layout/CountryInfoCard";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]); 
    const [searchCountries, setSearchCountries] = useState(""); 
    const [filterCountries, setFilterCountries] = useState("all"); 

    useEffect(() => {
        startTransition(async () => {
            const response = await CountryData();
            setCountries(response.data);
        });
    }, []);

    const searchCountry = (country) => {
        if (searchCountries) {
            return country.name.common.toLowerCase().includes(searchCountries.toLowerCase());
        }
        return true; 
    };

    const filterRegion = (country) => {
        if (filterCountries === "all") return true; 
        return country.region.toLowerCase() === filterCountries.toLowerCase(); 
    };

    const filteredCountries = countries.filter((country) => {
        return searchCountry(country) && filterRegion(country);
    });

    if (isPending) return <h1>Loading.......</h1>;

    return (
        <section className="country-section">
            <SearchFilter
                searchCountries={searchCountries}
                setSearchCountries={setSearchCountries}
                filterCountries={filterCountries}
                setFilterCountries={setFilterCountries}
            />
            <ul className="grid grid-four-cols card-layout">
                {filteredCountries.map((currCountry, index) => {
                    return <CountryInfoCard country={currCountry} key={index} />;
                })}
            </ul>
        </section>
    );
};

const SearchFilter = ({ searchCountries, setSearchCountries, filterCountries, setFilterCountries }) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchCountries(event.target.value); 
    };

    const handleSelectChange = (event) => {
        event.preventDefault();
        setFilterCountries(event.target.value); 
    };

    return (
        <section className="search-filter flex">
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchCountries}
                    onChange={handleInputChange}
                    className="search-input"
                />
            </div>
            <div>
                <select
                    className="select-section"
                    value={filterCountries}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    );
};
