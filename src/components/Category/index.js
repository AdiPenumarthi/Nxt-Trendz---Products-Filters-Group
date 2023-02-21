import './index.css'

const Category = props => {
  const {eachCategory, changeCategoryItem} = props
  const {categoryId, name} = eachCategory

  const onClickCategory = () => {
    changeCategoryItem(categoryId)
  }

  return (
    <li onClick={onClickCategory}>
      <p className="category">{name}</p>
    </li>
  )
}

export default Category
