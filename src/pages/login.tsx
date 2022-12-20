import { useState } from 'react';
import * as Yup from 'yup';
import { AuthForm, AuthFormValues } from 'components/authForm/authForm';

const LoginPage = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = (values: AuthFormValues) => {
        console.log(values);
    };

    const schema = Yup.object().shape({
        email: Yup.string().email('invalid email').required('reqiured'),
        password: Yup.string().required('reqiured'),
    });

    return (
        <AuthForm
            buttonLabel="Log in"
            fields={[
                { label: 'email', name: 'email', placeholder: 'email', type: 'text' },
                {
                    label: 'password',
                    name: 'password',
                    placeholder: 'password',
                    type: 'password',
                },
            ]}
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            message={message}
            schema={schema}
            heading="Log in"
        />
    );
};

export default LoginPage;
