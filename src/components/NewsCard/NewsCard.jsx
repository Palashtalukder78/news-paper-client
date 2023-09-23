import { Button, Card } from "react-bootstrap";
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, details, image_url } = news;
  const { img, name, published_date } = news.author;
  return (
    <div>
      <Card className=" mb-3">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="me-2">
                <img
                  src={img}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-circle"
                />
              </div>
              <div>
                <span>{name}</span>
                <br />
                <span>{published_date}</span>
              </div>
            </div>
            <div>
              <FaRegBookmark />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h6>{title}</h6>
          </Card.Title>
          <Card.Text>
            <img className="img-fluid" src={image_url} alt="" />
            <p className="text-justify">{details.slice(0, 200)}</p>
            <button className="btn btn-link">Read More</button>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
