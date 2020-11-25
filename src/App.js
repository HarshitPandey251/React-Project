import React from 'react';
import './App.css';
import logo from "../src/image/logo.png";
import img1 from "../src/image/1.png";
import img2 from "../src/image/2.png";
import img3 from "../src/image/3.png";
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';


function App() {
  return (
    <nav className="app">
        <img className="logo" src={logo} alt="" />


        <div className="body">
            <img className="prize" src={img1} alt=""/>
                <div className="body-right">
                    <h3>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3><br/>
                    <h4>
                      <ul>
                        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for <br/>various projects across the globe to save energy.<br/>
                        </li>
                        <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old<br/> inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                        </li>
                      </ul> 
                    </h4>
                    <img className="prize-photo" src={img2} alt=""/>
                    <h4><br/>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director<br/> of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable <br/>Minister of State.
                    </h4>
                </div>
        </div>


        <div className="bottom">
            <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. <br/></h4>
            <img className="large" src={img3} alt="" />
            <h4><br/>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</h4>
            <hr/>
            <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <h4><br/>CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL</h4>
       </div>


       <div className="navigation">
            <div className="number">
                <CallIcon/>
                <a href="tel:+123456789">Toll free 1800 200 1234</a>
            </div>
            <div className="number">
                <FacebookIcon/>
                <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
            </div>
            <div className="number">
                <LanguageIcon/>
                <a href="www.crigroups.com">www.crigroups.com</a>
            </div>
       </div>

    </nav>
  );
}

export default App;
