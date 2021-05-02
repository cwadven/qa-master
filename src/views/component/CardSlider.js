import Slider from "react-slick";
import CustomCard from "./CustomCard";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({array}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return(
        <Slider {...settings}>
            {array.map((elem, i)=>{
                return <CustomCard array={elem} key={i}/>
            })}
        </Slider>
    );
}

export default CardSlider;