import React, { Component } from 'react'
import Pictures from '../Pictures/Pictures'
import './Gallery.css'

const PHOTO_SET = [
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_0851.jpg?alt=media&token=635081d6-41d9-49c7-ae33-2e4f40e34427', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1057.jpg?alt=media&token=04af1404-a6be-40d0-9de6-079558f61a91', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1123.jpg?alt=media&token=5a9d495e-e64c-46b5-886f-a7ac06ba4322', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1144.jpg?alt=media&token=97471d5f-d7eb-4343-a6f0-07495099a374', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1155.jpg?alt=media&token=a0123ec3-d339-4fa3-8e82-88bf1b48daa8', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1191.jpg?alt=media&token=1e60655a-ce77-4e0b-92d8-ded396f33f64', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fespera%2FJDA_1283.jpg?alt=media&token=e689e970-5906-42fd-906c-67bcc5d08de6', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_1513.jpg?alt=media&token=d42d1ab7-c366-4a4b-b770-73abf91fb685', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4689.jpg?alt=media&token=b54573af-0700-4f4b-8c52-cb69c2f0fa62', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4725.jpg?alt=media&token=8dde0c8b-2a94-4e5c-ad18-6c4996d5b86f', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4737.jpg?alt=media&token=6930150e-eb45-426a-96b8-db26cc340571', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4755.jpg?alt=media&token=43dff47e-16a5-46ec-ad3f-5d61c8b9551b', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4765.jpg?alt=media&token=1a6f3616-d98a-43cd-aec2-14ae209464a4', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4779.jpg?alt=media&token=067d0bc6-d48d-4688-9895-95c6ed18b9b0', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4793.jpg?alt=media&token=b03a40ae-0b44-4b33-b703-7fce4fc1da7b', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4808.jpg?alt=media&token=322fcdca-e308-48d4-9af6-8e2f09fa6c32', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4844.jpg?alt=media&token=555eb7ab-2560-4880-99cd-e62bafec233d', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4853.jpg?alt=media&token=2aac975b-bc09-412d-9ef7-30c9bccd6c20', width: 3, height: 2 }
]

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <p className="gallery-container__title">GALERIA DE FOTOS</p>
        <Pictures photos={PHOTO_SET}></Pictures>
      </div>
    )
  }
}