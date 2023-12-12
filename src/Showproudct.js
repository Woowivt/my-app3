import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Button, Spinner, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addCart } from "./redux/action";

const Showproudct = () => {
  const [product, setProduct] = useState();
  const { Id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const oneProduct = async () => {
    try {
      const response = await axios.get(
        `http://kzico.runflare.run/product/${Id}`
      );
      setProduct(() => response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    oneProduct();
  }, []);

  if (loading)
    return (
      <Spinner animation="grow" variant="info" style={{ margin: "0 auto" }} />
    );
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Col sm="3" className="mt-4" key={product._id}>
        <Card
          className="mb-3"
          style={{
            width: "550px",
            height: "600px",
            border: "none",
            display: "flex",
            alignContent: "center",
          }}
        >
          <Button
            className="btn btn-dark  px-2 py-2"
            onClick={() => navigate("/")}
          >
            GO HOME
          </Button>
          <Card.Img
            className="mt-4"
            variant="top"
            src={product.image}
            style={{
              width: "250px",
              height: "250px",
              alignSelf: "center",
            }}
          />
          <Card.Body>
            <Card.Title>Name:{product.name}</Card.Title>
            <Card.Text>brand:{product.brand} </Card.Text>
            <Card.Text>color:{product.color} </Card.Text>
            <Card.Text>CountInStock:{product.countInStock}</Card.Text>
            <Card.Text>Price:{product.price}$ </Card.Text>
            <Card.Text>Rating:{product.rating} </Card.Text>
          </Card.Body>

          {product.countInStock > 0 ? (
            <div className="col-md-12">
              <button
                className="btn btn-outline-dark ms-2 px-3 py-2"
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-dark ms-2 px-3 py-2"
                onClick={() => navigate("/addtocard")}
              >
                Go to cart
              </button>
            </div>
          ) : (
            "Not available"
          )}
        </Card>
      </Col>
    </div>
  );
};

export default Showproudct;
