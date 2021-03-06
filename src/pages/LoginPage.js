
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useApiProgress } from "../shared/ApiProgress";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { loginHandler } from '../redux/actions/AuthActions';
import ButtonWithProgress from '../Component/ButtonWithProgress';
import { useNavigate } from 'react-router';
import { Card, IconButton } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { color, fontSize } from '@mui/system';
const theme = createTheme();
function LoginPage() {
    let push = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        setError(undefined)
    }, [email, password])

    const onClickLogin = async event => {
        event.preventDefault();

        const creds = {
            email,
            password,

        }

        setError(undefined)
        try {
            await dispatch(loginHandler(creds))
            push('/')
        } catch (apiError) {
            setError(apiError.response.data.message)
        }
    }
    // const onChange = event => {
    //     const {name, value} = event.target;
    //     // this.setState({
    //     //     [name]: value,
    //     //     error: null
    //     //
    //     // })
    //
    //
    // }


    const pendingApiCall = useApiProgress('/api/auth');
    const buttonEnabled = email && password

    return (
        <div className='wrapper'>



            <div className='login'>
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xs">
                        <CssBaseline />
                        <Box
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {/* <Avatar sx={{ bgcolor: 'secondary.main', marginTop: 5, }}>

                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography> */}

                            <Box component="form" noValidate sx={{ mt: 5 }}>
                                <TextField
                                    variant='filled'
                                    size='small'
                                    onChange={event => setEmail(event.target.value)}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant='filled'
                                    size='small'
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={event => setPassword(event.target.value)}
                                />
                                <div style={{ paddingTop: 19 }} >
                                    <ButtonWithProgress onClick={onClickLogin}
                                        disabled={!buttonEnabled || pendingApiCall}
                                        pendingApiCall={pendingApiCall}



                                    >


                                    </ButtonWithProgress>
                                    <text style={{ boxShadow: 'black', colorAdjust: 'economy', color: 'black', fontSize: 22, display: 'flex', marginTop: 25, alignItems: 'center', justifyContent: 'center' }}  >LOG IN</text>

                                </div>



                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                {/* <ButtonWithProgress onClick={onClickLogin}
                                    disabled={!buttonEnabled || pendingApiCall}
                                    pendingApiCall={pendingApiCall}
                                    text={'Login'}
                                >


                                </ButtonWithProgress> */}
                                {/* <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>

            <div class="custom-shape-divider-bottom-1648396759">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </div >
    );
}

export default LoginPage;