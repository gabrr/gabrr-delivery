import * as constants from '../constants'

const fetchSucess = data => {
    return {
        type: constants.GET_ALL_ADDRESSES,
        data
    }
}

const cleaningData = data => {
    const newData = data.map(address => {
        return {
            cordinates: address.geometry,
            about: address.components
        }
    })
    return newData
}

export const getAllAddresses = query => {
    let url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=8c7e34b8abc94865910ae85579d1d7c1`
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                dispatch(fetchSucess(cleaningData(data.results)))
            })
    }
}