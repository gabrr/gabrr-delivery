import { gql } from "apollo-boost";


export const getAllPocs = gql `
    query ($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
      pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
        id
      }
    }
`