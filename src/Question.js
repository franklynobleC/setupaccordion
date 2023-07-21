import React, { useState } from 'react'
import data from './data'

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { type } from '@testing-library/user-event/dist/type'

const Question = ({ info, title }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div div>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <p>{showAnswer ? info : `${info.substring(0, 0)}...`}</p>
          <button className='btn' onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
      </article>
    </div>
  )
}

export default Question
