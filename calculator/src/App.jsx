import { useState } from 'react'
import './App.css'

function App() {
  const [currentVal, setCurrentVal] = useState('0')

  function btnClicked(val) {
    if (val === 0) return
    console.log(val)
    //currentVal.concat(val) ==> setCurrentVal(currentVal+val)

    //val==> '=' ==> eval(currentVal)
  }

  //<div className='div2' onclick= "btnClicked('ac')"> AC</div>
  const btns = [
    0,
    'AC',
    'CE',
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '+',
    '=',
  ]
  return (
    <div className='wrapper'>
      {/* <div className='div1'>0 </div>
      <div className='div2' onClick={() => btnClicked('ac')}>
        AC
      </div>
      <div className='div3' onClick={() => btnClicked('ce')}>
        CE
      </div>
      <div className='div4'> 7</div>
      <div className='div5'>8 </div>
      <div className='div6'> 9</div>
      <div className='div7'> /</div>
      <div className='div8'> 4</div>
      <div className='div9'> 5</div>
      <div className='div10'>6 </div>
      <div className='div11'> *</div>
      <div className='div12'>1 </div>
      <div className='div13'> 2</div>
      <div className='div14'>3 </div>
      <div className='div15'> -</div>
      <div className='div16'> 0</div>
      <div className='div17'> +</div>
      <div className='div18'> =</div> */}
      {btns.map((item, ind, arr) => (
        <div
          className={'div'.concat(ind + 1)}
          onClick={() => btnClicked(item)}
          //key property should be used in react
          key={ind}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default App
