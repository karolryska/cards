import classNames from 'classnames/bind';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from 'components/input/input';
import { Button } from 'components/button/button';
import styles from './authForm.module.scss';

const cn = classNames.bind(styles);

export interface AuthFormValues {
    email?: string;
    password?: string;
}

interface InputTypes {
    label: string;
    name: 'email' | 'password';
    placeholder: string;
    type: 'password' | 'text';
}

interface AuthFormProps {
    buttonLabel: string;
    fields: InputTypes[];
    initialValues: AuthFormValues;
    message: string;
    onSubmit: (values: AuthFormValues) => void;
    schema: Yup.SchemaOf<AuthFormValues>;
    heading: string;
}

export const AuthForm = ({
    buttonLabel,
    fields,
    initialValues,
    message,
    onSubmit,
    schema,
    heading,
}: AuthFormProps) => {
    return (
        <div className={cn('wrapper')}>
            <h1>{heading}</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values, actions) => {
                    onSubmit(values);
                    actions.resetForm();
                }}
                validateOnBlur={false}
                validationSchema={schema}
            >
                {({ errors, touched }) => {
                    return (
                        <Form>
                            <fieldset className={cn('form')}>
                                <div className={cn('fields')}>
                                    {fields.map((field) => (
                                        <Field
                                            key={field.name}
                                            component={Input}
                                            {...field}
                                            error={!!errors[field.name]}
                                            helperText={
                                                touched[field.name] && errors[field.name]
                                                    ? errors[field.name]
                                                    : ' '
                                            }
                                        />
                                    ))}
                                </div>
                                <Button type="submit" fullWidth>
                                    {buttonLabel}
                                </Button>
                                {message ? <div className={cn('message')}>{message}</div> : null}
                            </fieldset>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
};
