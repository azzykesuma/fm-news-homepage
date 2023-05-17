import React, { useState } from 'react'
import Image from 'next/image'
// images
// import imageComputer from '../src/images/image-retro-pcs.jpg'
// import topLaptop from '../src/images/image-top-laptops.jpg'
interface newsObject {
    id: number;
    title: string;
    content: string;
    imageSrc: string
}
export default function News3() {
    const news:newsObject[] = [
        {
            id: 1,
            title: 'Reviving Retro PCs',
            content: 'What happens when old PCs are given modern upgrades?',
            imageSrc: '/images/image-retro-pcs.jpg'
        },
        {
            id: 2,
            title: 'Top 10 Laptops of 2022 ',
            content: 'Our best picks for various needs and budgets',
            imageSrc: '/images/image-top-laptops.jpg'
        },
        {
            id: 3,
            title: 'The Growth of Gaming',
            content: 'How the pandemic has sparked fresh opportunities',
            imageSrc: '/images/image-gaming-growth.jpg'
        }
    ]
  return (
    <section id='news_bottom'>
        {news.map((item,index) => (
            <div key={item.id} className="news_bottom_item">
                <Image
                src={item.imageSrc}
                alt={item.title}
                width={140}
                height={150}
                className='image_news_bottom'
                />
                <div className="news_bottom_item_content">
                    <h2>0{index + 1}</h2>
                    <a href='#' className='header_link'>{item.title}</a>
                    <p>{item.content}</p>
                </div>
            </div>
        ))}
    </section>
  )
}
