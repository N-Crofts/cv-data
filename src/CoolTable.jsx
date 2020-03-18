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
  
  render() {

    const dL1 = "Days Since Patient Zero"
    const dL2 = "Confirmed Cases"
    const dL3 = "Predicted Cases"
    const dL4 = "Confirmed Increase"
    const dL5 = "Predicted Increase"

    const pZ1 = 1
    const cC1 = 278
    const pC1 = 278
    const cI1 = 0
    const pI1 = 0

    const pZ2 = 2
    const cC2 = 326
    const pC2 = 326
    const cI2 = 17.27 + ' %'
    const pI2 = 17.27 + ' %'

    const pZ3 = 3
    const cC3 = 580
    const pC3 = forecast(4, 
      [cC1, cC2], 
      [pZ1, pZ2])
    const cI3 = ((cC3 / cC2 - 1) * 100)
    const pI3 = ((pC3 / pC2 - 1) * 100)

    const pZ4 = 4
    const cC4 = 845
    const pC4 = forecast(5, 
      [cC1, cC2, cC3], 
      [pZ1, pZ2, pZ3])
    const cI4 = ((cC4 / cC3 - 1) * 100)
    const pI4 = ((pC4 / pC3 - 1) * 100)

    const pZ5 = 5
    const cC5 = 1317
    const pC5 = forecast(6, 
      [cC1, cC2, cC3, cC4], 
      [pZ1, pZ2, pZ3, pZ4])
    const cI5 = ((cC5 / cC4 - 1) * 100)
    const pI5 = ((pC5 / pC4 - 1) * 100)


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
              <td data-label={dL1}>{pZ1}</td>
              <td data-label={dL2}>{cC1}</td>
              <td data-label={dL3}>{pC1}</td>
              <td data-label={dL4}>{cI1.toFixed(2) + ' %'}</td>
              <td data-label={dL5}>{pI1.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={dL1}>{pZ2}</td>
              <td data-label={dL2}>{cC2}</td>
              <td data-label={dL3}>{pC2}</td>
              <td data-label={dL4}>{cI2}</td>
              <td data-label={dL5}>{pI2}</td>
            </tr>
            <tr>
              <td data-label={dL1}>{pZ3}</td>
              <td data-label={dL2}>{cC3}</td>
              <td data-label={dL3}>{pC3}</td>
              <td data-label={dL4}>{cI3.toFixed(2) + ' %'}</td>
              <td data-label={dL5}>{pI3.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={dL1}>{pZ4}</td>
              <td data-label={dL2}>{cC4}</td>
              <td data-label={dL3}>{pC4.toFixed(0)}</td>
              <td data-label={dL4}>{cI4.toFixed(2) + ' %'}</td>
              <td data-label={dL5}>{pI4.toFixed(2) + ' %'}</td>
            </tr>
            <tr>
              <td data-label={dL1}>{pZ5}</td>
              <td data-label={dL2}>{cC5}</td>
              <td data-label={dL3}>{pC5.toFixed(0)}</td>
              <td data-label={dL4}>{cI5.toFixed(2) + ' %'}</td>
              <td data-label={dL5}>{pI5.toFixed(2) + ' %'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoolTable;