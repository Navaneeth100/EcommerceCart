import React, { useEffect, useState ,useContext } from 'react';
import LoginVideo from '../assets/LoginVideo.mp4';
import { Container, Row, Col } from 'reactstrap';
import { AppContext } from './Context';


const Home = () => {
    
    const { value, setValue } = useContext(AppContext);
    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json())
        .then(json => setproducts(json))
    }, [])
    
    useEffect(() => {
        const handleScroll = () => {
        const halfwayPoint = document.documentElement.scrollHeight / 6
        setValue(window.scrollY > halfwayPoint ? true : false); 
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);   
      }, []);

console.log(value);

    return (
        <Container fluid>
            <Row>
                <Col md="12" className="m-0 p-0">
                    <div className="position-relative" style={{ height: "773px", overflow: "hidden" }}>
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="position-absolute w-100 h-100 " 
                            style={{ objectFit: "cover" }}
                        >
                            <source src={LoginVideo} type="video/mp4" />
                        </video>
                    </div>
                </Col>
            </Row>
        <div className='text-start mb-4 mt-4 ms-2'>
          <h1 className='fw-bold'>OUR BEST SELLERS</h1>
        </div>

        {/* products view */}
        
        <div className='scroll d-flex flex-wrap justify-content-center'>
          {products.map((item) => (
            <div className="card rounded me-3 mb-3" style={{ width: "20rem" , height:"500px"}} key={item.id}>
              <img
                src={item.image}
                className="card-img-top"
                alt="..."
                style={{ height: "300px" }}
              />
              <div className="card-body">
                <div className='d-flex justify-content-between align-items-center'>
                  <span className='fw-bold' style={{ fontSize: "12px", color: "grey" }}>{item.category}</span>
                  {/* <span className={`badge t`} style={{ fontSize: "12px" }}>{item.topOffer}</span> */}
                </div>
                <h5 className='mt-2'>{item.name}</h5>
                <p>{item.rating?.rate}</p>
                <span className='fw-bolder' style={{ fontSize: "20px" }}>₹{item.price}</span>
                <span className='fw-bold ms-2' style={{ fontSize: "15px", color: "grey", textDecoration: "line-through" }}>₹{item.price}</span>
                <span className='fw-bold ms-2' style={{ fontSize: "15px", color: "green" }}>₹{item.price}</span><br />
                <div className='text-center mt-3'>
                  <button className="btn fw-bold btn-outline-dark" type="button" style={{ width: "200px" }}>
                    {!item.cart ? "Add to Cart" : "Remove from Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>
    );
}

export default Home;
