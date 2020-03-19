import React, { Component } from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="neighborhood" className="filter neighborhood">
            <option>Ridgewood</option>
          </select>
          <select name="houseType" className="filter houseType">
            <option>Ranch</option>
          </select>
          <select name="bedrooms" className="filter bedrooms">
            <option>2 Bedrooms</option>
          </select>

          <div className="filter price">
            <span className="title">Price</span>
            <input type="text" name="min-price" className="min-price" />
            <input type="text" name="max-price" className="max-price" />
          </div>
          <div className="filter floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min-floor-space" className="min-floor-space" />
            <input type="text" name="max-floor-space" className="max-floor-space" />
          </div>

          <div className="filter extras">
            <span className="title">
              Extras
            </span>
            <label for="extras">
              <span>Elevators</span>
              <input type="checkbox" name="extras" value="elevators" />
            </label>
            <label for="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" name="extras" value="swimmming-pool" />
            </label>
            <label for="extras">
              <span>Finished Basement</span>
              <input type="checkbox" name="extras" value="finished-basement" />
            </label>
            <label for="extras">
              <span>Gym</span>
              <input type="checkbox" name="extras" value="gym" />
            </label>
          </div>
        </div>
      </section>
    )
  }
}

