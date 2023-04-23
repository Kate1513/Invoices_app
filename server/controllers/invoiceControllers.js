import { productModel, invoiceModel, invoiceDetailsModel } from "../models/InvoiceModel.js";

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

//Get an invoice
export const getInvoice = async (req, res) => {
    try {
        const invoice = await invoiceModel.findOne({
            where: { id_invoice: req.params.id }
        })
        res.json(invoice)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Get all products
export const getAllProducts = async (req, res) => {
    try {
        const product = await productModel.findAll()
        res.json(product)
    } catch (error) {
        res.json( {message: error.message})
    }
}

//Get one product
export const getProduct = async (req, res) => {
    try {
        const product = await productModel.findOne({
            where: { id_product: req.params.id }
            })
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

//Post invoice details
export const createInvoiceDetails = async (req, res) => {
    try {
        await invoiceDetailsModel.create(req.body)
        res.json({ 'message': 'Detalles de factura generados'})
    } catch (error) {
        res.json( {message: error.message})
    }
}


