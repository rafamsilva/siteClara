import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-logo"></div>
                <div className="header-menu">
                    <ul>
                        <li><a href="">Início</a></li>
                        <li>|</li>
                        <li><a href="#galeria">Galeria de Fotos</a></li>
                        <li>|</li>
                        <li><a href="">Confirme sua presença</a></li>
                    </ul>
                </div>
            </header>
        )
    }
}