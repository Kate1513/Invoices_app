import express from "express"
import { createInvoice, getAllinvoices, getProduct, getAllProducts, getInvoice, createInvoiceDetails } from "../controllers/invoiceControllers.js"

const router = express.Router()

router.get('/invoices/', getAllinvoices)
router.get('/invoice/:id', getInvoice)
router.get('/products/', getAllProducts)
router.get('/product/:id', getProduct)
router.post('/invoice/create', createInvoice)
router.post('/invoice/create/details', createInvoiceDetails)

export { router }