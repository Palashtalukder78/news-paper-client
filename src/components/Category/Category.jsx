import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const {id} = useParams();
    
    const categoriesNews = useLoaderData();
    console.log(categoriesNews)
    return (
      <div>
        <h5>Category: {categoriesNews.length}</h5>
        {categoriesNews.map((news) => (
          <NewsCard key={news._id} news={news}></NewsCard>
        ))}
      </div>
    );
};

export default Category;