import * as constants from '../constants'

export const allProducts = data => {
    return {
        type: constants.GET_ALL_PRODUCTS,
        data: data.products
    }
}

// const cleaningData = data => {
//     const newData = data.map(address => {
//         return {
//             cordinates: address.geometry,
//             about: address.components
//         }
//     })
//     return newData
// }