
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Home from './Home'

const Homes = ({handleClickSelect}) => {

    const [homes, sethomes] = useState([])
    useEffect(()=>{
        fetch('cardff.json')
        .then(res => res.json())
        .then(data => sethomes(data))
    },[])
    console.log(homes)
  return (
    <div className='lg:w-[900px] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    
      {
        homes.map((props,idx) => <Home key={idx}
             props={props}
             handleClickSelect={handleClickSelect}
             ></Home>)
      }
      
    </div>
  )
}

Homes.propTypes = {
    handleClickSelect:PropTypes.func

}

export default Homes
