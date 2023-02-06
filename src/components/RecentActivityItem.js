import React from 'react';
import { Box, Typography } from '@mui/material';

export const RecentActivityItem = ({ recentActivity }) => {
    return (
        <>
            {recentActivity.map((item, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-evenly', marginY: '10px', alignItems: 'center' }}>
                    <Box sx={{ backgroundColor: 'rgb(220,220,220)', borderRadius: '10px', padding: '3px 6px' }}>
                        <Typography>{item.date}</Typography>
                        <Typography variant='caption' sx={{ fontWeight: '550', color: 'GrayText' }}>{item.month}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='caption'>{item.activity}</Typography>
                        <Typography color='blue' sx={{ fontWeight: '450' }} variant='caption'>Read more</Typography>
                    </Box>
                </Box >

            ))}
        </>
    )
}
