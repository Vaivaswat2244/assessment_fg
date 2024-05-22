import { useEffect, useRef, useState } from "react";
import { Calendar } from "react-date-range";
import { format } from "date-fns/format";
import './CalendarComp.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const CalendarComp = ({selectedDate, setSelectedDate}) => {

    const [calendar, setCalendar] = useState('')

    const [open, setOpen] = useState(false)

    const refOne = useRef(null)
 
    useEffect( ()=>{
            document.addEventListener("keydown", hideOnEscape, true)
            document.addEventListener("click", hideOnClickOutside, true)
            
    }, []) 

    const hideOnEscape =(e)=>{
        if( e.key === "Escape"){
            setOpen(false)
        }
    }

    const hideOnClickOutside =(e)=>{
        if (refOne.current && !refOne.current.contains(e.target)){
            setOpen(false)
        }
    }
    const handleSelect =(date) =>{
        setSelectedDate(format(date, 'MM/dd/yyyy'));
        setOpen(false);
    }

    //api hit 
    return (
        <div className="calendarWrap">

            <input
            value={selectedDate}
            readOnly
            className="inputBox"
            onClick={ () => setOpen(open => !open) }
            />
            <div ref={refOne}>
                {open &&
                    <Calendar
                        date={new Date() }
                        onChange={ handleSelect }
                        className='calendarElement'
                    />
                }
            </div>
            </div>
    )
}

export default CalendarComp;