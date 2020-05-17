import React from 'react';
import './Contact.scss';

class Contact extends React.Component {

  render() {
    const {
      avatar,
      name,
      phone,
      country,
      admissionDate,
      company,
      department
    } = this.props.contact;

    return (
      <React.Fragment>
        <section className="contacts_list">
          <article className="contact">
            <span className="contact_avatar">
              <img src={avatar} alt=""/>
            </span>
            <span className="contact_data">
              {name}
            </span>
            <span className="contact_data">
              {phone}
            </span>
            <span className="contact_data">
              {country}
            </span>
            <span className="contact_data">
              {new Intl.DateTimeFormat('pt-BR').format(new Date(admissionDate))}
            </span>
            <span className="contact_data">
              {company}
            </span>
            <span className="contact_data">
              {department}
            </span>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
