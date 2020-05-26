import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './styles.css'
import zoom from '../../assets/zoom.png'
import { getAllAddresses } from '../../redux/actions'
import AddressesList from './addressesList'

export const Home = ({ onGetAllAdresses, addresses }) => {

    // fetch on REST API to get cordinates
    const searchPoc = (e) => {
        e.preventDefault()
        onGetAllAdresses(e.target.value)
            
        // placesAvailable(addresses)
    }

    // const [brazil, setbrazil] = useState([])

    // const placesAvailable = array => {
    //     if(array) {
    //         const brazilPlaces = array.filter(place => place.about.country === "Brazil")
    //         setbrazil(brazilPlaces)
    //     }
    // }
    

    return (
        <div id="home">
            <div className='hero'>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <div className="searchContainer">
                    <input onChange={(e) => searchPoc(e)} autoComplete="off" type="text" name="search" id="search" placeholder="Procure por rua, bairro ou cidade" />
                    <img src={zoom} className="zoom" alt="button to search"/>
                </div>
                {addresses[0] && <AddressesList {...{addresses}} />}
            </form>            
        </div>
    )
}

const mapStateToProps = ({addresses}) => ({
    addresses
})

const mapDispatchToProps = dispatch => ({
    onGetAllAdresses: (args) => dispatch(getAllAddresses(args)) 
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)
