import { useRouter } from 'next/router';
import { Layout } from 'components/layout/layout';
import { useCollections } from 'store';
import { CardEditor } from 'components/cardEditor/cardEditor';

const EditCardPage = () => {
    const {
        query: { collection: collectionName, collectionId, cardId },
    } = useRouter();
    const router = useRouter();

    const card = useCollections((state) =>
        state.collections
            .find((item) => item.id === collectionId)
            ?.items.find((item) => item.id === cardId),
    );

    const { editCard, removeCard } = useCollections();

    const handleSubmit = (front: string, back: string) => {
        editCard(collectionId as string, cardId as string, front, back);
    };

    const handleEdit = () => {
        router.push({
            pathname: `/dashboard/${collectionName}`,
            query: { collectionId },
        });
    };

    const handleRemove = () => {
        router.push({
            pathname: `/dashboard/${collectionName}`,
            query: { collectionId },
        });
        removeCard(collectionId as string, cardId as string);
    };

    return (
        <Layout>
            <CardEditor
                buttons={[
                    { label: 'delete', onClick: handleRemove, type: 'button' },
                    { label: 'save', onClick: handleEdit, type: 'submit' },
                ]}
                card={{ front: card?.front || '', back: card?.back || '' }}
                heading={collectionName as string}
                onReturnClick={() =>
                    router.push({
                        pathname: `/dashboard/${collectionName}`,
                        query: { collectionId },
                    })
                }
                onSubmit={handleSubmit}
            />
        </Layout>
    );
};

export default EditCardPage;
