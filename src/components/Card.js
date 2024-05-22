import React from 'react';
import './Card.css';

const Card = ({data}) => {

  
    return (
        <div className='container'>
            
                {data.map((d) => (
                    <div key={d.name} className="card">
                        <div className='card-header'>
                            <img src='https://cdn.dribbble.com/userupload/8191425/file/original-3410d20bb3b2cecc4c73644c0e39f2e8.png?resize=1024x768' alt="" className="card-image"/>
                        </div>
                        <div className="card-body">
                            <p className="card-title">{d.name}</p>
                            <p className="card-review">{d.review}</p>
                            <button className='card-button'>Read More</button>
                        </div>
                    </div>
                ))}

        </div>
    );
};



export default Card;
