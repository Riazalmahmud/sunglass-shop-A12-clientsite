import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddAProduct.css';
import { Alert } from '@mui/material';
const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post("https://hidden-mesa-07077.herokuapp.com/products", data)
            .then(res => {
                if (res.data.insertedId) {
                    <Alert severity="success"> successfully posted !</Alert>
                }
                console.log(res)
            })

    };
    return (
        <div>
            <form className="add-product-form my-5 py-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="Product name " />
                <input {...register("key")} placeholder="product-key " />
                <input {...register("stock")} placeholder="product-stock " />
                <textarea {...register("discretion")} placeholder="product description " />
                <input {...register("img")} placeholder="image url " />
                <input type="number" {...register("price")} placeholder="product price " />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddAProduct;