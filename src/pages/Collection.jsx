import { useContext, useState,  useEffect } from "react"
import { ShopContext } from "../context/ContextShop"
// import { IoIosArrowDropdownCircle } from "react-icons/io";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => { 
  const{ products }= useContext(ShopContext);
  const [collection, setCollection] = useState([])
  const [showFilter, setFilter] = useState(false);
  const [category, setCategory] =useState([])
  const [type, setType] = useState([])
  const [sortType, setSortType]= useState('relavent')



//   const toggleCategory =(e) => {

//     if(category.includes(e.target.value)){
//       setCategory(prev=> prev.filter(item=> item !== e.target.value))

//     }
//     else{
//       setCategory(prev=>[...prev,e.target.value])
//     }
//   }

  const toogleType=(e)=>{
    if(type.includes(e.target.value)){
      setType(prev=> prev.filter(item=> item!==e.target.value))
    }
    else{
      setType(prev=>[...prev,e.target.value])
    }
  }

const applyFilter = () =>{
  let productCopy = products.slice();

//   if(category.length > 0){
//     productCopy=productCopy.filter(item=> category.includes(item.category));
//   }
  if(type.length > 0){
    productCopy = productCopy.filter(item => type.includes(item.subCategory))
  }

  
  setCollection(productCopy)
}





 

useEffect(()=>{
  applyFilter();
},[type])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Option */}
      <div className="min-w-60">
        <p onClick={() => setFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
          {/* <IoIosArrowDropdownCircle className={`text-lg sm:hidden ${showFilter ? 'rotate-180' : ''}`}/> */}
        </p>

        {/* Category Filter */}
        {/* <div className={`border border-gray-400 rounded pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
          <p className="mb-3 text-sm font-medium">CATAGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory}/> Men

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/> Women

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids

            </p>

          </div>

        </div> */}

        {/* Type Filter */}

        <div className={`border border-gray-400 rounded pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}> 
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Topwear'} onChange={toogleType}/> Topwear

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Bottomwear'}  onChange={toogleType}/> Bottomwear

            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" value={'Winterwear'}  onChange={toogleType}/> Winterwear

            </p>

          </div>

        </div>


      </div>

      {/* products part */}
      <div className="flex-1">
        
        {/* All collection */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
            collection.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description}/>
            ))
        }

      </div>
     
    
      </div>
      
    </div>
  )
}

export default Collection
