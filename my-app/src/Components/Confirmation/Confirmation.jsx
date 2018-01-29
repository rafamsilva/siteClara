import React, { Component } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './Confirmation.css'

export default class Confirmation extends Component {
  render() {
    return (
      <div className="confirmation-container">
        <TitleComponent title="CONFIRME SUA PRESENÇA" background="white"/>
        <form className="confirmation-form">
            <div className="confirmation-form__fields">
                <div>
                    <input type="text" placeholder="Nome do convidado (como no convite)" />
                    <input type="email" placeholder="E-mail" />
                </div>
                <div>
                    <input type="number" placeholder="Número de adultos" />
                    <input type="number" placeholder="Número de crianças" />
                </div>
                <div>
                    <span> Vocé irá ao evento </span>
                    <input type="checkbox" id="yesConfirmation" value="sim"/>
                    <label for="yesConfirmation">Sim</label>
                    <input type="checkbox" id="noConfirmation" value="nao"/>
                    <label for="noConfirmation">Não</label>
                </div>
            </div>
            <div>
                <button type="submit">ENVIAR</button>
            </div>
        </form>
      </div>
    )
  }
}