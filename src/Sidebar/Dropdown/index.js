import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import './styles.css'

function Dropdown ({ id, label, items }) {
  const [visible, setVisible] = useState(false)
  return (
    <li className="Dropdown">
      <p
        className={visible ? 'DropdownActive' : ''}
        onClick={() => setVisible(!visible)}
        data-testid="DropdownHeader"
      >
        <span className="DropdownArrow" data-testid="DropdownArrow" />
        <span className={`DropdownImage DropdownImage-${id} ${visible ? 'ImageActive' : ''}`} />
        {label}
      </p>
      <ul className={`Menu ${visible ? 'Visible' : ''}`}>
        {items.map(({ id, label, path }) => (
          <li key={id} data-testid="DropdownItems">
            <NavLink to={path} activeClassName="Active">
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

Dropdown.propTypes = {
  closeSidebar: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  }))
}

export default Dropdown
