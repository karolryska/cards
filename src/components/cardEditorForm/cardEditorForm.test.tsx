/* eslint-disable import/no-extraneous-dependencies */
import { render, screen, fireEvent } from '@testing-library/react';
import { CardEditorForm } from './cardEditorForm';

describe('card editor form', () => {
    const before = (initialCardValues?: { front: string; back: string }) => {
        render(
            <CardEditorForm
                buttons={[{ label: 'submit', onClick: () => null, type: 'submit' }]}
                card={initialCardValues || { front: '', back: '' }}
                onSubmit={() => null}
            />,
        );
    };

    test('should render textareas with passed front and back card values', async () => {
        before({ front: 'front value', back: 'back value' });

        expect((screen.getByLabelText('front') as HTMLTextAreaElement).value).toBe('front value');
        expect((screen.getByLabelText('back') as HTMLTextAreaElement).value).toBe('back value');
    });

    test('should render passed button', async () => {
        before();

        expect(
            screen.getByRole('button', {
                name: /submit/i,
            }),
        );
    });

    test('should trigger onSubmit function on button click', async () => {
        const handleSubmitMock = jest.fn((front, back) => {
            return { front, back };
        });

        render(
            <CardEditorForm
                buttons={[{ label: 'submit', onClick: () => null, type: 'submit' }]}
                card={{ front: 'front value', back: 'back value' }}
                onSubmit={handleSubmitMock}
            />,
        );

        fireEvent(
            screen.getByRole('button', {
                name: /submit/i,
            }),
            new MouseEvent('click'),
        );

        expect(handleSubmitMock).toHaveBeenCalledWith('front value', 'back value');
    });
});
