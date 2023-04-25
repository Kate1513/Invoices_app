import { useEffect, useRef, useState } from 'react'

function InvoiceDetails() {
  const [products, setProducts] = useState([])
  const [details, setDetails] = useState([])

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

    const detailObject = {
      id_invoice: '',
      id_product: productId,
      quantity: quantityProduct,
      name_product: nameProduct,
      total_price: price * quantityProduct,
    }
    lastDetail.push(detailObject)
    setDetails(lastDetail)
  }

  return (
    <>
      <form>
        <select name='Product' ref={productRef} required>
          {products.map((product) => (
            <option key={product.id_product} value={product.id_product}>
              {product.name_product}
            </option>
          ))}
        </select>
        <input type='number' defaultValue={1} ref={quantityRef} required />
        <button type='button' onClick={addProduct} className='btn btn-secondary'>
          +
        </button>
        <div className='row'>
          <p className='col'>Product Id</p>
          <p className='col'>Quantity</p>
          <p className='col'>Product name</p>
          <p className='col'>Total price</p>
        </div>
        {details.map((detail) => (
          <div key={detail.id_product} className='row'>
            <p className='col'>{detail.id_product}</p>
            <p className='col'>{detail.quantity}</p>
            <p className='col'>{detail.name_product}</p>
            <p className='col'>{`$${detail.total_price}`}</p>
          </div>
        ))}

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
