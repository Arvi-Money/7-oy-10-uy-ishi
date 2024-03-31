'use client'
import { useState, useEffect } from 'react';
import data from '../../data/data.json'

function About() {
    const [car, setCar] = useState(null);

    useEffect(() => {
        if (data.cars && data.cars.length > 0) {
            setCar(data.cars[0]);
        }
    }, []);

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5" style={{ width: '500px', height: '300px', margin: '0 auto', border: '1px solid green' }}>
            <h5 className='fs-3'>{car.brand}</h5>
            <h6 className="fs-5">Model: {car.model}</h6>
            <p className='fs-5'>Price: {car.price}</p>
            <p>Color: {car.color}</p>
            <p>ID: {car.id}</p>
            <p>Year: {car.year}</p>
        </div>
    );
}

export default About;
