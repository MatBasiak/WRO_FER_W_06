import React from "react"
import styles from "./App.scss"
import imageSrc from "./homer.png"

console.log(styles);
const App = () => (

    <div className={styles.app}>
        <img src={imageSrc} alt={"homers head"}/>
        <h1>to jest root aplikacji</h1>
    </div>
);

export default App;