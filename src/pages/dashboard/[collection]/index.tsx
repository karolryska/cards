import { useRouter } from 'next/router';
import { Layout } from 'components/layout/layout';
import { Dashborad } from 'components/dashboard/dashboard';
import { useCollections } from 'store';

const CollectionPage = () => {
    const router = useRouter();
    const {
        query: { collection: collectionName },
    } = useRouter();

    const cards = useCollections(
        (state) =>
            state.collections
                .find((item) => item.name === collectionName)
                ?.items.map(({ id, front }) => {
                    return {
                        id,
                        name: front,
                    };
                }) || [],
    );

    return (
        <Layout>
            <Dashborad
                headerButtonLabel="add card"
                heading={collectionName as string}
                items={cards}
                buttonLabel="Start quiz"
                onAddClick={() => router.push(`${collectionName}/add`)}
            />
        </Layout>
    );
};

export default CollectionPage;
