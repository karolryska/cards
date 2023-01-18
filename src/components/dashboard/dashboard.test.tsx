/* eslint-disable import/no-extraneous-dependencies */
import { act } from 'react-dom/test-utils';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dashborad } from './dashboard';

const mock = [
    { id: '1', name: 'react' },
    { id: '2', name: 'vue' },
    { id: '3', name: 'angular' },
    { id: '4', name: 'svelte' },
    { id: '5', name: 'solidjs' },
];

describe('dashboard', () => {
    beforeEach(() => {
        render(<Dashborad heading="collections" items={mock} onCardClick={() => null} />);
    });

    test('should render as many cards as in mock list', async () => {
        expect(screen.getAllByTestId('card')).toHaveLength(mock.length);
    });
    test('should filter cards when using search input', async () => {
        await act(() => {
            fireEvent.change(screen.getByPlaceholderText('search'), { target: { value: 'react' } });
        });

        expect(screen.getAllByTestId('card')).toHaveLength(1);
        expect(
            screen.getByRole('button', {
                name: /react/i,
            }),
        );
    });
});
