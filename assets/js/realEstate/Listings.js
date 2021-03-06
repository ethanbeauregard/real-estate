import React, { Component } from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>

        <section className="sortby-area">
          <div className="results">380 results found</div>
          <div className="sort-options">
            <select className="sortby" name="sortby">
              <option value="price-asc">Hightest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fas fa-bars"></i>
              <i className="fas fa-th"></i>
            </div>
          </div>
        </section>

        <section className="listings-result">
          <div className="listing">
            <div className="listing-img">
              <span className="address">Address</span>
              <div className="details">
                <div className="user-img"> </div>
                <div className="user-details">
                  <span className="user-name">Nina Smith</span>
                  <span className="post-date">05/05/2020</span>
                </div>
                <div className="user-details">
                  <div className="floor-space">
                    <i className="far fa-square"></i>
                    <span>1000 ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed"></i>
                    <span>3 bedrooms</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-info">
              <span>$1000 /month</span>
              <span>
              <i className="fas fa-map-marker-alt"></i>
              Ridgewood, NY
              </span>
            </div>
          </div>

        </section>

  
        

        <section className="pagination">
          <ul className="pagination-nums">
            <li>Prev</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}

