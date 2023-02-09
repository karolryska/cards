import { useRouter } from 'next/router';
import { useCollections } from 'store';
import { Layout } from 'components/layout/layout';
import { CardEditor } from 'components/cardEditor/cardEditor';
import { CardEditorButtonsType } from 'components/cardEditorForm/cardEditorForm';

const AddCardPage = () => {
    const {
        query: { collection: collectionName, collectionId },
    } = useRouter();
    const router = useRouter();

    const { addCard } = useCollections();

    const handleSubmit = (front: string, back: string) => {
        addCard(collectionId as string, front, back);
    };

    const buttons: CardEditorButtonsType = [
        {
            label: 'save',
            type: 'submit',
            onClick: () =>
                router.push({
                    pathname: `/dashboard/${collectionName}`,
                    query: { collectionId },
                }),
        },
        {
            label: 'save and add next',
            type: 'submit',
            onClick: () => null,
        },
    ];

    return (
        <Layout>
            <CardEditor
                buttons={buttons}
                card={{ front: '', back: '' }}
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

export default AddCardPage;
