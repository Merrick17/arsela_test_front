import React from 'react'

const DisplayCard = ({ input }) => {
  return (
    <div>
      <div class="card" style={{ width: '18rem' }}>
        <div class="card-header">{input.name}</div>
        <ul class="list-group list-group-flush">
          {input.answers.map((ans, ind) => (
            <li class="list-group-item" key={ind}>
              {ans}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DisplayCard
