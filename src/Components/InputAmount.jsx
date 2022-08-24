import React from 'react'

const InputAmount = ({onChangeFunction, placeholder}) => {
  return (
    <input
        type="text"
        value={placeholder}
        onChange={onChangeFunction}
        className="w-full bg-inherit p-4 font-semibold text-2xl
                   border-solid border-b-2 border-grey-50
                   focus:outline-none
                   focus:border-solid focus:border-b-2 focus:border-indigo-600"
    >
    </input>
  )
}

export default InputAmount