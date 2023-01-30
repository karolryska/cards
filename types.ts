export interface CollectionBase {
    id: string;
    name: string;
}
export interface Item {
    id: string;
    front: string;
    back: string;
}
export interface Collection extends CollectionBase {
    items: Item[] | [];
}
