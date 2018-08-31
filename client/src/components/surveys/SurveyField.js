import React from 'react'

export default ({ label, input, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
}
