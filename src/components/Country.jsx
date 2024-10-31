import React from 'react';

const Country = ({ selectedCountry }) => {
  const country = selectedCountry[0] || {};
  const {
    name,
    population,
    region,
    capital,
    flags,
    area,
    timezones,
    coatOfArms
  } = country;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Country Details</h2>
      <div style={styles.detailsContainer}>
        {flags?.svg && (
          <img src={flags.svg} alt={`${name?.common} flag`} style={styles.flagImage} />
        )}
        <div style={styles.infoContainer}>
          <p><strong>Official Name:</strong> {name?.common}</p>
          <p><strong>Capital:</strong> {capital}</p>
          <p><strong>Region:</strong> {region}</p>
          <p><strong>Population:</strong> {population}</p>
          <p><strong>Area:</strong> {area} km²</p>
          <p><strong>Timezones:</strong> {timezones?.join(', ')}</p>
          {coatOfArms?.svg ? (
            <div>
              <p><strong>Coat of Arms:</strong></p>
              <img src={coatOfArms.svg} alt={`${name?.common} coat of arms`} style={styles.coatOfArmImage} />
            </div>
          ) : (
            <p><strong>Coat of Arms:</strong> Not registered</p>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    maxWidth: '900px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '20px',
    flexWrap: 'wrap',
  },
  flagImage: {
    width: '30%',
    height: 'auto',
    borderRadius: '8px',
    maxWidth: '300px',
  },
  infoContainer: {
    fontSize: '18px',
    color: '#555',
    textAlign: 'left',
    maxWidth: '60%',
  },
  coatOfArmImage: {
    width: '150px',
    height: 'auto',
    borderRadius: '50%',
    marginTop: '10px',
  },
  quote: {
    backgroundColor: '#6495ED',
    color: 'white',
    border: '1px solid black',
    borderRadius: '5px',
    height: '50px',
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
};

export default Country;
