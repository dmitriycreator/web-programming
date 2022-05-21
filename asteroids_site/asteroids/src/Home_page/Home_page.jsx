import { useState } from "react";
import styles from "./Home_page.css"
import { AsteroidCard } from "../Asteroid_card/AsteroidCard"
import ARMAGEDDON from "./ARMAGGEDON_V.svg"

export const Home_page = () => {

    const Make_Asteroids_List = () =>{
        let monthNames=[
            'января',
            'февраля',
            'марта',
            'апреля',
            'мая',
            'июня',
            'июля',
            'августа',
            'сентября',
            'ноября',
            'декабря',
        ]
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        let list = []
        for(let i = 0; i < 10; i++){
            let year = "20" + (Math.random()*89 + 10).toFixed(0)
            let name = year + ' ' + characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)]
            let date = (Math.random()*27 + 1).toFixed(0) + ' ' + monthNames[(Math.random()*12).toFixed(0)] + ' ' + year + " года"
            let grade = Math.random() < 0.5? "опасен":"не опасен";
            let size = (Math.random() * 100 + 10).toFixed(0)
            let distance = (Math.random() * 9000000 + 1000000).toFixed(0)
            list.push({
                name:name,
                date:date,
                grade:grade,
                size:size,
                distance:distance
            })
        }
        return list;
    }

    //asteroids list
    const [asteroids, setAsteroids] = useState({
        list: Make_Asteroids_List(),
        distanceMode:0,
        showMode:0
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