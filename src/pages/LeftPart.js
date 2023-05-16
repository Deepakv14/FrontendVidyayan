import React from 'react'
import '../styles/LeftPart.css'

const LeftPart = () => {
  return (
    <div class="container">
        <div className="left">
            <ul>
                <li>Dashboard</li>
                <li>UI Elements</li>
                <li>Form Elemnts</li>
                <li>Charts</li>
                <li>Tables</li>
                <li>Icons</li>
                <li>User Pages</li>
                <li>Documentation</li>
            </ul>
        </div>
        <div className="right">
            {/* <h1>Welcome to Dashboard,</h1>
            <p>Successfully Logged In !</p> */}
              <div className="section">
            <div className="card">
                <div className="card1">
                    <h1>Card 1</h1>
                    <p>This is sample card 1</p>
                </div>
                <div className="card1">
                    <h1>Card 2</h1>
                    <p>This is sample card 2</p>
                </div>
            </div>
            <div className="largeCard">
                <h1>Large Card</h1>
                <p>This is sample large card</p>
                <p>Sales Data</p>
                <p>1000</p>
                <p>2000</p>
                <p>3000</p>
            </div>
        </div>
        <div className="section">
            <div className="card">
                <div className="card1">
                    <h1>Card 1</h1>
                    <p>This is sample card 1</p>
                </div>
                <div className="card1">
                    <h1>Card 2</h1>
                    <p>This is sample card 2</p>
                </div>
            </div>
            <div className="largeCard">
                <h1>Large Card</h1>
                <p>This is sample large card</p>
                <p>Sales Data</p>
                <p>1000</p>
                <p>2000</p>
                <p>3000</p>
            </div>
        </div>  
        </div>
           
    </div>
  )
}

export default LeftPart