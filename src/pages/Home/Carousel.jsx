import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel className='h-100' variant="dark">
      <Carousel.Item className='h-100'>
        <img
         style={{objectFit:"cover"}}
          className="d-block w-100 h-100 "
          src="https://t4.ftcdn.net/jpg/03/09/86/97/360_F_309869755_IquCHHxF7YABo2odctUGEjMrgVDSM8qV.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item className='h-100'>
        <img
        style={{objectFit:"cover"}}
          className="d-block w-100 h-100"
          src="https://st2.depositphotos.com/1158045/10108/i/450/depositphotos_101089268-stock-photo-woman-holding-shopping-bags.jpg"
          alt="First slide"
        />

      </Carousel.Item>


    </Carousel>
  );
}

export default DarkVariantExample;