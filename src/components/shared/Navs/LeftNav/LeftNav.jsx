import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    fetch(
      "https://news-paper-server-gdh8uygtg-md-ariful-islam-palashs-projects.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error.message));
  },[])

  const itemStyle = {
    backgroundColor: "#e7e7e7",
  };
  return (
    <div className="mb-4">
      <ListGroup className="mt-2">
        <ListGroup.Item className="border-none" style={itemStyle}>
          <h4 >All Category</h4>
        </ListGroup.Item>
      </ListGroup>
      <div className="ms-4 my-3">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-black text-decoration-none hover">
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
