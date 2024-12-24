import { useState } from 'react';
import api from '@/lib/api.js';

export default function useLogin() {
    const [loginFromData, setLoginFromData] = useState({
        email: '',
        password: '',
    });
    const [loginValidations, setLoginValidations] = useState({
        email: '',
        password: '',
    });

    const isFieldValid = (field, value) => {
        let currentValidations = {...loginValidations};
        let isValid = true;

        if (value == '') {
            const fieldNames = {
                email: 'Email Address',
                password: 'Password',
            }
            currentValidations[field] = fieldNames[field] + ' field is required.';
            isValid = false;
        } else {

            if (field == 'email') {
                currentValidations.email = '';
                if (! (/^\S+@\S+\.(\S){2,}$/).test(value)) {
                    currentValidations.email = 'Password enter a valid email address.'
                    isValid = false;
                }
            }

            if (field == 'password') {
                currentValidations.password = '';
                if (value.length < 8) {
                    currentValidations.password = 'Password must have minimum 8 characters.'
                    isValid = false;
                }
            }
        }

        setLoginValidations(currentValidations);

        return isValid;
    }

    const updateLoginFromData = (field, value) => {
        let currentValues = {...loginFromData};

        currentValues[field] = value;
        setLoginFromData(currentValues);

        isFieldValid(field, value);
    }

    const login = () => {
        const isValid = isFieldValid('email', loginFromData.email)
                        && isFieldValid('password', loginFromData.password);

        if (isValid) {
            // Make API request
            return api.login(loginFromData);
        }

        return new Promise((resolve) => {
            resolve(false);
        });
    }

    return [loginFromData, loginValidations, updateLoginFromData, login];
}