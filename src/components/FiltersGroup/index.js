import './index.css'
import {BiSearchAlt2} from 'react-icons/bi'
import Category from '../Category'
import Rating from '../Rating'

const FiltersGroup = props => {
  const {
    changeTitleSearch,
    changeCategory,
    changeRating,
    titleSearchInput,
    clearFilters,
    categoryOptions,
    ratingsList,
  } = props

  const onSearchInput = event => {
    const searchInput = event.target.value
    changeTitleSearch(searchInput)
  }

  const changeCategoryItem = category => {
    changeCategory(category)
  }

  const changeRatingItem = ratingId => {
    changeRating(ratingId)
  }

  const onClickCLearFilter = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          value={titleSearchInput}
          onChange={onSearchInput}
        />
        <BiSearchAlt2 className="search-icon" />
      </div>
      <div className="category-container">
        <h1 className="category-heading">Category</h1>
        <ul className="category-list-container">
          {categoryOptions.map(eachCategory => (
            <Category
              key={eachCategory.categoryId}
              eachCategory={eachCategory}
              changeCategoryItem={changeCategoryItem}
            />
          ))}
        </ul>
      </div>
      <div className="category-container">
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list-container">
          {ratingsList.map(eachRating => (
            <Rating
              eachRating={eachRating}
              key={eachRating.ratingId}
              changeCategoryItem={changeRatingItem}
            />
          ))}
        </ul>
      </div>
      <button
        type="button"
        onClick={onClickCLearFilter}
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
