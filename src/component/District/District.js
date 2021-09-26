import React from 'react';
import './District.css'


// single district component here 
const District = (props) => {

    // destructuring data from object 
    const {name,area,population,famous,img,devision} = props.district

    return (
        // every single card of single district 
        <div className="singleCard">
            <div className="img_container">
                <img src={img} alt="" />
            </div>

            {/* card body  */}
            <div className="cartBody">
                <h3>{name}</h3>
                <h4>Famous for: {famous}</h4>
                <div className="info">
                <h5>area : {area} km-squre,</h5>
                <h5>Division : {devision}</h5>
                </div>
                <h5>population : <span style={{fontSize:'25px'}}>{population}</span></h5>
                {/* onclick button for adding name and population  */}
                <button className="regularBTN" onClick={()=>props.addToCart(name,population)}>Add population</button>

                {/* fake button just for decorating card  */}
                <button className="regularBTN">Delete last item</button>
            </div>
        </div>
    );
};

export default District;