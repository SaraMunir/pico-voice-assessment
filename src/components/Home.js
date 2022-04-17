import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
        <h1>Welcome</h1>
        <ul className="row">
          <li>
            <Link to="/Q1">
              <button className='spBtn'>[ Q1 ]
              </button>
            </Link>
          </li>
          <li>
            <Link to="/Q2">
              <button className='spBtn'>[ Q2 ]
              </button>
            </Link>
          </li>
        </ul>
      </main>
  )
}

export default Home