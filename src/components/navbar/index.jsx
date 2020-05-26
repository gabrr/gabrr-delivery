import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const Navbar = () => {
    return (
        <div id="navbar">
            <div className="logo">Gabrr Delivery</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
