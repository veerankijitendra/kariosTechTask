import {Component} from 'react'

import ProductItem from '../ProductItem'

import './index.css'

class Home extends Component {
  state = {product: [], searchValue: ''}

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const url = 'https://dummyjson.com/products'
    const response = await fetch(url)
    const data = await response.json()

    this.setState({product: [...data.products]})
  }

  changeInChangeElement = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue, product} = this.state

    const updatedProducts = product.filter(each => {
      const {title} = each
      if (title.toLowerCase().includes(searchValue.toLocaleLowerCase())) {
        return true
      }
      return false
    })

    // console.log(updatedProducts)
    return (
      <div className="product-details">
        <h1>Products</h1>
        <input
          type="search"
          className="search-element"
          onChange={this.changeInChangeElement}
          value={searchValue}
        />
        <div className="products-con">
          {updatedProducts.map(each => (
            <ProductItem product={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
