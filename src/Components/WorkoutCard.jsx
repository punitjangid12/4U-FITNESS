import React from 'react'

function WorkoutCard({ exercise, sets, reps }) {
  return (
    <div>
        <div className="bg-white shadow-md rounded-lg p-4 hover:scale-105 transform transition-transform duration-300">
      <h3 className="text-lg font-bold">{exercise}</h3>
      <p>Sets: {sets}</p>
      <p>Reps: {reps}</p>
    </div>
    </div>
  )
}

export default WorkoutCard