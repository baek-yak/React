import {useParams} from 'react-router-dom'
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = () => {
    const params = useParams()

    // 카테고리가 선택되지 않으면 기본값 all
    const category = params.category || 'all'

    return (
        <>
            <Categories/>
            <NewsList category={category} />
        </>
    );
};

export default NewsPage;