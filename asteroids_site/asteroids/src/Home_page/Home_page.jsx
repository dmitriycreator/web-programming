import { useState } from "react";
import styles from "./Home_page.css"
import { AsteroidCard } from "../Asteroid_card/AsteroidCard"
import ARMAGEDDON from "./ARMAGGEDON_V.svg"

export const Home_page = () => {
    //asteroids list
    const [asteroids, setAsteroids] = useState({
        list:[{name: "2021 FQ", date: "12 сентября 2021", grade: "не опасен", distance: 7235024, size: 85},
            {name: "2021 ER", date: "2 ноября 2021", grade: "не опасен", distance: 9331775, size: 300},
            {name: "2022 QQ", date: "3 матра 2022", grade: "опасен", distance: 2866012, size: 850}],
    });

    const changeShowMode = (e) => {
        setAsteroids({
            ...asteroids,
            showMode: e.target.checked
        })
    }

    const changeDistanceModeToKm = () => {
        setAsteroids({
            ...asteroids,
            distanceMode: 0
        })
    }

    const changeDistanceModeToLunar = () => {
        setAsteroids({
            ...asteroids,
            distanceMode: 1
        })
    }

    return (<div className="Home_page">
        <img src={ARMAGEDDON} className="App-logo" alt="logo" /><br/>
        Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
        <div className={styles.showDangerousOnly}><input type="checkbox" value={asteroids.showMode} onChange={changeShowMode}/> Показать только опасные</div>
        <div className={styles.distanceMode}>
        Расстояние <button onClick={changeDistanceModeToKm} className ={styles.distanceChooser + " " + (asteroids.distanceMode===0?styles.activeMode:"")}>в километрах</button>
        , <button onClick={changeDistanceModeToLunar} className={styles.distanceChooser + " " + (asteroids.distanceMode===1?styles.activeMode:"")}> в дистанциях до луны</button></div>
        {(asteroids.showMode === 0)?
            asteroids.list.map((item)=><div>
                <AsteroidCard name={item.name} grade={item.grade} date={item.date}
                              distance={item.distance} size={item.size} distanceMode={asteroids.distanceMode}/>
            </div>):
            asteroids.list.filter((item)=>item.grade==="опасен").map((item)=><div>
                <AsteroidCard name={item.name} grade={item.grade} date={item.date}
                              distance={item.distance} size={item.size} distanceMode={asteroids.distanceMode}/>
            </div>)}
    </div>);
}