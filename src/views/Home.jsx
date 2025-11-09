
import React from 'react';
import Config from '../utils/config.json';

function Home(){
    return(
        <>
        <div className='container' style={{backgroundColor: Config.theme.accentColor}}>
        <h1 className='text-center' style={{color: Config.theme.primaryColor}}>{Config.title}</h1>
        <p className='text-center'>{Config.description}</p>

        <h2>services</h2>
        {
            Config.services.map((serviceData, index)=>{
                const {title, description, price} = serviceData
                return(
                    <div className='card m-3' key={index}>
                    <div className='card-body'>
                    <h3 className='card-title' style={{color: Config.theme.secondaryColor}}>{title}</h3>
                    <p className='card-text'>{description}</p>
                    <p className='card-text'>Price: {price}</p>
                    </div>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}
export default Home;