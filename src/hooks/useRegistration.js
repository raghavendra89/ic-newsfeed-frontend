
import { useState } from 'react';
import api from '@/lib/api.js';

export default function useRegistration() {
    const [registerFromData, setRegisterFromData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [registerValidations, setRegisterValidations] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const isFieldValid = (field, value) => {
        let currentValidations = {...registerValidations};
        let isValid = true;

        if (field != 'last_name' && value == '') {
            const fieldNames = {
                first_name: 'First Name',
                last_name: 'Last Name',
                email: 'Email Address',
                password: 'Password',
                password_confirmation: 'Password Confirmation'
            }
            currentValidations[field] = fieldNames[field] + ' field is required.';
            isValid = false;
        } else {

            if (field == 'first_name') {
                currentValidations.first_name = '';
                if (value.length < 3) {
                    currentValidations.first_name = 'Name must have minimum 3 characters.'
                    isValid = false;
                }
            }

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

            if (field == 'password_confirmation') {
                currentValidations.password_confirmation = '';
                if (value !== registerFromData.password) {
                    currentValidations.password_confirmation = 'Password confirmation does not match.'
                    isValid = false;
                }
            }
        }

        setRegisterValidations(currentValidations);

        return isValid;
    }

    const updateRegisterFromData = (field, value) => {
        let currentValues = {...registerFromData};

        currentValues[field] = value;
        setRegisterFromData(currentValues);

        isFieldValid(field, value);
    }

    const register = () => {
        const isValid = isFieldValid('first_name', registerFromData.first_name)
                        && isFieldValid('email', registerFromData.email)
                        && isFieldValid('password', registerFromData.password)
                        && isFieldValid('password_confirmation', registerFromData.password_confirmation);

        if (isValid) {
            // Make API request
            return api.register(registerFromData);
        }

        return new Promise((resolve) => {
            resolve(false);
        });
    }

    return [registerFromData, registerValidations, updateRegisterFromData, register];
}