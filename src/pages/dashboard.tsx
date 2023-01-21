import { useState } from 'react';
import { Layout } from 'components/layout/layout';
import { Dashborad } from 'components/dashboard/dashboard';
import { Modal } from 'components/modal/modal';
import { Button } from 'components/button/button';
import { Input } from 'components/input/input';

const collections = [
    { id: '1', name: 'react' },
    { id: '2', name: 'vue' },
    { id: '3', name: 'angular' },
    { id: '4', name: 'svelte' },
    { id: '5', name: 'solidjs' },
];

const DashboardPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCollectionName, setNewCollectionName] = useState('');

    const handleCardClick = (value: string) => {
        console.log(value);
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
                <Button type="button" onClick={() => null}>
                    Add
                </Button>
            </Modal>
        </Layout>
    );
};

export default DashboardPage;
