import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {

    const {id} = useParams();
    console.log(id)
    
    const categoriesNews = useLoaderData();
    console.log(categoriesNews)
    return (
      <div>
        {
            categoriesNews.map(news=><NewsCard
                key={news._id}
                news={news}
            ></NewsCard>)
        }
      </div>
    );
};

export default Category;