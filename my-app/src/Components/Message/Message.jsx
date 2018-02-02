import React, { Component } from 'react'
import TitleComponent from '../TitleComponent/TitleComponent'
import './Message.css'

export default class Message extends Component {
  constructor(props) {
    super(props)
    this.showMessage = true
    this.state = {name: '', message: '', showMessage: true}
  }
  submitMessage = (event) => {
    event.preventDefault()
    let dbcon = this.props.dbase.database().ref('/message')
    dbcon.push({
      name: this.state.name,
      message: this.state.message
    })
    this.setState({showMessage: false})
  }
  render() {
    return (
      <div className="message-container">
        <TitleComponent title="DEIXE SUA MENSAGEM" background="white"/>
        {this.state.showMessage ?
          <form className="message-form" onSubmit={this.submitMessage}>
              <div>
                  <p>Deixe uma mensagem para a Clarinha! <br/>Ela vai ficar muito feliz com seu carinho.</p>
                  <input type="text" required placeholder="Nome" onChange={e => this.setState({name: e.target.value})} value={this.state.name}/>
              </div>
              <div>
                  <textarea required placeholder="Mensagem" onChange={e => this.setState({message: e.target.value})} value={this.state.message}></textarea>
              </div>
              <div>
                  <button type="submit">ENVIAR</button>
              </div>
          </form>
        : <p>Obrigado pela mensagem</p>}
      </div>
    )
  }
}