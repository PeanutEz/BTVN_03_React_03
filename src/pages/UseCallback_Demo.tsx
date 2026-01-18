import React from 'react'

export default React.memo(function UseCallback_Demo({submitForm, total} : {submitForm: () => void, total: number}) {
    console.log('FORM RENDERED');

  return (
    <>
        <div>Form</div>
        <p>Total: {total}</p>
        <input type="text" id="name"/>
        <label htmlFor="name">Name</label>
        <button onClick={submitForm}>Submit</button>
    </>
  )
});
