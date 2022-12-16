import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

export const ProductDetails = ({product}) => {
    const params = useParams(); 
    const [productDetails, setProductDetails] = useState([]);
    
    const getProductDetails = async () => {
        const data = await (
            await axios.get(`http://localhost:10000/products/${params?.sneakerId}`)
        ).data;
        setProductDetails(data.data);
    };
    useEffect(() => {
        getProductDetails();
    }, []);

    return (
        <Container>
            <Typography>{productDetails.name}</Typography>
        </Container>
    )
}