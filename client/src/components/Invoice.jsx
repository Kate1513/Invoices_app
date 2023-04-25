import { useEffect, useState } from 'react'
import { InvoiceDetails } from './InvoiceDetails'

function InvoiceModal() {
  const [clients, setClients] = useState([])

  useEffect(() => {
    const URL = `http://localhost:7000/clients/`
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setClients(data))
  }, [])

  return (
    <>
      <button type='button' className='btn btn-custom' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        Create Invoice
      </button>
      <section>
        <div
          className='modal fade'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <main className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Add New Invoice
                </h1>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <form className='modal-body'>
                <h6>User details</h6>
                <input type='date' required disabled></input>
                <select name='Client' required>
                  {clients.map((client) => (
                    <option key={client.id_client} value={client.id_client}>
                      {client.name_c}
                    </option>
                  ))}
                </select>
                <label htmlFor='Discount'>Discount</label>
                <input name='Discount' placeholder='Discount' required></input>
              </form>
              <InvoiceDetails />
            </div>
          </main>
        </div>
      </section>
    </>
  )
}

export { InvoiceModal }
