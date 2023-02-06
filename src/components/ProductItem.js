import React from 'react';
import { Box, Chip, Typography } from '@mui/material';

export const ProductItem = ({ productItem }) => {

    return (
        <>
            {
                productItem.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '30px', marginBottom: '30px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
                            <Box sx={{ boxShadow: 1, padding: '6px', borderRadius: '10px', alignItems: 'center', justifyContent: 'center', backgroundColor: '#6291E7', color: 'white' }}>#{item.id}</Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography variant='caption'>{item.name}</Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant='subtitle2'>{item.price}</Typography>
                            </Box>
                        </Box>
                        <Chip size="small" label={item.monthlySale} />
                    </div>

                ))
            }
        </>
    )
}
