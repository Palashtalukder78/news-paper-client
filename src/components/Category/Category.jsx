import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoriesNews = useLoaderData();
    return (
      <div>
        {id &&
          <h5>Category: {categoriesNews.length}</h5>}
        {categoriesNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    );
};

export default Category;