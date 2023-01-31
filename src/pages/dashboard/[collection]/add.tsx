import { useRouter } from 'next/router';
import { Layout } from 'components/layout/layout';
import { Button } from 'components/button/button';
import { useCollections } from 'store';
import { CardEditor } from 'components/cardEditor/cardEditor';
import { useCard } from 'hooks/useCard';

const AddCardPage = () => {
    const {
        query: { collection: collectionName },
    } = useRouter();
    const router = useRouter();

    const { addCard } = useCollections();

    const { back, front, setBack, setFront, isFilled } = useCard('', '');

    const handleClickSave = () => {
        addCard(collectionName as string, front, back);
        router.push(`/dashboard/${collectionName}`);
    };

    const handleClickSaveAndAddNext = () => {
        setFront('');
        setBack('');
        addCard(collectionName as string, front, back);
    };

    return (
        <Layout>
            <CardEditor
                back={back}
                buttons={
                    <>
                        <Button disabled={!isFilled} onClick={handleClickSave} type="button">
                            save
                        </Button>
                        <Button
                            disabled={!isFilled}
                            onClick={handleClickSaveAndAddNext}
                            type="button"
                        >
                            save and add next
                        </Button>
                    </>
                }
                front={front}
                heading={collectionName as string}
                setBack={setBack}
                setFront={setFront}
            />
        </Layout>
    );
};

export default AddCardPage;
