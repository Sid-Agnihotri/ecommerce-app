import React from 'react'

const ProductCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden  w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=3017&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-grey-900">NoFilter</h3>
        <p className="mt-2 text-sm text-gray-500">
          putent neglegentur ultrices falli iuvaret consequat inceptos iudicabit
          option ne
        </p>
      </div>
      <div />
    </div>
  )
}
export default ProductCard
