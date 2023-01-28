import { Link } from 'react-router-dom';
import { PATH } from '../../constants/Paths';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './style.scss';

const Header = () => {
    return (
        <header className='header'>
            <div className='logo-container'>
                <Link to={PATH.HOME}>Hire</Link>
            </div>
            <div className='auth-container'>
            <Stack spacing={2} direction="row">
                <Link to={'#'}>
                    <Button variant="contained" color="success">
                        Login
                    </Button>
                </Link>
                <Link to={'#'}>
                    <Button variant="outlined" color="success">
                        Sign Up
                    </Button>
                </Link>
            </Stack>
            </div>
        </header>
    )
}

export default Header