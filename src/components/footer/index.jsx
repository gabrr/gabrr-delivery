import React from 'react'
import { connect } from 'react-redux'
import './styles.css'

export const Footer = () => {
    return (
        <footer>
            <p>Developed by <a href="https://github.com/gabrr">gabrr</a> &copy; 2020</p>
        </footer>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
