import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "./About";

export const Home = () => {
    return (
        <>  
        <main className="grid grid-two-cols hero-section">
            <div className="flex hero-section-text">
                <h1>Explore the World, One Country at a Time.</h1>
                <p>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
                <button className="hero-section-btn">
                    <p>Start Exploring</p> 
                    <FaArrowRightLong />
                </button>
            </div>

            <div className="hero-section-image">
                <img src="/images/world.png" alt="World Image" />
            </div>
        </main>
        <div className="home-card-section">
            <About />
        </div>
        </>
    );
}