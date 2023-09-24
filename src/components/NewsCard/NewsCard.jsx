import moment from "moment/moment";
import { Button, Card } from "react-bootstrap";
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  const { img, name, published_date } = author;
  const { number } = rating;
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
                <span>
                  {moment(published_date).format("YYYY-MM-D,  ")}
                  {moment(published_date, "YYYYMMDD").fromNow()}
                </span>
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
            <p className="text-justify">
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>
                <span>Read More</span>
              </Link>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
          <div className="flex-grow-1">
            <Rating
              readonly
              placeholderRating={number}
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar />}
              fullSymbol={<FaStar />}
              className="me-2 text-danger"
            />
            <span>{number}</span>
          </div>
          <div>
            <FaEye /> {total_view}
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
