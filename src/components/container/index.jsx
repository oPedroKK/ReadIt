import { useEffect } from "react";

function Container({ children }) {

    useEffect(() => {
        const changeNav = () => {
            const navColor = document.querySelector(".header_nav");
            if (window.scrollY === 0) {
                navColor.style.backgroundColor = "#FFEEB800";
            } else {
                navColor.style.backgroundColor = "#00a63e";
            }
        };

        window.addEventListener("scroll", changeNav);

        return () => {
            window.removeEventListener("scroll", changeNav);
        }
    })

    return (
        <div className="w-screen">
            {
                children
            }
        </div>
    )
}

export default Container;