import { useState, useRef, useEffect } from "react";
import styles from "../styles/Home.module.css";
import levelOneStyles from "../styles/levelOne.module.css";

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const maskDivRef = useRef(null);
    // console.log(maskDivRef.current.offsetHeight)

    useEffect(() => {
        const setFromEvent = (e) =>
            setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);
        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    });
// ! look info the radial gradient see through image 
// ? https://css-tricks.com/almanac/properties/m/mask-position/#:~:text=In%20CSS%2C%20the%20mask%2Dposition,like%20the%20background%2Dposition%20property.&text=Masking%20allows%20you%20to%20display,element%20while%20hiding%20the%20rest.
    return (
        <div className={styles.container}>
            <div
                className={levelOneStyles.blackOverlay}
                style={{
                  backgroundImage: "url('https://picsum.photos/200/300')",
                    WebkitMaskImage: "radial-gradient(red 10px, yellow 30%, #1e90ff 50%)",
                    WebkitMaskSize: "150px 150px",
                    WebkitMaskPosition: `${mousePosition.x - 75}px ${mousePosition.y - 75}px`,
                    WebkitMaskRepeat: "no-repeat",
                }}
            ></div>
            Youv'e entered a dark room.
           
            `{mousePosition.x} {mousePosition.y}`
        </div>
    );
}
