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
      <button type='button' className='btn btn-custom mt-3 ms-4' data-bs-toggle='modal' data-bs-target='#exampleModal'>
        Create Invoice
      </button>
      <section>
        <div
          className='modal fade modal-lg'
          id='exampleModal'
          tabIndex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <main className='modal-dialog max-w-full'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h1 className='modal-title fs-5' id='exampleModalLabel'>
                  Add New Invoice
                </h1>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
              </div>
              <form className='modal-body'>
                <h5 className='text-center mb-3'>User details</h5>
                <section className='d-flex flex-wrap justify-content-center justify-content-evenly bg-warning'>
                  <input type='date' className='text-center' required disabled></input>
                  <select name='Client' className='text-center' required>
                    {clients.map((client) => (
                      <option key={client.id_client} value={client.id_client}>
                        {client.name_client}
                      </option>
                    ))}
                  </select>
                </section>
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
