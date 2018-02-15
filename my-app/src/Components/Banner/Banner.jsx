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
                infiniteLoop={false}
                autoPlay={false}
            >
                <div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4689.jpg?alt=media&token=b54573af-0700-4f4b-8c52-cb69c2f0fa62" alt="Banner Clara"/>
                </div>
            </Carousel>
        )
    }
}