import React from 'react';
import './Names.css'

const Names = (props) => {
    const names = props.names

    // for loop for adding population 
    let populations = 0;
    for (const population of props.populations) {
        populations = populations + parseInt(population)
    }
    
    return (
        <div>
            <h3>Total Selected : {names.length}</h3>
            <h4>Total Population :{populations}</h4>

            {/* every single name of selection of the card  */}
            {
                names.map((name,index) => <div key={index} className="selectedDiv">Selected district <br /> <span style={{fontSize:'22px'}}>{name}</span></div>)
            }
        </div>
    );
};

export default Names;