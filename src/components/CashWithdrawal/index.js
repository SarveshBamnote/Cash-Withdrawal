import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props
    const deductVal = value => {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }

    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="name-container">
            <div className="name-bg">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-cont">
            <p className="balance">Your Balance</p>
            <p className="bal-amount">{balance}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <p className="withdraw">Withdraw</p>
          <p className="balance">CHOOSE SUM (IN RUPEES)</p>
          <ul className="rupees-cont">
            {denominationsList.map(each => (
              <DenominationItem
                deductVal={deductVal}
                eachItem={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
