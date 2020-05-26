import React, { useEffect, useState, Fragment } from 'react'
import './styles.css'
import { connect } from 'react-redux'
import { useLazyQuery } from '@apollo/react-hooks'
import { getAllPocs } from '../../graphql/queries/pocs'
import { productsQuery } from '../../graphql/queries/products'
import { allProducts } from '../../redux/actions/allProducts'
import noImg from '../../assets/noFound.png'

export const ProductsPage = (props) => {
    const { lat, long } = props.location.state
    const { productsToRedux, allProducts } = props

    // to get products and pass to the redux store
    const [ getProducts ] = useLazyQuery(productsQuery, {
        onCompleted: ({poc}) => {
            setloading(false)
            productsToRedux(poc)
        }
    })

    const [noitem, setnoitem] = useState(false)

    // to get the nearest place based on cordinates
    const [ getPocs ] = useLazyQuery(getAllPocs, {
        onCompleted: ({pocSearch}) => pocSearch[0] ? getProducts({ variables: {
            id: Number.parseFloat(pocSearch[0].id),
            search: '',
            categoryId: null
        }}) : setnoitem(true)
    })


    useEffect(() => {
        getPocs({
            variables: {
                algorithm: 'NEAREST',
                now: new Date().toISOString(),
                lat: lat.toString(),
                long: long.toString()
            }
        })
    }, [getPocs, lat, long])

    useEffect(() => {
        setstateProducts(allProducts)
    }, [allProducts])


    // selected items will be store here
    const [selectedItems, setselectedItems] = useState([])
    const [stateProducts, setstateProducts] = useState(allProducts)
    const [loading, setloading] = useState(true)

    const itemSelection = ({target}, prod) => {
        target.classList.add('hide')
        setselectedItems([...selectedItems, prod])
        const remainedItems = stateProducts.filter(({id}) => id !== prod.id)
        setTimeout(() => {
            setstateProducts(remainedItems)
        }, 300)
        
    }
    

    const removeSelected = ({target}, item) => {
        target.classList.add('hide')
        const remainedItems = selectedItems.filter(({id}) => id !== item.id)
        setselectedItems(remainedItems)
        setstateProducts([...stateProducts, item])
    }


    return (
        <div id="productsPage">
            {noitem ? (
                <div className="noitem">
                    <p>Não há lojas por perto ainda :(</p>
                     <span onClick={() => props.history.goBack()} className="actionBt"> {'< voltar'}</span>
                </div>
            ) : (
                <Fragment>
                    <div className="selectedItems">
                        <h1 className="productsHeader">
                            Selecionados
                        </h1>
                        <div className="grid">
                            {
                                selectedItems[0] ? (
                                    selectedItems.map(item => {
                                        return (
                                            <div key={`selected${item.id}`} className="card">
                                                <div onClick={(e) => removeSelected(e, item)} className="closeButton"><p>X</p></div>
                                                <img src={item.images[0].url} onError={(e)=>{e.target.onerror = null; e.target.src=noImg}} alt={item.title}/>
                                                <h2>{item.title}</h2>
                                                <p> {`R$ ${item.productVariants[0].price.toFixed(2)}`} </p>
                                            </div>
                                        )
                                    })
                                ) : <p className="noSelectedP">Escolha um produto :)</p>
                            }
                            
                        </div>
                    </div>
                    <div className="allItems">
                        <h1 className="productsHeader">
                            Todos os items
                        </h1>
                        <div className="grid">
                            { loading ? (
                                <div className="loader">
                                    <div className="dot1"></div>
                                    <div className="dot2"></div>
                                    <div className="dot3"></div>
                                </div>
                            ) : (
                                stateProducts.map(prod => {
                                    return prod.images[0].url && (
                                        <div key={prod.id} className="card" onClick={(e) => itemSelection(e, prod)}>
                                            <img src={prod.images[0].url} onError={(e)=>{e.target.onerror = null; e.target.src=noImg}} alt={prod.title}/>
                                            <h2>{prod.title}</h2>
                                            <p> {`R$ ${prod.productVariants[0].price.toFixed(2)}`} </p>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </div>                    
                </Fragment>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    allProducts: state.products
})

const mapDispatchToProps = dispatch => ({
    productsToRedux: (args) => dispatch(allProducts(args))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage)
