import { gql } from 'apollo-boost'

export const allCategories = gql `
    query allCategoriesSearch {
        allCategory {
            title
            id
        }
    }`