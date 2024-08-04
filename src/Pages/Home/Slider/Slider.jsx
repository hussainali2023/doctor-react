import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";

const Slider = () => {
    const bannerImages = [
        {
            banImage: img1,
            banId: "slide1",
            nextSlide: "#slide2",
            prevSlide: "#slide6"
        },
        {
            banImage: img2,
            banId: "slide2",
            nextSlide: "#slide3",
            prevSlide: "#slide1"
        },
        {
            banImage: img3,
            banId: "slide3",
            nextSlide: "#slide4",
            prevSlide: "#slide2"
        },
        {
            banImage: img4,
            banId: "slide4",
            nextSlide: "#slide5",
            prevSlide: "#slide3"
        },
        {
            banImage: img5,
            banId: "slide5",
            nextSlide: "#slide6",
            prevSlide: "#slide4"
        },
        {
            banImage: img6,
            banId: "slide6",
            nextSlide: "#slide1",
            prevSlide: "#slide5"
        },
    ]

    return (
        <div>
            <div className="carousel w-full">
                {
                    bannerImages.map((item) => (
                        
                            <div key={item.banId} id={item.banId} className="carousel-item relative w-full">
                                <img
                                
                                    src={item.banImage}
                                    className="w-full max-h-screen" />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href={item.prevSlide} className="btn btn-circle">❮</a>
                                    <a href={item.nextSlide} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default Slider;