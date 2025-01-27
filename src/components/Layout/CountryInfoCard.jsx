import { NavLink } from "react-router-dom";

export const CountryInfoCard = ({ country }) => {
    const { flags, name, population, region, capital } = country;

    return (
        <li className="country-card card">
            <div className="container-card bg-green-box">
                <img src={flags.svg} alt={flags.alt} />
                <div className="countryInfo">
                    <p className="card-title">
                        {name.common.length > 18 ? name.common.slice(0, 18) + "..." : name.common}
                    </p>
                    <p>
                        <span>Population:</span> {population.toLocaleString()}
                    </p>
                    <p>
                        <span>Region:</span> {region}
                    </p>
                    <p>
                        <span>Capital:</span> {capital[0]}
                    </p>
                </div>
                <NavLink to={`/country/${encodeURIComponent(name.common)}`} className="backBtn">
                    <button>Read More</button>
                </NavLink>
            </div>
        </li>
    );
};
