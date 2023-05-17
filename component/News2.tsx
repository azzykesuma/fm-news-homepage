import React from 'react'
export default function News2() {
  return (
    <section id='news_mid'>
        <h2>New</h2>
        <div className="news_item_container">
            <div className="news_item">
                <a href='#' className='header_link'>Hydrogen VS Electric Cars</a>
                <p>
                    Will Hydrogen-fueled cars ever catch up to EVs?
                </p>
            </div>
            <div className="news_item">
                <a href='#' className='header_link'>The Downside of AI Artistry</a>
                <p>
                    What are the possible adverse effect of on-demand AI image generation?
                </p>
            </div>
            <div className="news_item">
                <a href='#' className='header_link'>Is VC Funding Drying Up?</a>
                <p>
                    Private funding by VC firms is down 50% YOY. We take a look on what that means. 
                </p>
            </div>
        </div>
    </section>
  )
}
