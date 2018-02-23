import React, { Component } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './Confirmation.css'

export default class Confirmation extends Component {
  constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        amountAdults: '',
        amountChildrens: '',
        goingEvent: false,
        showConfirmation: true
      }
  }
  submitConfirmation = (event) => {
    event.preventDefault()
    let dbcon = this.props.dbase.database().ref('/confirmation')
    dbcon.push({
      name: this.state.name,
      email: this.state.email,
      amountAdults: this.state.amountAdults,
      amountChildrens: this.state.amountChildrens,
      goingEvent: this.state.goingEvent
    })
    this.setState({showConfirmation: false})
  }
  render() {
    return (
      <div className="confirmation-container">
        <TitleComponent title="CONFIRME SUA PRESENÇA" background="white"/>
        { this.state.showConfirmation ? <form className="confirmation-form" onSubmit={this.submitConfirmation}>
            <div className="confirmation-form__fields">
                <div>
                    <input type="text" placeholder="Nome do convidado (como no convite)" onChange={e => this.setState({name: e.target.value})} required value={this.state.name}/>
                    <input type="email" placeholder="E-mail" onChange={e => this.setState({email: e.target.value})} value={this.state.email}/>
                </div>
                <div>
                    <input type="number" onChange={e => this.setState({amountAdults: e.target.value})} value={this.state.amountAdults} placeholder="Número de adultos" required/>
                    <input type="number" onChange={e => this.setState({amountChildrens: e.target.value})} value={this.state.amountChildrens} placeholder="Número de crianças" required/>
                </div>
                <div>
                    <span> Vocé irá ao evento? </span>
                    <input type="radio" name="confirmation" onClick={() => this.setState({goingEvent: true})} id="yesConfirmation" value="true"/>
                    <label htmlFor="yesConfirmation">Sim</label>
                    <input type="radio" name="confirmation" onClick={() => this.setState({goingEvent: false})} id="noConfirmation" value="false"/>
                    <label htmlFor="noConfirmation">Não</label>
                </div>
            </div>
            <div className="confirmation-form__button">
                <button type="submit" title="Confirmar Presença">ENVIAR</button>
            </div>
        </form>
        : <p>Obrigado pela confirmação!</p> }
      </div>
    )
  }
}