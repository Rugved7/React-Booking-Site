import { React, useState } from 'react'
import { faBed, faCar, faTaxi, faPlane, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css/header.css'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'

// Real Code Starts

const Header = () => {
  const [openDate, setOpenDate] = useState(false) // useState for Date Dialog Box to appear...

  const [date, setdate] = useState([
    {
      startDate: new Date(),   // Code Section for setting date and selscting date...
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const [openOptions, setOpenOptions] = useState(false)  // useState for Booking  Dialog Box to appear...
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,   // default bookings
    room: 1
  })

  const handleClick = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,   // Loop for selecting and updating booking box
      }
    })
  }

  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerlist'>


{/* Adding all icons  */}

          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Sedans</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Rentals</span>
          </div>

        </div>

{/* h1 and paragraph */}

        <h1 className='headerTitle'> Chai Piyo , Biscuit Khao !!</h1>
        <p className='headerDesc'>
          Ghar me itni Chai pita hai to pata nahi dukan me kitni chai pita hoga ? Band karde ye tera chai pina ...jab dekho tab chai...chai...chai...
        </p>
       

{/* Destnination section starts */}

        <div className='headerSearch'>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input type='search' placeholder='Enter your Destination'
              className='headerSearchInput' />
          </div>


{/* Calender Section  logic Start */}

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText' > {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")} `} </span>

            {openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className='date'
            />}
          </div>


          {/* Booking section logic Starts */}

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'> {`${options.adult} adult . ${options.children} children . ${options.room} room `}</span>
          </div>

          {/* Dialog box for person booking  */}


          {openOptions && <div className='options'>

            <div className='optionItem'>
              <span className='optionText'>Adult</span>
              <div className='optionsCounter'>

                <button className='optioncountbtn' onClick={() => handleClick("adult", "d")}
                  disabled={options.adult <= 1}> -
                </button>
                <span className='optioncountnum'>{options.adult}</span>
                <button className='optioncountbtn' onClick={() => handleClick("adult", "i")}>+</button>
              </div>
            </div>

            <div className='optionItem'>
              <span className='optionText'>Children</span>
              <div className='optionsCounter'>

                <button className='optioncountbtn' onClick={() => handleClick("children", "d")}
                  disabled={options.children <= 0} >-</button>
                <span className='optioncountnum'>{options.children}</span>
                <button className='optioncountbtn' onClick={() => handleClick("children", "i")}>+</button>
              </div>
            </div>

            <div className='optionItem'>
              <span className='optionText'>Room</span>
              <div className='optionsCounter'>

                <button className='optioncountbtn' onClick={() => handleClick("room", "d")}
                  disabled={options.room <= 1}
                >-</button>
                <span className='optioncountnum'>{options.room}</span>
                <button className='optioncountbtn' onClick={() => handleClick("room", "i")}>+</button>
              </div>
            </div>


{/* Dialog box Code ends  */}
          </div>}

          <div className='headerSearchItem'>
            <button className='headerBtn'>GO</button>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Header