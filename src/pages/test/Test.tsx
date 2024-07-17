
import "./test.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Test =()=>{

    return(
        <div className={"test"}>
            Test animation

            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{clickable:true}}
                scrollbar={{draggable:true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {/*{slides.map((slide)=>{*/}
                {/*    return <SwiperSlide>*/}
                {/*        <div className={"h-48"}>*/}
                {/*            <img className={"w-72 object-center"} src={"./pic1.jpg"} alt={"pic1"}/>*/}
                {/*        </div>*/}
                {/*    </SwiperSlide>*/}
                {/*})}*/}
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
                {/*pagination*/}
            </Swiper>

            <div className={"flex flex-row gap-x-14 mt-4"}>
                <img className={"animate-pulse hover:-rotate-6 w-[28%] border-8 border-amber-300"} src={"./pic4.jpg"} alt={"pic4"}/>
                <img className={"animate-wiggle w-[18%] object-contain border-8 border-amber-300"} src={"./pic6.jpg"} alt={"pic6"}/>
            </div>

            <section className={"mt-6"}>
                <h1 className={"text-left animate-wiggle"}>template</h1>
            </section>
        </div>
    )
}

export default Test;