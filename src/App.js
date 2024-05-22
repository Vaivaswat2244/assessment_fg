import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Filterbar from './components/Filterbar';
import Card from './components/Card';

const data = [{
  name: 'Anime1',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime1.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'USA',
  date: '05/24/2024',
  instant_accommodation: true
},
{
  name: 'Anime2',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime2.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'USA',
  date: '05/25/2024',
  instant_accommodation: true
},
{
  name: 'Anime3',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime3.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'Canada',
  date: '05/25/2024',
  instant_accommodation: true
},
{
  name: 'Anime4',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime4.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'Mexico',
  date: '05/26/2024',
  instant_accommodation: true
},
{
  name: 'Anime5',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime5.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'UK',
  date: '05/27/2024',
  instant_accommodation: true
},
{
  name: 'Anime6',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime6.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'Germany',
  date: '05/27/2024',
  instant_accommodation: true
},
{
  name: 'Anime7',
  img: 'C:\Users\VAIVASWAT\Pictures\wallpapers\anime7.jpg',
  review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  country: 'Germany',
  date: '05/28/2024',
  instant_accommodation: true
}]

const App = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [instantAccommodation, setInstantAccommodation] = useState(false);

  const handleCountryChange = (country, checked) => {
    setSelectedCountries((prevSelectedCountries) => {
      const newSelectedCountries = checked
        ? [...prevSelectedCountries, country]
        : prevSelectedCountries.filter((c) => c !== country);
      console.log(newSelectedCountries); // This will log the updated state
      return newSelectedCountries;
    });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleInstantAccommodationChange = (checked) => {
    setInstantAccommodation(checked);
    console.log(checked);
  };

  // console.log("this is data ->",data);
  
  const filteredData = data.filter((entry) => {
    return (
      (selectedCountries.length === 0 || selectedCountries.includes(entry.country)) &&
       (!selectedDate || entry.date === selectedDate) &&
      (!instantAccommodation || entry.instant_accommodation === instantAccommodation)
    );
    
  // console.log("FilterData --->", filteredData)
  // console.log("entry.country --->", entry.country)
  // console.log("FilterData --->", selectedCountries)

  // console.log("selectedDate --->", selectedDate)
  // console.log("entry.date --->", entry.date)
  // console.log("instantAccommodation --->", instantAccommodation)
  // console.log("filteredData --->", filteredData)
  // console.log("entry.instant_accommodation --->", entry.instant_accommodation)
  });


  return (
    <div className="App">
      <Navbar/>
      <div className='image-section'>
        <p>Attraction tickets</p>
        
      </div>
      <div className='main-section'>
          <Sidebar
            selectedCountries={selectedCountries}
            onCountryChange={handleCountryChange}
          />
          <div className='sub-section'>
            
            <Filterbar
                selectedDate={selectedDate}
                setSelectedDate={handleDateChange}
                instantAccommodation={instantAccommodation}
                setInstantAccommodation={handleInstantAccommodationChange}
            />
            <Card data={filteredData} />

          </div>
        
      </div>
    </div>
  );
}

export default App;