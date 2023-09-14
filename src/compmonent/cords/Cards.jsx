
import PropTypes from 'prop-types'
import Card from './Card'
import TotalSelay from '../TotalSelay'

const Cards = ({datas,handleClickSelect ,remaining ,totalCost}) => {
  return (
    <div className='lg:w-[300px]  '>
        
        {
            datas.map((props,idx) =><TotalSelay key={idx}
            props={props}
            handleClickSelect={handleClickSelect}
             ></TotalSelay>)  
        }
        <h1 className="text-3xl font-bold text-amber-300 ">Display Show: {datas.length}</h1>
        <h2 className="text-2xl my-5 text-red-600 font-bold">Total Cost: {totalCost}</h2>
        <h5 className="text-2xl text-red-600 font-bold">remaining:{remaining}</h5>
        {
            datas.map((props,idx) => <Card key={idx}
             props={props}
             handleClickSelect={handleClickSelect}
             ></Card>)  
        }
       
    </div>
  )
}

Cards.propTypes = {
    datas:PropTypes.array,
    handleClickSelect:PropTypes.func,
    
}

export default Cards