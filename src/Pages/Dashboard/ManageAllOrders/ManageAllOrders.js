import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const ManageAllOrders = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        console.log(url)
        fetch(url, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const windowAlert = window.confirm("are your sure deleting data ?")
                    if (windowAlert) {
                        <Alert severity="success"> Data Delete successful !</Alert>
                    }

                }
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining)
            })
    }


    return (
        <div>

            {
                products.map(product => <div key={product._id}>
                    <h2>{product.name}</h2>
                    <Button onClick={() => handleDelete(product._id)} variant="contained"> Delete </Button>
                </div>)
            }
        </div>
    );
};

export default ManageAllOrders;