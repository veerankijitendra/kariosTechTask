import {Link} from 'react-router-dom'

import './index.css'

const ProductItem = props => {
  const {product} = props
  const {
    id,
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
    <Link to={`/product/${id}`} className="link">
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
            {' '}
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
    </Link>
  )
}
export default ProductItem
