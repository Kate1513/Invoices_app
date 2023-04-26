import { useState, useEffect } from 'react'
import { InvoiceModal } from '../components/Invoice'
import { Sidebar } from '../components/Sidebar'

function Home() {
  const [invoices, setInvoices] = useState([])
  const [clients, setClients] = useState([])

  useEffect(() => {
    const URL = 'http://localhost:7000/invoices/'

    fetch(URL)
      .then((response) => response.json())
      .then(async (data) => {
        setInvoices(data)
        const URLs = data.map((invoice) => `http://localhost:7000/client/${invoice.id_client}`)
        const promises = URLs.map((url) => fetch(url).then((response) => response.json()))
        const clientsData = await Promise.all(promises)
        setClients(clientsData)
      })
      .catch((error) => {
        console.error('Error fetching data', error)
        // Maneja el error aquí, por ejemplo, mostrando una notificación al usuario
      })
  }, [])

  return (
    <>
      <main className='container'>
        <Sidebar />
        <h1 className='bg-warning mt-5 pt-3 '>Invoices</h1>
        <h4 className='d-flex justify-content-end me-3 me-sm-5' id='user'>
          User
        </h4>
        <section className='container bg-light border rounded'>
          <InvoiceModal />
          <section>
            <div className='d-flex mx-4 mt-3 text-center border rounded'>
              <p className='col'># Invoice</p>
              <p className='col'>Client</p>
              <p className='col'>Date</p>
              <p className='col'>Subtotal</p>
              <p className='col'>Discount</p>
              <p className='col'>Total</p>
              <p className='col'>Products</p>
            </div>
            {invoices.map((invoice, index) => (
              <div key={invoice.id_invoice} className='d-flex text-center mx-4 overflow-y-auto border'>
                <p className='col'>{invoice.id_invoice}</p>
                <p className='col'>{clients.length > 0 ? clients[index].name_client : ''}</p>
                <p className='col'>{invoice.date}</p>
                <p className='col'>{invoice.subtotal}</p>
                <p className='col'>{invoice.discount}</p>
                <p className='col'>{`$${invoice.total}`}</p>
                {/* <a className='icon-link' href='#'>
                  <svg className='bi' aria-hidden='true'>
                    <use xlinkHref='#box-seam'></use>
                  </svg>
                  Icon link
                </a> */}
                <p className='col'>{`products`}</p>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  )
}

export { Home }
