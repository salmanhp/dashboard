import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
    Box,
    Drawer,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Grid,
    Chip,
    Table,
    TableRow,
    TableCell
} from '@mui/material';
import {
    SettingsOutlined,
    NotificationsNoneOutlined,
    MoreHoriz,
    Search,
    PieChart,
    ShoppingBag,
    People,
    Mail,
    MoveToInbox,
    ChevronRight,
    ChevronLeft,
    Menu

} from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import { blue } from '@mui/material/colors';
import { BarChart } from './BarChart';
import { LineChart } from './LineChart';
import { DoughnutChart } from './DoughnutChart';
import { TopProduct } from './TopProduct';
import { Profile } from './Profile';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        style={{ color: blue[900] }}
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: blue[900] }}>
                        Dashboard
                    </Typography>

                    <Stack direction='row' spacing={1}>
                        <IconButton style={{ color: '#000' }} edge="end" size='medium'><Search /></IconButton>
                        <IconButton edge="end" size='medium'>
                            <img src="/images/usa.png" width={25} alt="usa" />
                        </IconButton>
                        <IconButton color="inherit" edge="end" size='medium'>
                            <img src="/images/four-rounded-squares-button.png" width={16} alt="four-rounded-squares-button" />
                        </IconButton>
                        <IconButton style={{ color: '#000' }} edge="end" size='medium'><NotificationsNoneOutlined /></IconButton>
                        <IconButton style={{ color: '#000' }} edge="end" size='medium'><SettingsOutlined /></IconButton>
                        <IconButton color="inherit" edge="end" size='medium'>
                            <img src="/images/women.jpg" width={30} height={30} style={{ borderRadius: '50%' }} alt="women" />
                        </IconButton>

                    </Stack>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'File Manager', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />

                <Grid spacing={2} container>
                    <Grid item lg={9} md={9} sm={12} xs={12}>
                        <Grid container spacing={1}>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                    <PieChart fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                    <Box ml={2} sx={{ width: '100%' }}>
                                        <Typography variant='subtitle2'>Revenue</Typography>
                                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant='h6'>$21,456</Typography>
                                            <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                    <ShoppingBag fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                    <Box ml={2} sx={{ width: '100%' }}>
                                        <Typography variant='subtitle2'>Orders</Typography>
                                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant='h6'>$21,456</Typography>
                                            <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12}>
                                <Box p={1} sx={{ display: 'flex', boxShadow: 3, borderRadius: '10px', alignItems: 'center' }} >
                                    <People fontSize='large' style={{ borderRadius: '10px', padding: '3px', color: 'white', backgroundColor: '#2596be' }} />
                                    <Box ml={2} sx={{ width: '100%' }}>
                                        <Typography variant='subtitle2'>Customers</Typography>
                                        <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant='h6'>$21,456</Typography>
                                            <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item mt={2} lg={12} md={12} sm={12} xs={12}>
                                <Box p={1} sx={{ boxShadow: 3, borderRadius: '10px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant='h6'>Overview</Typography>
                                        <Typography variant='h6'>Sort By:<span style={{ fontSize: '16px', color: 'gray' }}> Yarly</span></Typography>
                                    </Box>
                                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                                        <Box sx={{ flex: 1, objectFit: 'cover' }}>
                                            <Typography variant='caption'>This Month</Typography>
                                            <Stack direction='row' spacing={2} >
                                                <Typography variant='h5'>$24,568</Typography>
                                                <Chip size="small" sx={{ bgcolor: '#daedda', color: 'green' }} label="+2.65%" />
                                            </Stack>
                                            <Table sx={{ width: '80%', marginTop: '2px' }}>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                        <Typography variant='subtitle2'>Orders</Typography>
                                                        <Typography variant='h6'>24,568</Typography>
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <Typography variant='subtitle2'>Sales</Typography>
                                                        <Typography variant='h6'>24,568</Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                        <Typography variant='subtitle2'>Order Value</Typography>
                                                        <Typography variant='h6'>12.03 %</Typography>
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <Typography variant='subtitle2'>Customer</Typography>
                                                        <Typography variant='h6'>24,568</Typography>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ borderBottom: '2px solid white' }}>
                                                    <TableCell sx={{ borderRight: '1px solid lightgray' }} align='center'>
                                                        <Typography variant='subtitle2'>Income</Typography>
                                                        <Typography variant='h6'>$24,568</Typography>
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        <Typography variant='subtitle2'>Expenses</Typography>
                                                        <Typography variant='h6'>$24,568</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </Table>
                                        </Box>

                                        <Box sx={{ flex: 2, objectFit: 'contain' }}>
                                            <BarChart />
                                        </Box>
                                    </Stack>
                                </Box>
                            </Grid>

                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ height: '100%' }}>
                                <Box p={1} sx={{ boxShadow: 3, borderRadius: '10px' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography variant='h6'>User Activity</Typography>
                                        <Typography variant='caption' sx={{ fontSize: '16px', color: 'gray' }}>Weekly</Typography>
                                    </Box>
                                    <Typography variant='caption'>This Month</Typography>
                                    <Typography variant='h6'>16,543</Typography>
                                    <LineChart />
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ height: '100%' }}>
                                <Box p={1} sx={{ boxShadow: 3, borderRadius: '10px' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography>OrderStatus</Typography>
                                        <IconButton size='small'><MoreHoriz /></IconButton>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <DoughnutChart />
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4} md={4} sm={4} xs={12} style={{ height: '100%' }}>
                                <Box p={1} sx={{ boxShadow: 3, borderRadius: '10px' }}>
                                    <TopProduct />
                                </Box>
                            </Grid>


                        </Grid>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box sx={{ boxShadow: 3, borderRadius: '10px', height: '100%' }}>
                            <Profile />
                        </Box>
                    </Grid>
                </Grid>

            </Main>
        </Box>
    );
}







