// About.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import data from '../../data/data.json';

function About() {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState(null);

    useEffect(() => {
        const selectedCar = data.cars.find(c => c.id === (id));
        setCar(selectedCar);
    }, [id]);

    if (!car) {
        return <div>Loading...</div>;
    }   

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ margin: '0 auto', border: '1px solid green' }}>
            <h1>Color: {car.color}</h1>
            <p>ID: {car.id}</p>
            <p>Year: {car.year}</p>
        </div>
    );
}

export default About;
