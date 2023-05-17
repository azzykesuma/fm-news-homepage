import React from 'react'
import image_news_1 from '../src/images/image-web-3-mobile.jpg'
import image_news_1_desktop from '../src/images/image-web-3-desktop.jpg';
import Image from 'next/image'
export default function News1() {
  return (
    <section id='news_header'>
      <Image
        src={image_news_1}
        alt="News Image"
        width={500}
        height={300}
        className='image-mobile'
      />
      <Image
        src={image_news_1_desktop}
        alt="News Image"
        className='image-desktop'
      />
        <div className="content_container">
          <h1>The Bright Future of WEB 3.0?</h1>
          <div className="header_inf_btn_container">
            <p>We dive into the next evolution of the web that claims to put the power of the platform back into the hands of the people. but is it really a fullfilling promise?</p>
            <button>READ MORE</button>
          </div>
        </div>
    </section>
  )
}
