import { useState } from 'react';
import axiosInstance from './axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const initialFormData = Object.freeze({
        full_name: '',
        email: '',
        username: '',
        password1: '',
        password2: '',
    });

    const [formData, updateFormData] = useState(initialFormData);


    // For removing white space
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim(),
        });
    };

    // Submit handler 
    const handleSubmit = (e) => {
        e.preventDefault();
        //NOTE: impement some way to check if password 1 is equal to password 2
        console.log(formData); //To check

        axiosInstance
            .post('register/', {
                full_name: formData.full_name,
                email: formData.email,
                username: formData.username,
                password: formData.password2,
            })
            .then((response) => {
                //response check
                console.log(response);
                console.log(response.data);
                
                navigate('/login');
            });
    };

    //return()

}