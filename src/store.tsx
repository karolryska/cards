/* eslint-disable no-param-reassign */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuidv4 } from 'uuid';
import { Collection } from 'root/types';

interface State {
    collections: Collection[];
    addCollection: (name: string) => void;
    addCard: (collectionId: string, front: string, back: string) => void;
    editCard: (collectionId: string, cardId: string, front: string, back: string) => void;
    removeCard: (collectionId: string, cardId: string) => void;
}

export const useCollections = create<State>()(
    devtools(
        immer((set) => ({
            collections: [
                { id: '1', name: 'foo', items: [{ id: '1', front: 'foo', back: 'bar' }] },
                { id: '2', name: 'bar', items: [{ id: '1', front: 'foo', back: 'bar' }] },
                { id: '3', name: 'baz', items: [{ id: '1', front: 'foo', back: 'bar' }] },
            ],
            addCollection: (name) =>
                set((state) => {
                    const newCollection = { id: uuidv4(), name, items: [] };
                    return { collections: [...state.collections, newCollection] };
                }),
            addCard: (collectionId, front, back) =>
                set((state) => {
                    const newCard = { id: uuidv4(), front, back };
                    const collectionIndex = state.collections.findIndex(
                        ({ id }) => id === collectionId,
                    );
                    state.collections[collectionIndex].items = [
                        ...state.collections[collectionIndex].items,
                        newCard,
                    ];
                }),
            editCard: (collectionId, cardId, front, back) =>
                set((state) => {
                    const collectionIndex = state.collections.findIndex(
                        ({ id }) => id === collectionId,
                    );
                    const cardIndex = state.collections[collectionIndex].items.findIndex(
                        ({ id }) => id === cardId,
                    );
                    state.collections[collectionIndex].items[cardIndex] = {
                        ...state.collections[collectionIndex].items[cardIndex],
                        front,
                        back,
                    };
                }),
            removeCard: (collectionId, cardId) =>
                set((state) => {
                    const collectionIndex = state.collections.findIndex(
                        ({ id }) => id === collectionId,
                    );
                    state.collections[collectionIndex].items = state.collections[
                        collectionIndex
                    ].items.filter(({ id }) => id !== cardId);
                }),
        })),
    ),
);
