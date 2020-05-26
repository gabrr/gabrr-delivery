import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './styles.css'

export const AddressesList = (props) => {
    const { addresses } = props

    return (
        <div id="addressesList">
            {addresses && addresses.map(address => {
                return (
                    <Fragment key={address.cordinates.lat}>
                        <Link to={{
                            pathname: `${address.about.hamlet || address.about.suburb || address.about.town || address.about.city || address.about.village}`,
                            state: { lat: address.cordinates.lat, long: address.cordinates.lng }
                        }}>
                            <div className="option">
                                <p className="about">{
                                    `${address.about.hamlet || address.about.suburb || address.about.town || address.about.city || address.about.village}, 
                                    ${address.about.state}, 
                                    ${address.about.country}.`}
                                </p>
                                <p className="postocde">
                                    {`CEP: ${address.about.postcode || '00000-00'}`}
                                </p>
                            </div>
                        </Link>
                    </Fragment>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressesList)
