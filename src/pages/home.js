import React, { useState, useEffect } from 'react'
import Rating from '../components/rating/rating'
import './home.css';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import dataF from '../data/data.json';
import imgc1 from '../images/coffeehouses/coffeehouse-1.png';
import imgc2 from '../images/coffeehouses/coffeehouse-2.png';
import imgc3 from '../images/coffeehouses/coffeehouse-3.png';
import imgc4 from '../images/coffeehouses/coffeehouse-4.png';

const Home = (props) => {

    const timeSlider = 10;
    let slider = document.querySelector(".slider-content");
    let tally = document.querySelector(".count");
    let [index, setIndex] = useState(0);
    let [start, setStart] = useState(false);
    let [dataFamouse, setDataFamouse] = useState(dataF)

    useEffect(() => {
        let timer;

        if (start) {
            timer = setInterval(() => {
                nextSlider();
                setTally();
            }, timeSlider * 1000)
        }

        return () => clearTimeout(timer)
    }, [start, index]);

    document.body.onload = (e) => {
        if (!start) {
            setStart(true)
        }
    }


    function counter(index, f, count) {
        index += f % count;
        if (index >= count) return index - count;
        else if (index < 0) return count - 1;
        return index;
    }

    function nextSlider() {
        setIndex(counter(index, +1, slider.children.length));
        const ps = slider.children[counter(index, -1, slider.children.length)];

        slider.children[index].classList.remove("hidden");
        slider.children[index].classList.add("animation");
        ps.classList.remove("animation");
        ps.classList.add("animation-end");

        setTimeout(() => {
            ps.classList.add("hidden")
            ps.classList.remove("animation-end")
        }, 1000);
    }

    function prevSlider() {
        setIndex(counter(index, -1, slider.children.length));
        const np = slider.children[counter(index, +1, slider.children.length)];

        slider.children[index].classList.remove("hidden");
        slider.children[index].classList.add("animation");
        np.classList.remove("animation");
        np.classList.add("animation-end");
        setTimeout(() => {
            np.classList.remove("animation-end");
            np.classList.add("hidden");
        }, 1000);
    }

    function setTally() {
        const tallyChildren = tally.children;
        for (let i = 0; i < tallyChildren.length; i++) {
            const ch = tallyChildren[i];
            ch.classList.remove("active-slider");
            if (i === index) ch.classList.add("active-slider");
        }
    }

    function putCofeehouses() {
        let imgs = {imgc1,imgc2,imgc3,imgc4}
        return dataFamouse.map(({ img, name, rating, like, description }, i) =>
            <div key={i} className="coffeehouse-items">
                <div className="img-like">
                    <img src={imgs[`imgc${i+1}`]} alt={name} />
                    <div className="like">
                        <i className={`fa ${like ? "fa-heart" : "fa-heart-o"}`}></i>
                    </div>
                </div>
                <Rating value={rating} />
                <div className="content-coffeehouse">
                    <div className="name-coffehouse">{name}</div>
                    <div className="description">{description}</div>
                </div>
            </div>
        )
    }

    return (
        <main className="home">

            <div className="slider">
                <button onClick={() => {
                    prevSlider();
                    setTally();
                }} id="prev"></button>
                <button onClick={() => {
                    nextSlider();
                    setTally();
                }} id="next"></button>
                <div className="slider-content">
                    <div className="clip animation">
                        <img src={img1} alt="alone" />
                        <div className="content">
                            <p>محلی است عمومی؛ که در آن نوشیدنی غیرالکلی و گاه غذاهای سبک عرضه می‌شود </p>
                            <button>شروع</button>
                        </div>
                    </div>
                    <div className="clip hidden">
                        <img src={img2} alt="alone" />
                        <div className="content">
                            <p>کافه و کافی شاپ در کلمه کاملا شبیه به هم هستند؛ اما نباید کافه را با کافی‌شاپ اشتباه کرد</p>
                            <button>شروع</button>
                        </div>
                    </div>
                    <div className="clip hidden">
                        <img src={img3} alt="alone" />
                        <div className="content">
                            <p>کافی‌شاپ‌ها جای چایخانه‌ها را تنگ کرد. در چایخانه‌های ایران به‌جای سرو قهوه، بیش‌تر چای و انواع غذاهای سنتی ایرانی با موزیک زندهٔ ایرانی ارائه می‌شود</p>
                            <button>شروع</button>
                        </div>
                    </div>
                    <div className="clip hidden">
                        <img src={img4} alt="alone" />
                        <div className="content">
                            <p>روز به روز کافه و کافی شاپ در تلاش اند تا با آفرینش فضایی مناسب تر بیشتر و بیشتربه هویت آرمانی کافه وکافی شاپ نزدیک شوند.</p>
                            <button>شروع</button>
                        </div>
                    </div>
                </div>
                <div className="count">
                    <span className="tally active-slider"></span>
                    <span className="tally"></span>
                    <span className="tally"></span>
                    <span className="tally"></span>
                </div>
            </div>

            <div className="famouse-coffeehouse">
                <div className="title">کافه های معروف</div>
                <div className="coffeehouses">
                    {putCofeehouses()}
                </div>
            </div>

        </main>
    )
}


export default Home