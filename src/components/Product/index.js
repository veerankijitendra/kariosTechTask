import {Component} from 'react'

import './index.css'

class Product extends Component {
  state = {product: {}, isLoading: true}

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://dummyjson.com/products/${id}`

    const response = await fetch(url)
    const data = await response.json()

    this.setState({product: {...data}, isLoading: false})
    console.log(data)
  }

  renderSuccessComponent = () => {
    const {product} = this.state
    const {
      brand,
      description,
      discountPercentage,
      price,
      rating,
      thumbnail,
      stock,
      title,
    } = product

    return (
      <div className="product-bg">
        <div className="title-brand-con">
          <h1>{title}</h1>
          <h1>{brand}</h1>
        </div>
        <img src={thumbnail} alt="thumbnail" className="thumbnail" />
        <div className="title-brand-con">
          <p>
            {' '}
            Price <span>{price}</span>
          </p>
          <p>
            Rating <span>{rating}</span>{' '}
          </p>
          <p>
            Stock <span>{stock}</span>{' '}
          </p>
          <p>
            Discount <span>{discountPercentage}%</span>
          </p>
        </div>
        <p>{description}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    if (isLoading) {
      return <h1>Loading</h1>
    }
    return <div>{this.renderSuccessComponent()}</div>
  }
}

export default Product
