import { gql } from 'apollo-boost'


export const productsQuery = gql `
    query poc($id: ID!, $categoryId: Int, $search: String){
        poc(id: $id) {
            id
            products(categoryId: $categoryId, search: $search) {
                id
                title
                images {
                    url
                }
                productVariants {
                    price
                }
            }
        }
    }`