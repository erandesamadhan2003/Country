import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/CountryApi";

export const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [country, setCountry] = useState();

    useEffect(() => {
        console.log("Country ID from URL:", params.id);
        startTransition(async () => {
            try {
                const res = await getCountryIndData(encodeURIComponent(params.id));
                console.log("API Response:", res.data);
                if (res.status === 200 && res.data.length > 0) {
                    setCountry(res.data[0]);
                } else {
                    console.error("Country not found:", params.id);
                }
            } catch (error) {
                console.error("Error fetching country details:", error);
            }
        });
    }, [params.id]);

    if (!country) {
        return (
            <section className="card country-details-card container">
                <p>Country details not available. Please try again later.</p>
                <NavLink to="/country" className="backBtn">
                    <button>Go Back</button>
                </NavLink>
            </section>
        );
    }

    if (isPending) return <p>Loading...</p>;

    return (
        <section className="card country-details-card container">
            <div className="container-card bg-green-box btn-adjust">
                <div className="country-image grid grid-two-cols">
                    <img src={country.flags.svg} alt={country.flags.alt} className="flag" />
                    <div className="country-content">
                        <p className="card-title">{country.name.official}</p>
                        <div className="infoContainer">
                            <p>
                                <span className="card-description">Native Names:</span>
                                {Object.keys(country.name.nativeName)
                                    .map((key) => country.name.nativeName[key].common)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description">Population:</span>{" "}
                                {country.population.toLocaleString()}
                            </p>
                            <p>
                                <span className="card-description">Region:</span> {country.region}
                            </p>
                            <p>
                                <span className="card-description">Sub Region:</span>{" "}
                                {country.subregion}
                            </p>
                            <p>
                                <span className="card-description">Capital:</span> {country.capital}
                            </p>
                            <p>
                                <span className="card-description">Top Level Domain:</span>{" "}
                                {country.tld[0]}
                            </p>
                            <p>
                                <span className="card-description">Currencies:</span>{" "}
                                {Object.keys(country.currencies)
                                    .map((curElem) => country.currencies[curElem].name)
                                    .join(", ")}
                            </p>
                            <p>
                                <span className="card-description">Languages:</span>{" "}
                                {Object.keys(country.languages)
                                    .map((key) => country.languages[key])
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                </div>
                <NavLink to="/country" className="backBtn">
                    <button>Go Back</button>
                </NavLink>
            </div>
        </section>
    );
};
