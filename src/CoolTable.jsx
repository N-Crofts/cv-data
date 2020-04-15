import React, { Component } from 'react'


function forecast(x, ky, kx) {
  var i = 0, nr = 0, dr = 0, ax = 0, ay = 0, a = 0, b = 0

  function average(ar) {
    var r = 0
    for (i = 0; i < ar.length; i++) {
      r = r+ar[i];
    }
    return r/ar.length
  }

  ax = average(kx)
  ay=average(ky)
  for (i = 0; i < kx.length; i++) {
    nr = nr + ((kx[i] - ax) * (ky[i] - ay))
    dr = dr + ((kx[i] - ax) * (kx[i] - ax))
  }
  b = nr / dr
  a = ay - b * ax
  return (a + b * x)
}


class CoolTable extends Component {

  state = {
    conCase: "",
    conIncreaseTest: ""
  }

  handleNewCases = () => {
    let conCase7
    let conCase6
    let conCase = {...this.state.conCase}
    let conIncreaseTest = { ...this.state.conIncreaseTest }
    if (conCase === "") {
      conIncreaseTest = this.state.conIncreaseTest
    }
    conIncreaseTest = ((conCase7 / conCase6 - 1) * 100)
  }
  
  render() {

    //////// HEADER ROW

    const daysSince = "Days Since Outbreak"
    const conCases = "Confirmed Cases"
    const preCases = "Predicted Cases"
    const conIncrease = "Confirmed Increase"
    const preIncrease = "Predicted Increase"

    //////// DATA ROW 1

    const day1 = 1
    const conCase1 = 278
    const preCase1 = 278
    const conInc1 = 0
    const preInc1 = 0

    //////// DATA ROW 2

    const day2 = 2
    const conCase2 = 326
    const preCase2 = 326
    const conInc2 = 17.27 + ' %'
    const preInc2 = 17.27 + ' %'

    //////// DATA ROW 3

    const day3 = 3
    const conCase3 = 580
    const preCase3 = forecast(4, 
      [conCase1, conCase2], 
      [day1, day2])
    const conInc3 = ((conCase3 / conCase2 - 1) * 100)
    const preInc3 = ((conCase3 / preCase2 - 1) * 100)

    //////// DATA ROW 4

    const day4 = 4
    const conCase4 = 845
    const preCase4 = forecast(5, 
      [conCase1, conCase2, conCase3], 
      [day1, day2, day3])
    const conInc4 = ((conCase4 / conCase3 - 1) * 100)
    const preInc4 = ((preCase4 / preCase3 - 1) * 100)

    //////// DATA ROW 5

    const day5 = 5
    const conCase5 = 1317
    const preCase5 = forecast(6, 
      [conCase1, conCase2, conCase3, conCase4], 
      [day1, day2, day3, day4])
    const conInc5 = ((conCase5 / conCase4 - 1) * 100)
    const preInc5 = ((preCase5 / preCase4 - 1) * 100)

    //////// DATA ROW 6

    const day6 = 6
    const conCase6 = 3333
    const preCase6 = forecast(7, 
      [conCase1, conCase2, conCase3, conCase4, conCase5], 
      [day1, day2, day3, day4, day5])
    const conInc6 = ((conCase6 / conCase5 - 1) * 100)
    const preInc6 = ((preCase6 / preCase5 - 1) * 100)

    //////// DATA ROW 7

    const day7 = 7
    const conCase7 = 3456
    const preCase7 = forecast(8, 
      [conCase1, conCase2, conCase3, conCase4, conCase5, conCase6], 
      [day1, day2, day3, day4, day5, day6])
    const conInc7 = this.handleNewCases()
    const preInc7 = ((preCase7 / preCase6 - 1) * 100)


    return (
      
      <div>
        <table>
          <thead>
            <tr>
              <th>Days Since Patient Zero</th>
              <th>Confirmed Cases</th>
              <th>Predicted Cases</th>
              <th>Confirmed Increase</th>
              <th>Predicted Increase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label={daysSince}>{day1}</td>
              <td data-label={conCases}>{conCase1}</td>
              <td data-label={preCases}>{preCase1}</td>
              <td data-label={conIncrease}>{conInc1.toFixed(2) + ' %'}</td>
              <td data-label={preIncrease}>{preInc1.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day2}</td>
              <td data-label={conCases}>{conCase2}</td>
              <td data-label={preCases}>{preCase2}</td>
              <td data-label={conIncrease}>{conInc2}</td>
              <td data-label={preIncrease}>{preInc2}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day3}</td>
              <td data-label={conCases}>{conCase3}</td>
              <td data-label={preCases}>{preCase3}</td>
              <td data-label={conIncrease}>{conInc3.toFixed(2) + ' %'}</td>
              <td data-label={preIncrease}>{preInc3.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day4}</td>
              <td data-label={conCases}>{conCase4}</td>
              <td data-label={preCases}>{preCase4.toFixed(0)}</td>
              <td data-label={conIncrease}>{conInc4.toFixed(2) + ' %'}</td>
              <td data-label={preIncrease}>{preInc5.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day5}</td>
              <td data-label={conCases}>{conCase5}</td>
              <td data-label={preCases}>{preCase5.toFixed(0)}</td>
              <td data-label={conIncrease}>{conInc5.toFixed(2) + ' %'}</td>
              <td data-label={preIncrease}>{preInc5.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day6}</td>
              <td data-label={conCases}>{conCase6}</td>
              <td data-label={preCases}>{preCase6.toFixed(0)}</td>
              <td data-label={conIncrease}>{conInc6.toFixed(2) + ' %'}</td>
              <td data-label={preIncrease}>{preInc6.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={daysSince}>{day7}</td>
              <td data-label={conCases}>{conCase7}</td>
              <td data-label={preCases}>{preCase7.toFixed(0)}</td>
              <td data-label={conIncrease}>{conInc7}</td>
              <td data-label={preIncrease}>{preInc7.toFixed(2) + ' %'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoolTable;