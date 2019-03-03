import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'

class Header extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
          <div className="flex pa1 justify-between nowrap orange">
            <div className="flex flex-fixed black">
              <div id="title_header" className="fw7 mr1">Buy Your Car</div>
              <Link to="/" id="latest" className="ml1 no-underline black">
                Latest Cars
              </Link>
              <Link to="/top" id="top" className="ml1 no-underline black">
                Top Ranking Cars
                </Link>
              <div id="divider" className="ml1">|</div>
                <Link id="search" to="/search" className="ml1 no-underline black">
                    search
                </Link>
              {authToken && (
                <div id="add_car" className="flex">
                  <div className="ml1">|</div>
                  <Link to="/create" className="ml1 no-underline black">
                    Add a new Car
                  </Link>
                </div>
              )}
            </div>
            <div id="login" className="flex flex-fixed">
              {authToken ? (
                <div
                  className="ml1 pointer black"
                  onClick={() => {
                    localStorage.removeItem(AUTH_TOKEN)
                    this.props.history.push(`/`)
                  }}
                >
                  Logout
                </div>
              ) : (
                <Link to="/login" className="ml1 no-underline black">
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        )
      }
    }

export default withRouter(Header)