import Carousel from 'react-bootstrap/Carousel';


function Corousel() {
   return (
    <>
    <Carousel>
      <Carousel.Item interval={1000} >
        <img  width={900} height={500} alt="900x500"
          className="d-block w-100"
          src="/images/4.jpg"
          // alt="image 1"
        />
        <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={900} height={500} alt="900x500"
          className="d-block w-100"
          src="/images/6.jpg"
          // alt="image 1"
        />
        <Carousel.Caption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={900} height={500} alt="900x500" 
          className="d-block w-100"
          src="/images/8.jpg"
          // alt="image 1"
        />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={900} height={500} alt="900x500"
          className="d-block w-100"
          src="/images/5.jpg"
          // alt="image 2"
        />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img  width={900} height={500} alt="900x500"
          className="d-block w-100"
          src="/images/6.jpg"
          // alt="image 1"
         
        />
        <Carousel.Caption>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}

export default Corousel;