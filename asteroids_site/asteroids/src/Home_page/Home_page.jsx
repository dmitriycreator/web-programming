import { useEffect, useState } from "react";
import styles from "./Home_page.css"
import { AsteroidCardList } from "../Ateroid_list/List"
import ARMAGEDDON from "./ARMAGGEDON_V.svg"
import { Navbar } from "../Navbar/Navbar";
import {GetAPIUrl, ConvertAPIDataToList} from "./Parser";
import { ASTEROID_DISTANCE_MODE_KM, ASTEROID_SHOW_MODE_ALL } from "../Constants/Constants_list"

    export const Home = () => {
        const [asteroidsList, setAsteroidsList] = useState([{
            name:"loading...",
            date:"loading...",
            grade:"loading...",
            size:0,
            distance:0
        }])
        const [showParams, setShowParams] = useState({
            distanceMode: ASTEROID_DISTANCE_MODE_KM,
            showMode: ASTEROID_SHOW_MODE_ALL
        })


        useEffect(()=>{
            fetch(GetAPIUrl())
                .then((response)=>response.json()
                    .then((resData)=>{
                        setAsteroidsList(ConvertAPIDataToList(resData))
                    })).catch((error)=>console.log(error))
        }, [])

        return <div className={styles.home}>
            <Navbar showParams={showParams} setShowParams={setShowParams} />
            <AsteroidCardList list={asteroidsList} showParams={showParams} />
        </div>
}