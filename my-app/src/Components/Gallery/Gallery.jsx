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
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Ffamilia%2FJDA_4853.jpg?alt=media&token=2aac975b-bc09-412d-9ef7-30c9bccd6c20', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28001418_1653239541418903_1628268679_n.jpg?alt=media&token=4fd51d4f-a0e5-4242-9735-9aabd7d1b9c0', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28052644_1653242508085273_1732156477_n.jpg?alt=media&token=384a8cfc-38f4-4218-a770-9ea02f266b0d', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28052897_1653239461418911_722643850_n.jpg?alt=media&token=7c221c16-e156-4608-84d3-d2b2c2b1e38b', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28053173_1653239498085574_257267556_n.jpg?alt=media&token=e47c7246-130e-4a50-8814-b53f3d210ddc', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28053535_1653239514752239_140775826_n.jpg?alt=media&token=4ef459df-e0e6-401a-add6-873aafc82392', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28053762_1653239528085571_1972426034_n.jpg?alt=media&token=0bef2840-1176-4c73-874d-f94398856698', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28054337_1653242511418606_805996669_n.jpg?alt=media&token=529e7db8-3c7b-4943-a93d-a6b4e2b8b532', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109436_1653239478085576_2140606983_n.jpg?alt=media&token=ed090291-c822-436e-9bdf-62d138f01507', width: 2, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109650_1653242598085264_186299429_n.jpg?alt=media&token=a60fbad0-5772-45c6-b125-fafcfe459377', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109693_1653239491418908_1500697420_n.jpg?alt=media&token=481e0a3a-4ff4-4f35-8309-dc4e40a9ca40', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109717_1653239661418891_1396363728_n.jpg?alt=media&token=b5a262bc-7d1c-4eb4-a395-59a5513cb3ca', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109823_1653239548085569_1887718178_n.jpg?alt=media&token=62f2ffab-ae3e-4049-a8c3-e19ac190c332', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109931_1653239574752233_2011408957_n.jpg?alt=media&token=23391d65-5d35-4b32-af78-4d82040bfcfe', width: 3, height: 2 },
  { src: 'https://firebasestorage.googleapis.com/v0/b/site-clara-6f8e8.appspot.com/o/gallery%2Fclara%2F28109944_1653239464752244_1905464985_n.jpg?alt=media&token=8b8cbe6a-e026-496b-9166-39051bb9f3c0', width: 3, height: 2 }
]

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="gallery-container">
          <p className="gallery-container__title">MENSAGEM DA MAMÃE</p>
          <p className="messages-container"> É com uma alegria ímpar que estamos comemorando o primeiro ano da nossa Clara. E diga-se de passagem o melhor ano de nossas vidas. 
            É lindo ver o crescimento e o desenvolvimento de nossos filhos e juntamente com eles poder crescer. Crescer a cada dia e compartilhar suas vitórias e descobertas. 
            A cada fase da vida, vamos cortando e refazendo o cordão umbilical, errando na intenção de acertar e sendo imensamente grata por poder ensinar o que aprendemos de nossos pais. 
            Não existe manual para criar um filho, o que eles precisam é ter certeza de que estamos lá, firmes, na concordância ou na divergência, no sucesso ou no fracasso, com o peito aberto para o aconchego, o abraço apertado e o conforto nas horas difíceis. Não podemos impedir todos os tombos, não podemos dizer SIM para tudo, mas podemos andar de mãos dadas para o caminho da evolução. 
            Minha filha, obrigada por me ensinar, por me fazer crescer e me permitir ser sua mãe. Eu te amo mais do que tudo que possa existir e sei que caminharemos juntas por todo o sempre e você terá de mim o melhor que eu conseguir fazer por você. Muita luz minha Clara. Muita vida, muito amor. Eu te amo infinitamente. Parabéns pelo seu primeiro ano! Seja feliz.
            Com amor, da sua mãe.
          </p>
       </div>
       <div className="gallery-container">
          <p className="gallery-container__title">MENSAGEM DO PAPAI</p>
          <p className="messages-container">Meu dia amanheceu brilhando, eu sentia o cheiro de amor. Tudo que eu vivi até este dia ficou realmente para trás e me tornei um novo ser humano com a chegada da minha maior luz, a Clara. 
             Meus pés suavam, e meu estomago embrulhava de tanto amor e insegurança e toda essa experiência me fez crescer e minha vida hoje tem outro sentido. Te amo mais do que tudo minha esfirra! ❤
          </p>
       </div>
        <div className="gallery-container">
          <p className="gallery-container__title">GALERIA DE FOTOS</p>
          <Pictures photos={PHOTO_SET}></Pictures>
        </div>
      </div>
    )
  }
}