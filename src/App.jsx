import Header from "./compmonent/Header"
import './App.css'
import Homes from "./compmonent/Homes/Homes"
import Cards from "./compmonent/cords/Cards"
import { useState } from "react"



function App() {

  const [datas, setdatas]=useState([])
  const [remaining, setRemaining] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const handleClickSelect = (home) =>{
    const isExite = datas.find((item) =>item.id == home.id )
    let count = home.selari
    if (isExite){
      return alert('All Redi Cliked')
    }else{
      datas.forEach((item)=>{
        count = count + item.selari
      })
      const remaining = 50000 - count;
      if (count > 50000) {
        return alert('Your balance low')
      }else{
          const newsetData = [...datas,home]
          setdatas(newsetData)
          setRemaining(remaining);

          setTotalCost(count);
        }
      console.log(count)
    }
  }
  return (
   <div className="text-center backgrou ">
    <Header></Header>
    <div className="flex lg:flex-row flex-col-reverse lg:w-[1200px] m-auto gap-10 justify-center my-10">
      <Homes handleClickSelect={handleClickSelect}
      ></Homes>
      <Cards
      datas={datas}
      remaining={remaining}
      totalCost={totalCost}
      ></Cards>
    </div>
   </div>
  )
}

export default App
