import { productModel, invoiceModel } from "../models/InvoiceModel.js";

//Create endpoints

//Get all invoices
export const getAllinvoices = async (req, res) => {
    try {
        const invoices = await invoiceModel.findAll()
        res.json(invoices)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Get a product
export const getProduct = async (req, res) => {
    try {
        const product = await productModel.findOne()
        res.json(product)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Post an invoice
export const createInvoice = async (req, res) => {
    try {
        await invoiceModel.create(req.body)
        res.json({ 'message': 'Factura generada'})
    } catch (error) {
        res.json( {message: error.message})
    }
}


