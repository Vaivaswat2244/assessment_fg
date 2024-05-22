import React, { useState } from 'react';
import './Filterbar.css';
import CalendarComp
 from './CalendarComp';

const Filterbar = ({ selectedDate, setSelectedDate, instantAccommodation, setInstantAccommodation }) =>{
    const [isChecked, setIsChecked] = useState(false);

    const handleInstantAccommodationChange = (e) => {
        setInstantAccommodation(e.target.checked);
      };

    return (
        
        <div className='filterbar'>
            <div className='date'> 
                <p>Availability</p>
                <CalendarComp selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            </div>
            <div className='instant'>
                <div className="checkbox-container">
                    <p>
                        Instant Accomodation
                    </p>
                    <input 
                    type="checkbox" 
                    id="myCheckbox" 
                    className="checkbox-input" 
                    checked={instantAccommodation} 
                    onChange={handleInstantAccommodationChange} 
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Filterbar; 