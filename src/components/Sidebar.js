import './Sidebar.css';

const countries = ['USA', 'Canada', 'Mexico', 'UK', 'Germany'];

const Sidebar = ({ selectedCountries, onCountryChange }) => {
    const handleCountryChange = (event) => {
      const { value, checked } = event.target;
      onCountryChange(value, checked);
    };

    return (
        <div className="sidebar">
    
                <h2>Select Country</h2>
                {countries.map((country) => (
                    <div key={country}>
                        <button href="#" class="custom-button1">
                        <input
                            type="checkbox"
                            value={country}
                            onChange={handleCountryChange}
                            className='check-box'
                            checked={selectedCountries.includes(country)}
                        />{country}
                        </button>
                        
                        
                    </div>
                ))}
            
            
        </div>
    );
};

export default Sidebar;
