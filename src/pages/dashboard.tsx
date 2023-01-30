import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'components/layout/layout';
import { Dashborad } from 'components/dashboard/dashboard';
import { Modal } from 'components/modal/modal';
import { Button } from 'components/button/button';
import { Input } from 'components/input/input';
import { useCollections } from 'store';

const DashboardPage = () => {
    const collections = useCollections((state) =>
        state.collections.map(({ id, name }) => {
            return { id, name };
        }),
    );
    const { addCollection } = useCollections();

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');

    const handleCardClick = (collectionName: string) => {
        router.push(`/dashboard/${collectionName}`);
    };

    const handleAdd = (name: string) => {
        addCollection(name);
        setIsModalOpen(false);
        setNewCollectionName('');
    };

    const handleAddButtonClick = () => setIsModalOpen(true);

    return (
        <Layout>
            <Dashborad
                heading="collections"
                items={collections}
                onAddClick={handleAddButtonClick}
                onCardClick={handleCardClick}
            />
            <Modal
                closeOnClickOutside
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add new collection"
            >
                <Input
                    label="collection name"
                    name="cname"
                    onChange={setNewCollectionName}
                    type="text"
                    value={newCollectionName}
                />
                <Button type="button" onClick={() => handleAdd(newCollectionName)}>
                    Add
                </Button>
            </Modal>
        </Layout>
    );
};

export default DashboardPage;
