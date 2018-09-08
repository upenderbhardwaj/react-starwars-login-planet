import React, { Component } from 'react';
import './Pagination.css';

export class Pagination extends Component {
  state = {
    page: this.props.page || 1,
    max: this.props.max || 6,
  };

  goToPage = page => {
    this.setState({ page: page }, this.updateUrl);
  };

  nextPage = () => {
    let { page, max } = this.state;

    if (~~page + 1 <= max) {
      this.setState({ page: ~~page + 1 }, this.updateUrl);
    }
  };

  prevPage = () => {
    let { page } = this.state;

    if (page > 1) {
      this.setState({ page: page - 1 }, this.updateUrl);
    }
  };

  lastPage = () => {
    this.setState({ page: this.state.max }, this.updateUrl);
  };

  firstPage = () => {
    this.setState({ page: 1 }, this.updateUrl);
  };

  buildUrl = urlParams => {
    return (
      window.location.href.split('?')[0] +
      (urlParams.has('page') ? '?' : '') +
      urlParams.toString()
    );
  };

  updateUrl = () => {
    let { page } = this.state;
    let urlParams = new URLSearchParams(window.location.search);

    if (!page) {
      urlParams.delete('page');
    } else {
      urlParams.set('page', page);
    }

    window.location.href = this.buildUrl(urlParams);
  };

  pageNumbers = () => {
    return [...new Array(this.state.max || 10)].map((number, i) => {
      let { page } = this.state;
      let active = () => i + 1 === ~~page ? 'Pagination__list-item--active' : '';
      return (
        <li
          className={`Pagination__list-item Pagination__list-item--number ${active()}`}
          key={i}
        >
          <a
            onClick={this.goToPage.bind(this, i + 1)}
            className="Pagination__link"
          >
            {i + 1}
          </a>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="Pagination container">
        <span className="Pagination__link" onClick={this.firstPage}>First</span>
        <i
          className="fa fa-caret-left Pagination__prev Pagination__link"
          aria-hidden="true"
          onClick={this.prevPage}
        />
        <ul className="Pagination__list">
          {this.pageNumbers()}
        </ul>
        <i
          className="fa fa-caret-right Pagination__next Pagination__link"
          aria-hidden="true"
          onClick={this.nextPage}
        />
        <span className="Pagination__link" onClick={this.lastPage}>Last</span>
      </div>
    );
  }
}
