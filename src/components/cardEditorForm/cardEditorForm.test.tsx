/* eslint-disable import/no-extraneous-dependencies */
import { render, screen } from '@testing-library/react';
import { CardEditorForm } from './cardEditorForm';

describe('card editor form', () => {
    beforeEach(() => {
        render(
            <CardEditorForm
                front="front value"
                back="back value"
                setFront={() => null}
                setBack={() => null}
                buttons={<button>add</button>}
            />,
        );
    });

    test('should render textareas with passed front and back card values', async () => {
        expect((screen.getByLabelText('front') as HTMLTextAreaElement).value).toBe('front value');
        expect((screen.getByLabelText('back') as HTMLTextAreaElement).value).toBe('back value');
    });

    test('should render passed button', async () => {
        expect(
            screen.getByRole('button', {
                name: /add/i,
            }),
        );
    });
});
