import { useRouter } from 'next/router';
import { Layout } from 'components/layout/layout';
import { Dashborad } from 'components/dashboard/dashboard';
import { useCollections } from 'store';

const CollectionPage = () => {
    const router = useRouter();
    const {
        query: { collection: collectionName, collectionId },
    } = useRouter();

    const cards = useCollections(
        (state) =>
            state.collections
                .find((item) => item.id === collectionId)
                ?.items.map(({ id, front }) => {
                    return {
                        id,
                        name: front,
                    };
                }) || [],
    );

    const handleCardClick = (cardId: string) => {
        router.push({
            pathname: `/dashboard/${collectionName}/edit`,
            query: { collectionId, cardId },
        });
    };

    const handleAddCardClick = () => {
        router.push({
            pathname: `/dashboard/${collectionName}/add`,
            query: { collectionId },
        });
    };

    return (
        <Layout>
            <Dashborad
                addButtonLabel="add card"
                heading={collectionName as string}
                items={cards}
                buttonLabel="Start quiz"
                onAddClick={handleAddCardClick}
                onCardClick={handleCardClick}
                onReturnClick={() => router.push('/dashboard')}
            />
        </Layout>
    );
};

export default CollectionPage;
