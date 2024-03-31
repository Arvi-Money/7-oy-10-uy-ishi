"use client"
import { useState, useEffect } from 'react';
import data from '../../data/data.json';
import { useParams } from 'next/navigation';

function About() {
    const [car, setCar] = useState(null);
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(() => {
        setCar(data.cars)
        const Product = data.cars.filter(car => car.id == id);
        setProduct(Product[0]);
        console.log(Product);
    }, []);
        
        

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            {
                product && (
                    <div className="d-flex flex-column justify-content-center align-items-center mt-5" style={{ width: '500px', height: '350px', margin: '0 auto', border: '1px solid green' }} key={product.id}>
                    <h5 className='fs-1'>{product.brand}</h5>
                    <h6 className="fs-2">Model: {product.model}</h6>
                    <p className='fs-3'>Price: {product.price}</p>
                    <p className='fs-4'>Color: {product.color}</p>
                    <p className='fs-4'>ID: {product.id}</p>
                    <p className='fs-4'>Year: {product.year}</p>
                </div>
                )
            }
        </div>
               
    );
}

export default About;
