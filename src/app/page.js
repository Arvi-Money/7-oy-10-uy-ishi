'use client'
import { useState, useEffect } from 'react';
import data from './data/data.json';
import './globals.css'

function Home() {
    const [cars, setCars] = useState([]);
    const [local, setLocal] = useState([]);

    useEffect(() => {
        setCars(data);
        setLocal(getData);
    }, []);

    function getData() {
        let data = [];
        if (localStorage.getItem('cars')) {
            data = JSON.parse(localStorage.getItem('cars'));
        }
        return data;
    }

    console.log(cars);

    return (
        <div className="d-flex justify-content-between container flex-wrap gap-3 mt-4">
            {
                cars.length > 0 && cars.map((car, index) => {
                    const { brand, model, price } = car.data; 

                    return (
                        <div className="card" style={{ width: '25%' }} key={index}>
                                <div className="d-flex justify-content-between">
                                    <h5 className="card-title">{brand}</h5>
                                </div>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{model}</h6>
                                <p className="card-text">Price: {price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Home;
