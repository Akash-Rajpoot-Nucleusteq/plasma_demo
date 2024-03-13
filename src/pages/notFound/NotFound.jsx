import React from "react";
import { Container, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import notFoundImage from "../../assets/images/404Error.jpg";
const NotFound = () => {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-50'>
      <Image
        src={notFoundImage}
        alt='404 Not Found'
        fluid
        className='img-fluid'
        style={{ maxWidth: "50%", maxHeight: "50%" }}
      />
    </Container>
  );
};

export default NotFound;
