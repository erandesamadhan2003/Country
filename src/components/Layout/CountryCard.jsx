import countries from "../../api/CountryData.json"

export const CountryCard = () => {
    return (
        <>
            <h2 className="card-section-heading">Interesting Facts Of Countries</h2>
            <div className="grid grid-three-cols country-card">
                {countries.map((country) => (
                    <div className=" flex container-card bg-green-box" key={country.id}>
                        <h2>{country.country_name}</h2>
                        <p><span>Capital:</span> {country.capital}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Interesting Fact:</span> {country.interesting_fact}</p>
                    </div>
                ))}
            </div>
        </>
    );
};