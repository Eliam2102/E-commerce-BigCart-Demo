import '../assets/styles/CarouselClientes.css';
import image1 from '../assets/img/tecnomundo.png';
import image2 from '../assets/img/Walmart-Logo.png';
import image3 from '../assets/img/extra-logo.png';
import image4 from '../assets/img/OXXO-Logo.png';
import image6 from '../assets/img/plza de la tec.png';
import image7 from '../assets/img/frikiplaza-png.png';

const images = [image1, image2, image3, image4, image6, image7, image1, image2, image3, image4, image6, image7];

const TapeClientes = () => {
  return (
    <div className="tape-categorias-container">
      <div className="slider">
        <div className="slide-track">
          {images.map((imgSrc, index) => (
            <div className="slide" key={index}>
              <img
                src={imgSrc}
                height="100"
                width="250"
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TapeClientes;
