import React from 'react';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import { Box, Typography, CardMedia, CardContent, Chip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
import { RecentActivityItem } from './RecentActivityItem';

export const Profile = () => {
    const recentActivity = [
        {
            id: 1,
            date: 12,
            month: 'Sep',
            activity: 'Responded to need "Volunteer Activities...'
        },
        {
            id: 2,
            date: 13,
            month: 'Sep',
            activity: 'Everyone realizes would be desirable...'
        },
        {
            id: 3,
            date: 14,
            month: 'Sep',
            activity: 'Joined the group of "Boardsmanship"...'
        },


    ];
    return (
        <Box>
            <Box>
                <CardMedia
                    component="img"
                    height="100"
                    image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    style={{ color: 'red', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
                />
                <CardContent>
                    <img style={{ position: 'relative', left: '42%', bottom: '50px', borderRadius: '50%', border: '5px solid white' }} src="/images/women.jpg" width={80} height={80} alt="Women" />
                    <Box>
                        <Box sx={{ position: 'relative', bottom: '40px', textAlign: 'center' }}>
                            <Typography variant='h6'>Jennifet Bennett</Typography>
                            <Typography variant='caption' sx={{ fontWeight: '400', color: 'GrayText' }}>Product Designer</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Box>
                                <Typography variant='h6'>1,269</Typography>
                                <Typography variant='caption'>Products</Typography>
                            </Box>
                            <div style={{ width: '1px', backgroundColor: 'lightgray' }}></div>
                            <Box>
                                <Typography variant='h6'>5.2k</Typography>
                                <Typography variant='caption'>Followers</Typography>
                            </Box>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            <div style={{ height: '1px', width: '90%', backgroundColor: 'lightgray', margin: 'auto' }}></div>

            <Box sx={{ paddingX: '15px', marginTop: '10px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h6'>Earning</Typography>
                    <InfoOutlined />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                    <SemiCircleProgressBar strokeWidth='15' stroke='#27ba57' percentage={76} showPercentValue />
                </Box>
                <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
                    <Typography variant='h6'>$26,256</Typography>
                    <Typography variant='caption'>Earning This Month</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px', columnGap: '10px' }}>

                    <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                    <Typography>From Previous Period</Typography>
                </Box>
            </Box>
            <div style={{ height: '1px', width: '90%', backgroundColor: 'lightgray', marginLeft: 'auto', marginRight: 'auto', marginTop: '15px', marginBottom: '15px' }}></div>


            <Box>
                <Typography variant='h6' sx={{ marginLeft: '13px' }}>Recent Activity</Typography>
                <Box>
                    <RecentActivityItem recentActivity={recentActivity} />
                </Box>

            </Box>
        </Box>
    )
}
