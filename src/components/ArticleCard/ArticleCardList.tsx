import { SimpleGrid } from '@mantine/core';
import { ArticleCard } from './ArticleCard';
import articleData from './articleData.json';

export function ArticleCardList() {

    return (
        <SimpleGrid cols={3} spacing="lg">
            { articleData.map((article)=> (
                <ArticleCard 
                    key={article.id}
                    profileImage={article.profileImage}
                    jobObjective={article.jobObjective}
                    topic={article.topic}
                    summary={article.summary}
                    username={article.username}
                />
            ))}
        </SimpleGrid>
    );
}