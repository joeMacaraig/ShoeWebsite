import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';
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
        <Container sx={{display: 'flex', flexDirection: 'row'}}>
            <Box p={1} sx={{width: '50%'}}>
            <Typography>{productDetails.name}</Typography>
            </Box>
            <Box p={1} sx={{width: '50%'}}>
            <img src={productDetails.images?.regular} width="100%" alt="shoe" />
            </Box>

        </Container>
    )
}