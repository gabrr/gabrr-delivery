import React from 'react'
import { connect } from 'react-redux'
import './styles.css'
import zoom from '../../assets/zoom.png'
import { getAllAddresses } from '../../redux/actions'
import AddressesList from './addressesList'

export const Home = ({ onGetAllAdresses, addresses }) => {
    const searchPoc = (e) => {
        e.preventDefault()
        const { value } = e.target

        onGetAllAdresses(value)
        console.log(addresses, 'state')
    }



    return (
        <div id="home">
            <div className='hero'>
            </div>
            <form onSubmit={e => e.preventDefault()}>
                <div className="searchContainer">
                    <input onChange={(e) => searchPoc(e)} type="text" name="search" id="search" placeholder="Digite seu bairro" />
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
