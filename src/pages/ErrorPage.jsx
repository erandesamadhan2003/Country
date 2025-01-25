import { useRouteError , NavLink } from "react-router-dom"

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    console.log(error.error.message);
    return (
        <div>
            <h1>Error On page</h1>
            {error && <p>{error.data}</p>}
            <NavLink to="/">
                <button>Go Home</button>
            </NavLink>
        </div>
    ); 
}