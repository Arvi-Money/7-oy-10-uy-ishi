'use client'
import { useState, useEffect } from 'react';
import data from '../../data/data.json'
import './style.css'
import Link from 'next/link';


function Home() {
    const [cars, setCars] = useState([]);
    const [local, setLocal] = useState([]);

    useEffect(() => {
        setCars(data.cars);
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
        <div className="d-flex justify-content-between container flex-wrap mt-4" style={{gap: '11px'}}>
            {
                cars.length > 0 && cars.map((el, index) => {

                    return (
                        <Link href={`/about/${el.id}`} className="card d-flex justify-content-center align-items-center" style={{ width: '250px', height: '180px', border: '2px solid green', textDecoration: 'none'}} key={index}>
                            <h5 className='fs-3'>{el.brand}</h5>
                            <h6 className="fs-5">Model: {el.model}</h6>
                            <p className='fs-5'>Price: {el.price}</p>
                        </Link>
                    );
                })
            }
        </div>
    );
}

export default Home;
