import React, {useEffect} from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';

export default function LogOut(){
    const navigate = useNavigate();

    useEffect(() => {
        const response = axiosInstance.post('token/blacklist/', {
            refresh_token: localStorage.getItem('refresh'),
        });
        // Add some logic to check the response to see if user has been logged out

        //then
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        axiosInstance.defaults.headers['Authorization']
        navigate('login');
    });
    return <div>Logout</div>;
}