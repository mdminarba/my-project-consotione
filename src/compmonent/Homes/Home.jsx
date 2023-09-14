
import PropTypes from 'prop-types'

const Home = ({props, handleClickSelect}) => {
    const {image,name,age,selari}=props
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-72 h-96 bg-amber-500 rounded-lg p-3 ">
                <img className='w-32 h-32 m-auto rounded-full' src={image} />
                <h2 className="text-2xl mt-2 text-left">Name: {name}</h2>
                <h2 className="text-xl mt-2 text-left">Age: {age}</h2>
                <h2 className="text-xl mt-2 text-left">Selari: {selari}</h2>
                <p className="text-sm mt-2 text-left"> Home:{}</p>
                <button onClick={()=>handleClickSelect(props)} className='btn btn-primary mt-5 '>Select</button>

            </div>
        </div>
    </div>
  )
}

Home.propTypes = {
    props:PropTypes.object,
    handleClickSelect:PropTypes.func
}

export default Home