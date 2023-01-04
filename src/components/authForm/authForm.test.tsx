/* eslint-disable import/no-extraneous-dependencies */
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import * as Yup from 'yup';
import { AuthForm, AuthFormValues } from 'components/authForm/authForm';

describe('authForm', () => {
    const before = (onSubmit: (values: AuthFormValues) => void) => {
        const schema = Yup.object().shape({
            email: Yup.string().email('invalid email').required('reqiured'),
            password: Yup.string().required('reqiured'),
        });

        render(
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
                onSubmit={onSubmit}
                message="test"
                schema={schema}
                heading="Log in to"
            />,
        );
    };

    test('should show warnings if try submit with empty inputs', async () => {
        before(() => null);

        await act(() => {
            fireEvent.click(screen.getByRole('button'));
        });

        expect(screen.getAllByText('reqiured'));
    });

    test('should call onSubmit with inputs values as argument', async () => {
        const onSubmitMock = jest.fn(() => null);

        before(onSubmitMock);

        await act(() => {
            fireEvent.change(screen.getByPlaceholderText('email'), {
                target: { value: 'foo@bar.com' },
            });
            fireEvent.change(screen.getByPlaceholderText('password'), {
                target: { value: 'Baz123456' },
            });
            fireEvent.click(screen.getByRole('button'));
        });

        expect(onSubmitMock).toHaveBeenCalledWith({
            email: 'foo@bar.com',
            password: 'Baz123456',
        });
    });
});
