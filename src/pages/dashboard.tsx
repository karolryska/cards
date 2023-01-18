import { Layout } from 'components/layout/layout';
import { Dashborad } from 'components/dashboard/dashboard';

const collections = [
    { id: '1', name: 'react' },
    { id: '2', name: 'vue' },
    { id: '3', name: 'angular' },
    { id: '4', name: 'svelte' },
    { id: '5', name: 'solidjs' },
];

const DashboardPage = () => {
    const handleCardClick = (value: string) => {
        console.log(value);
    };

    return (
        <Layout>
            <Dashborad heading="collections" items={collections} onCardClick={handleCardClick} />
        </Layout>
    );
};

export default DashboardPage;
