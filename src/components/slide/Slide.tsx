import SwiperCore, { Autoplay, Pagination } from "swiper";
import './slide.scss'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "./Card";
SwiperCore.use([Autoplay, Pagination]);

interface dataType
{
    img: string,
    name : string,
    desc : string
}

interface ImgProps {
    data: dataType[];
}

const Slide = ({data}:ImgProps) => {
    // const [imgCount, setImgCount] = useState(0)
    // useEffect(() => {
    //     if(imgCount === 7){
    //         setTimeout(() => {
    //             setIsLoading(false)
    //         }, 500);
    //     }
    // }, [imgCount, setIsLoading]);
    // const onLoad =()=>{
    //     setImgCount(imgCount + 1)
    // }
    const [step, setStep] = useState(16)
    const [idx, setIdx] = useState(0)

    const handleClick = (value:string)=>{
        if(value === 'left'){
            if (idx > 0){
                setIdx(idx-1)
            }else{
                setIdx(3)
            }
        }
        if(value === 'right'){
            if (idx < 3){
                setIdx(idx+1)
            }
            else{
                setIdx(0)
            }
        }
    }
    const isTabletOrMobile = useMediaQuery({ query: 'screen and (max-width: 576px) and (orientation:portrait)' })
    const isLandOrMobile = useMediaQuery({ query: 'screen and (max-height: 576px) and (orientation:landscape)' })

    useEffect(() => {
        if (isTabletOrMobile){
            setStep(72)
        }

        if (isLandOrMobile){
            setStep(32)
        }
        if (!isLandOrMobile && !isTabletOrMobile){
            setStep(32)
        }

        let myInterval = setInterval(() => {
            idx === 3 ? setIdx (0) : setIdx (idx + 1)

        }, 5000)
        return ()=> {
            clearInterval(myInterval);
        };
        
    },[isTabletOrMobile, isLandOrMobile, setStep, idx, setIdx]);
    const onPage= (id : number)=>{
        setIdx(id)
    }
    return (
        <div className="slide">
            <div className="slideView" data-aos="fade-up">
                <div className="slideList" style={{transform: `translateX(${-(idx) * step}vw)`}}>
                    {data.map((d, i)=>(
                        <Card key = {i} data={d}/>
                    ))}

                    {data.map((d, i)=>(
                        <Card key = {i} data={d}/>
                    ))}

                    {data.map((d, i)=>(
                        <Card key = {i} data={d}/>
                    ))}
                </div>
            </div>
            <div className="pagenation">
                    {data.map((d, i)=>(
                        <div 
                            key = {i}
                            className="page" onClick={()=>{onPage(i)}}
                            style = {{backgroundColor : idx === i ? "#ffffff":"#48a0cf"}}
                        ></div>
                    ))}
            </div>
            <div 
                className="leftBtn" 
                onClick={()=>{handleClick('left')}}
            >
                <img src="assets/arrow_left.png" alt="" />
            </div>
            <div 
                className="rightBtn" 
                onClick={()=>{handleClick('right')}}
            >
                <img src="assets/arrow_right.png" alt="" />
            </div>
        </div>
    )
}

export default Slide
