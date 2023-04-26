import { useEffect, useRef, useState } from 'react'
import '../index.css'

function InvoiceDetails() {
  const [products, setProducts] = useState([])
  const [details, setDetails] = useState([])
  const [subtotal, setSubtotaL] = useState(0)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  const productRef = useRef()
  const quantityRef = useRef()

  useEffect(() => {
    const URL = 'http://localhost:7000/products/'
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])

  function addProduct() {
    const lastDetail = [...details]
    const productId = productRef.current.value
    const quantityProduct = Number(quantityRef.current.value)
    const filterProduct = products.filter((product) => product.id_product === Number(productId))
    const nameProduct = filterProduct[0].name_product
    const price = filterProduct[0].price
    const totalPrice = price * quantityProduct
    const lastSubtotal = subtotal + totalPrice

    const detailObject = {
      id_invoice: '',
      id_product: productId,
      quantity: quantityProduct,
      name_product: nameProduct,
      total_price: totalPrice,
    }

    lastDetail.push(detailObject)
    setDetails(() => lastDetail)
    setSubtotaL(() => lastSubtotal)
    setTotal(() => lastSubtotal - (lastSubtotal * discount) / 100)
  }

  function handleDiscount(actualDiscount) {
    setTotal(() => subtotal - (subtotal * actualDiscount) / 100)
    return setDiscount(actualDiscount)
  }

  return (
    <>
      <form>
        <section className='d-flex justify-content-center my-2 my-lg-0'>
          <label htmlFor='Discount' className='text-center'>
            Discount
          </label>
          <input
            name='Discount'
            className='mx-3 col-2 text-center'
            onChange={(e) => handleDiscount(e.target.value)}
            placeholder='%'
            required
          ></input>
        </section>
        <section className='d-flex flex-wrap justify-content-center'>
          <select className='mx-3 text-center' name='Product' ref={productRef} required>
            {products.map((product) => (
              <option key={product.id_product} value={product.id_product}>
                {product.name_product}
              </option>
            ))}
          </select>
          <input type='number' className='mx-2 col-1 text-center' defaultValue={1} ref={quantityRef} required />
          <button type='button' onClick={addProduct} className='btn btn-secondary'>
            +
          </button>
        </section>
        <div className='d-flex bg-danger mx-4 mt-4 text-center border'>
          <p className='col'>Product Id</p>
          <p className='col'>Quantity</p>
          <p className='col'>Product name</p>
          <p className='col'>Total price</p>
        </div>
        {details.map((detail) => (
          <div key={detail.id_product} className='d-flex text-center mx-4 overflow-y-auto border'>
            <p className='col'>{detail.id_product}</p>
            <p className='col'>{detail.quantity}</p>
            <p className='col'>{detail.name_product}</p>
            <p className='col'>{`$${detail.total_price}`}</p>
          </div>
        ))}
        <p className='d-flex justify-content-end me-5'>Subtotal: ${subtotal}</p>
        <p className='d-flex justify-content-end me-5'>Total: ${total}</p>
        <div className='modal-footer'>
          <button type='submit' className='btn btn-custom'>
            Add
          </button>
          <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
            Cancel
          </button>
        </div>
      </form>
    </>
  )
}

export { InvoiceDetails }
