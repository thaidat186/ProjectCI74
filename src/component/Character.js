import React,{useEffect,useState} from "react";
import CharacterDetail from './CharacterDetail'
import {latestData} from './Data.js'

export default function Character(){
    const[data,setData]= useState(latestData)
    // const fetchData = async()=>{
    //     let response = await fetch('https://6289ef585da6ddfd5d5e04e2.mockapi.io/characters')
    //     response =await response.json()
    //     if (response.length) {
    //         setData(response)
    //     }
    //     console.log(response)

    // }

    // useEffect ( ()=>{
    //     try {
    //         fetchData()
    //     } catch (error) {
    //         console.log("con cac")
    //     }
    // }, [])
    

    return (
        <div>{data.map(item => {return <CharacterDetail key={item.id} item={item} /> })}
           
            
        </div>
    )
}