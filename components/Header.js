import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__inner">
                    <Link href="#" className="header__logo">
                        <Image src="/img/logo.svg" alt="logo" width={120} height={40} />
                    </Link>
                    <Link href="#" className="header__logo header__logo--mobile">
                        <Image src="/img/mobile-logo.svg" alt="logo" width={80} height={30} />
                    </Link>

                    <div className="header__actions">
                        <div className="mobile">
                            <Link href="#" className="header__user _icon-user">
                                Увійти
                            </Link>
                        </div>
                        <div className="desktop">
                            <Link href="../"  className="link-back">
                                Повернутися назад
                            </Link>
                        </div>
                    </div>

                    <div className="mobile">
                        <div className="header__menu menu">
                            <button type="button" className="menu__icon icon-menu"><span></span></button>
                            <nav className="menu__body">
                                <ul className="menu__list">
                                    <li className="menu__item">
                                        <Link href="#"  className="menu__link">
                                            Про нас
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <Link href="#"  className="menu__link">
                                            Наші фахівці
                                        </Link>
                                    </li>
                                    <li className="menu__item">
                                        <button className="menu__link _icon-chevron">Спеціалістам</button>
                                        <ul>
                                            <li><Link href="#">Спеціаліст</Link></li>
                                            <li><Link href="#">Спеціаліст</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
