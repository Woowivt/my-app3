import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Button, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Proudct = () => {
  const [select, setSelect] = useState({ loading: false, error: "" });
  const [product, setproduct] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      setSelect({ loading: true, error: "" });
      const { data } = await axios.get(`http://kzico.runflare.run/product/`);

      setSelect({ loading: false, error: "" });
      setproduct(data);
      console.log(data);
    } catch (error) {
      setSelect({ loading: false, error: error.message });
      console.log(error.massage);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Proudct">
      {select.loading ? (
        <Spinner animation="grow" variant="info" style={{ margin: "0 auto" }} />
      ) : select.error ? (
        <h1>{select.error}</h1>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Container>
            <Row>
              {product.map((item, index) => {
                return (
                  <Col sm="4" className="mt-4" key={index}>
                    <Card
                      className="mb-3"
                      style={{
                        width: "400px",
                        height: "450px",
                        display: "flex",
                        alignContent: "center",
                        border: "1px solid black",
                      }}
                      onClick={() => navigate(`/Product/${item._id}`)}
                    >
                      <Card.Img
                        className="mt-4"
                        variant="top"
                        src={item.image}
                        style={{
                          width: "200px",
                          height: "200px",
                          alignSelf: "center",
                        }}
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <br></br>
                        <br></br>

                        <Card.Text
                          className="countInStock"
                          style={{
                            color: item.countInStock < 1 ? "red" : "blue",
                          }}
                        >
                          <span>
                            {item.countInStock < 1
                              ? "Not"
                              : `${item.countInStock}`}
                            Available{" "}
                          </span>
                        </Card.Text>
                        <br></br>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          <Card.Text>Price:{item.price}$ </Card.Text>
                          <Card.Text>Rating:{item.rating} </Card.Text>
                          
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Proudct;
