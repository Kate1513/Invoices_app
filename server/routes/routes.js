import express from "express"
import { createInvoice, getAllinvoices, getProduct } from "../controllers/invoiceControllers.js"

const router = express.Router()

router.get('/', getAllinvoices)
router.get('/:id', getProduct)
router.post('/', createInvoice)

export { router }