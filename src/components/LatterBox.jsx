

const LatterBox = () => {
    const onSubmitHandler =(event) => {
        event.preventDefault();
    }
  return (
    <div className="text-center mt-5">
            <p className="text-2xl font-medium text-gray-800">Subscribe now and get 30% discount</p>
            <p className="text-gray-500 mt-3">Join Today and Save 30% on Your First Purchase—Exclusive Discounts Await Our Subscribers!</p>
            <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-5 border pl-3">
                <input className="w-full sm:flex-1 outline-none" type="email" placeholder="Enter your email" />
                <button className="bg-blue-950 text-white text-xs px-10 py-4">SUBSCRIBE</button>
            </form>
      
    </div>
  )
}

export default LatterBox
