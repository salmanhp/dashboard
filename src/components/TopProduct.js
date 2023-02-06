import React from 'react';
import { Box, Typography } from '@mui/material';
import { ProductItem } from './ProductItem';


export const TopProduct = () => {
    const productItem = [
        {
            id: 1,
            name: 'Polo blue T-shirt',
            price: '$25.4',
            monthlySale: '3.8k'
        },
        {
            id: 2,
            name: 'Hoodie for men',
            price: '$24.5',
            monthlySale: '3.14k'
        },
        {
            id: 3,
            name: 'Red color Cap',
            price: '$22.5',
            monthlySale: '2.84k'
        },
        {
            id: 4,
            name: 'Pocket T-shirt',
            price: '$20.15',
            monthlySale: '2.06k'
        },
    ];
    return (
        <div style={{ height: '370px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant='h6'>Top Product</Typography>
                <Typography variant='caption' sx={{ fontSize: '16px', color: 'gray' }}>Monthly</Typography>
            </Box>
            <ProductItem productItem={productItem} />
        </div>
    )
}
