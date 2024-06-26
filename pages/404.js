// pages/404.js
import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <div class="wrapper  auth-page">
        <Head>
          <title>404</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
        <main className="page">
          <div className="container">
            <div className="frame frame-register" style={{ position: 'relative' }}>
              <div className="register">
                <div className="register__inner">
                  <div className="register__img">
                    <img src="/img/page-not-found.svg" alt="404"/>
                  </div>
                  <h1 className="register__title">Упсссс, сторінку не найдено</h1>
                  <div className="register__bottom">
                    <Link href="/home.html" className='btn-md'>
                        На головну
                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.752 4.99921C13.752 5.16179 13.7167 5.32244 13.6485 5.47002C13.5803 5.61761 13.4808 5.74861 13.357 5.85395L8.7451 9.78466C8.66934 9.84876 8.57126 9.88022 8.47235 9.87214C8.37344 9.86406 8.28176 9.8171 8.21741 9.74155C8.15306 9.66601 8.12128 9.56803 8.12903 9.46909C8.13678 9.37016 8.18343 9.27833 8.25877 9.21372L12.7637 5.37421H0.626953C0.527497 5.37421 0.432114 5.3347 0.361788 5.26438C0.291462 5.19405 0.251953 5.09867 0.251953 4.99921C0.251953 4.89976 0.291462 4.80437 0.361788 4.73405C0.432114 4.66372 0.527497 4.62421 0.626953 4.62421H12.7637L8.2588 0.784662C8.18347 0.720059 8.13682 0.628228 8.12907 0.529291C8.12131 0.430354 8.1531 0.332378 8.21745 0.256831C8.2818 0.181284 8.37348 0.134326 8.47239 0.126246C8.5713 0.118166 8.66938 0.149623 8.74514 0.213725L13.3568 4.14421C13.4807 4.24957 13.5802 4.38061 13.6484 4.52824C13.7167 4.67587 13.752 4.83658 13.752 4.99921Z"
                            fill="currentColor"
                          />
                        </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>

    </>
  );
};

export default Custom404;
