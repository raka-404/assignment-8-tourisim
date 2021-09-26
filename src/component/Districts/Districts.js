import React, { useEffect, useState } from 'react';
import District from '../District/District';
import Names from '../Names/Names';
import './Districts.css'

// main districts components 
const Districts = () => {

    // using use states hook here for multi purpuses 

    const [districts,setDistircts] = useState([])
    const [names,setNames] = useState([])
    const [populations,setPopulation] = useState([])


    // using use effect hook for getting data from json 

    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setDistircts(data))
    },[])



    // getting previous data and current data by clicking button

    const addToCart = (name,population) =>{
        const newNames = [...names,name]
        const newPopulations = [...populations,population]
        setNames(newNames);
        setPopulation(newPopulations)
    }

    return (
        <div className="districts">
            {/* districts container here  */}
            <div className="districts_container">

                {/* used map  */}

            {
                districts.map(district => <District key={district.code} addToCart={addToCart} district={district}></District>)
            }
            </div>

            {/* cart container here  */}
            <div className="cart_container">
            <Names populations={populations} names={names}></Names>
            </div>
        </div>
    );
};

export default Districts;