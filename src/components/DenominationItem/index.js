import './index.css'

const DenominationItem = props => {
  const {eachItem, deductVal} = props
  const {value} = eachItem

  const valueClicked = () => {
    deductVal(value)
  }

  return (
    <li className="list-container">
      <button onClick={valueClicked} className="button" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
