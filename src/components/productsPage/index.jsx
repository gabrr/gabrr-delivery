import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { getAllPocs } from '../../graphql/queries/pocs'
import { productsQuery } from '../../graphql/queries/products'
import { connect } from 'react-redux'
import './styles.css'
import { allProducts } from '../../redux/actions/allProducts'

export const ProductsPage = (props) => {
    console.log(props, 'props')
    const { lat, long } = props.location.state

    const [ getProducts ] = useLazyQuery(productsQuery, {
        onCompleted: ({poc}) => allProducts(poc)
    })

    const [ getPocs ] = useLazyQuery(getAllPocs, {
        onCompleted: ({pocSearch}) => pocSearch && getProducts({ variables: {
            id: Number.parseFloat(pocSearch[0].id),
            search: '',
            categoryId: null
        }})
    })

    useEffect(() => {
        getPocs({
            variables: {
                algorithm: 'NEAREST',
                now: new Date().toISOString(),
                lat: '-23.632919',
                long: '-46.699453'
            }
        })
    }, [getPocs, lat, long])

    return (
        <div id="productsPage">
            <div className="selectedItems">
                <h1 className="productsHeader">
                    Selecionados
                </h1>
                <div className="grid">
                    <div className="card">
                        <img src="#" alt="cerveja"/>
                        <h2>Cerveja</h2>
                        <p>R$ 15, 98</p>
                    </div>
                </div>
            </div>
            <div className="allItems">
                <h1 className="productsHeader">
                    Todos os items
                </h1>
                <div className="grid">
                    <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                <div className="card">
                    <img src="#" alt="cerveja"/>
                    <h2>Cerveja</h2>
                    <p>R$ 15, 98</p>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state    
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
