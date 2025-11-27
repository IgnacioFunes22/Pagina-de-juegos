import "./Album.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import Slider from "react-slick";

type Props = {
  imagenes: string[];
  titulo: string;
};

function Album({ imagenes, titulo }: Props) {
  const [imgSelec, setImgSelec] = useState<string>("");

  useEffect(() => {
    setImgSelec(imagenes[0]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      {imgSelec && (
        <div className="album">
          <img src={imgSelec} alt={titulo} />
        </div>
      )}

      <div className="slider-container barra">
        <Slider {...settings}>
          {imagenes.map((imagen) => (
            <div
              className="Celda"
              onClick={() => setImgSelec(imagen)}
              key={imagen}
            >
              <img src={imagen} className="visual" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Album;
