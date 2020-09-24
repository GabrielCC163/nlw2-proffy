import React from 'react';

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt=""/>
                <div>
                    <strong>Nome do prof</strong>
                    <span>materia</span>
                </div>
            </header>

            <p>
                something
            </p>

            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;