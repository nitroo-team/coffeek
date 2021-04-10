import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import profile_img from '../../images/profile.jpeg';
import './menu.css';


const Menu = (props) => {

    let [showMenu, setShowMenu] = useState(false);

    return (
        <main className={`menu ${showMenu ? "show-menu" : ""}`}>
            <div className="icon-menu">
                <span onClick={() => setShowMenu(!showMenu)} className="icon"></span>
            </div>
            <div className="conetent-menu">
                <ul>
                    <li>
                        <Link to="/changeProfile" className="link">
                            <div className="profile">
                                <img src={profile_img} alt="profile" />
                            </div>
                            <p>
                                محمد حسین مکتوبیان
                        </p>
                        </Link>
                    </li>
                    <span className="line"></span>
                    <li><Link to="/home" className="link"> <i className="fa fa-home"></i><p>خانه</p></Link></li>
                    <li><Link to="/card" className="link"> <i className="fa fa-shopping-cart"></i><p>خرید ها</p></Link></li>
                    <li><Link to="/favoriteCoffeehouse" className="link"><i className="fa fa-heart-o"></i><p>کافه های مورد علاقه </p></Link></li>
                    <li><Link to="/coffeehouses" className="link"><i className="fa fa-coffee"></i><p>کافه ها</p></Link></li>
                    <li><a target="_blank" rel="noreferrer" href="https://alis.ir/famous-coffee-shop-drinks/" className="link"><i className="fa fa-beer"></i><p>درباره انواع نوشیدنی ها</p></a></li>
                    <li><Link to="/aboutUs" className="link"><i className="fa fa-desktop"></i><p>درباره ما</p></Link></li>
                </ul>
            </div>
            <div className="search">
                <div className="search-content">
                    <i onClick={() => setShowMenu(!showMenu)} className="fa fa-search"></i>
                    <input type="text" placeholder="جست و جو..." />
                    <button>برو</button>
                </div>
            </div>
        </main>
    )
}

export default Menu;