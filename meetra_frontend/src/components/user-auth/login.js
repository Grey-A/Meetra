import { useState } from "react";
import axiosInstance from "./axios";
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);


    // Removed white space
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); //to check

        axiosInstance
            .post('token/', {
                email: formData.email,
                password: formData.password,
            })
            .then((response) => {
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                axiosInstance.defaults.headers['Authorization'] =
                    'JWT ' + localStorage.getItem('access'); // 'JWT_' there should be a space _
                navigate('/');
            });

    };

}