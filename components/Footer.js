import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import To_top from './To_top'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <To_top />
                <div className="footer__inner">
                    <div className="footer__col footer__col--left">
                        <div className="footer__block">
                            <Link href="/" className="footer__logo">
                                <Image src="/img/logo.svg" alt="logo" width={120} height={40} />
                            </Link>
                            <div className="footer__link">
                                Психотерапія та <br /> ментальне здоров’я
                            </div>
                            <a href="mailto:" className="footer__mail-link">Support@mymental.com.ua</a>
                            <a href="#" className="social-btn">
                                <span className="social-btn__icon">
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.4998 0.775709L15.6529 15.1293C15.6529 15.1293 15.2549 16.1246 14.1598 15.6468L7.56063 10.5959C8.44762 9.79856 15.3288 3.61212 15.6297 3.33157C16.0948 2.89739 15.8062 2.63899 15.2655 2.96735L5.10145 9.42204L1.18012 8.10192C1.18012 8.10192 0.562777 7.8829 0.503363 7.40512C0.443598 6.92735 1.20016 6.6686 1.20016 6.6686L17.1861 0.397428C17.1861 0.397428 18.4998 -0.179838 18.4998 0.775709Z"
                                            fill="currentColor" />
                                    </svg>
                                </span>
                                Telegram
                            </a>
                        </div>
                        <div className="footer__copy">
                            <span>© 2024 MyMental. Всі права захищені.</span>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title-sm">Навігація</div>
                        <ul className="footer__list">
                            <li><Link href="/about">Про нас</Link></li>
                            <li><Link href="/experts">Всі фахівці</Link></li>
                            <li><Link href="/therapists">Психотерапевтам</Link></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title-sm">Юридична інформація</div>
                        <ul className="footer__list">
                            <li><Link href="/disclaimer">Дисклеймер</Link></li>
                            <li><Link href="/policy">Політика використання</Link></li>
                            <li><Link href="/license">Ліцензійна угода Умови</Link></li>
                            <li><Link href="/terms">Умови та положення</Link></li>
                            <li><Link href="/privacy">Політика конфіденційності</Link></li>
                            <li><Link href="/offer">Договір публічної оферти</Link></li>
                            <li><Link href="/user-agreement">Угода користувача</Link></li>
                        </ul>
                    </div>
                    <div className="footer__col">
                        <div className="footer__title-sm">Корисна інформація</div>
                        <ul className="footer__list">
                            <li>0 800 505 201 - Гаряча лінія МОЗ</li>
                            <li>0 800 60 20 19 - Контакт-центр МОЗ</li>
                            <li><a className='footer__link-mail' href="mailto:">moz.gov.ua</a></li>
                            <li>7333 - Цілодобова гаряча лінія з попередження суїцидів та психологічної підтримки Lifeline Ukraine для ветеранів</li>
                            <li>0–800–501–701 - Всеукраїнський телефон довіри</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copy">
                        <span>© 2024 MyMental. Всі права захищені.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
