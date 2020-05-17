import React from 'react';

class Filters extends React.Component {

	onChange = (e) => {
		e.preventDefault();
		const searchResults = this.filterBy(e.target.value);
		this.props.onSearch(searchResults);
	};

	filterBy(value) {
		const contacts = this.props.contacts;
		const filteredList = contacts.filter(contact => contact.name.includes(value));
		return filteredList;
	}

	render() {
		return (
			<div className="container">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.onChange} />

						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button className="filters__item is-selected">
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item">
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
