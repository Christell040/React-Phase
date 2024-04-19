import React from 'react'
import './stylez.css'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <h2>My Notes</h2>
            <ul class="nav_list">
                <li>Red button for delete</li>
                <li>Purple button for edit</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
