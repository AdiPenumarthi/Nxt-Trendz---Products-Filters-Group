import './index.css'

const Rating = props => {
  const {eachRating, changeCategoryItem} = props
  const {imageUrl, ratingId} = eachRating

  const onClickRating = () => {
    changeCategoryItem(ratingId)
  }

  return (
    <li onClick={onClickRating}>
      <img src={imageUrl} className="rating-img" alt={`rating ${ratingId}`} />
    </li>
  )
}

export default Rating
