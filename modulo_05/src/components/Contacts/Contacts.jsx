import React from "react";
import Contact from "../Contact/Contact";
import './Contacts.scss';

class Contacts extends React.Component {


  render() {
    return (
      <>
        <div className="container">
          <section className="contacts__header">
            <article className="contact__header">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>
          </section>
        </div>
        <div className="container">
          {
            this.props.contacts.map(contact => (
              <Contact
                key={contact.id}
                contact={contact}
              >
              </Contact>
            ))
          }
        </div>

      </>
    );
  }
}

export default Contacts;
