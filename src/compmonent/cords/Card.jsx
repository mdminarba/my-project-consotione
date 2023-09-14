
import PropTypes from 'prop-types'

const Card = ({props}) => {
    const {name,image,selari} = props
  return (
    <div className='mt-5 text-center lg:w-full w-[370px] m-auto'>
      <div className="flex bg-amber-500 rounded-md items-center">
        <img className='w-20 h-20 rounded-l-md' src={image} alt="" />
        <p className="ml-10 font-bold">{name}</p>
      </div>
      
    </div>
  )
}

Card.propTypes = {
    props:PropTypes.object.isRequired


}

export default Card
