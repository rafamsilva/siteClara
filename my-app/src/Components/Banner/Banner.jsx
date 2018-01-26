import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import banner1 from '../../Assets/Img/banner.png'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import './Banner.css'

export default class Banner extends Component {
    render() {
        return (
            <Carousel 
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
            >
                <div>
                    <img src={banner1} alt="Banner Clara"/>
                </div>
                <div>
                    <img src={banner1} alt="Banner Clara"/>
                </div>
                <div>
                    <img src={banner1} alt="Banner Clara"/>
                </div>
            </Carousel>
        )
    }
}