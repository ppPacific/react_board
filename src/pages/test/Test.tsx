
import "./test.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const Test =()=>{

    return(
        <div className={"test"}>
            Test animation

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={"h-48"}>
                        <img className={"w-72 object-center"} src={"./pic1.jpg"} alt={"pic1"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"h-48 overflow-y-clip"}>
                        <img className={"w-72 object-center"} src={"./pic2.jpg"} alt={"pic2"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"h-48 overflow-y-clip"}>
                        <img className={"w-72 object-center"} src={"./pic3.jpg"} alt={"pic3"}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={"h-48 overflow-y-clip"}>
                        <img className={"w-72 object-contain"} src={"./pic4.jpg"} alt={"pic4"}/>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>

            <div>
                <img className={"hover:-rotate-6 w-[38%] border-8 border-amber-300"} src={"./pic4.jpg"} alt={"pic4"}/>

            </div>
        </div>
    )
}

export default Test;