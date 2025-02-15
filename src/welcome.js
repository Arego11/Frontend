import React from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

function Welcome() {
    React.useEffect(() => {
        gsap.to(".fade-in", { opacity: 1, duration: 1.5, stagger: 0.5, ease: "power2.out" });
    }, []);

    return (
        <div>
            <h1 className="fade-in">Welcome </h1>
            <Link to="/signup">
                <button className="fade-in">Sign Up</button>
            </Link>
            <Link to="/login">
                <button className="fade-in">Login</button>
            </Link>
        </div>
    );
}

export default Welcome;