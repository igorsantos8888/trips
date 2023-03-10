import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  const reserveSize = useSelector(state => state.reserve.length)

  return (
    <header className='container'>

      <Link to='/'>
        <img className='logo' src={logo} alt='Logo do site' />
      </Link>

      <Link className='reserva' to='/reservas'>
        <div>
          <strong>Minhas Reservas</strong>
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
    </header>
  )
}

export default Header