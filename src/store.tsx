import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Collection } from 'root/types';

interface State {
    collections: Collection[] | [];
    addCollection: (name: string) => void;
}

export const useCollections = create<State>()(
    devtools((set) => ({
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
    })),
);
