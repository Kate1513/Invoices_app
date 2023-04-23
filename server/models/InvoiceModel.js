//import database and sequelize
import {db} from '../database/db.js'
import { DataTypes } from 'sequelize'

const adminModel = db.define('admin', {
    id_admin: { type: DataTypes.INTEGER, primaryKey:true },
    name_a: { type: DataTypes.STRING},
    email_a: { type: DataTypes.STRING},
    password_a: { type: DataTypes.STRING},
    createdAt: { type: DataTypes.DATE},
    updateAt: { type: DataTypes.DATE},    
});

const clientModel = db.define('clients', {
    id_client: { type: DataTypes.INTEGER, primaryKey:true },
    name_c: { type: DataTypes.STRING},
    contact_c: { type: DataTypes.STRING},
    phone_c: { type: DataTypes.STRING},
    email_c: { type: DataTypes.STRING},
    password_c: { type: DataTypes.STRING},
    date_entry: { type: DataTypes.DATE},
    createdAt: { type: DataTypes.DATE},
    updatedAt: { type: DataTypes.DATE},  
});

const productModel = db.define('products', {
    id_product: { type: DataTypes.INTEGER, primaryKey:true },
    name_product: { type: DataTypes.STRING},
    price: { type: DataTypes.DOUBLE},
    createdAt: { type: DataTypes.DATE},
    updatedAt: { type: DataTypes.DATE},  
})

const invoiceModel = db.define('invoice', {
    id_invoice: { type: DataTypes.INTEGER, primaryKey:true },
    id_admin: { type: DataTypes.INTEGER},
    id_client: { type: DataTypes.INTEGER},
    date: { type: DataTypes.DATE},
    subtotal: { type: DataTypes.DOUBLE},
    discount: { type: DataTypes.FLOAT},
    total: { type: DataTypes.DOUBLE},
    createdAt: { type: DataTypes.DATE},
    updatedAt: { type: DataTypes.DATE},  
})

const invoiceDetailsModel = db.define('invoice_details', {
    id_details: { type: DataTypes.INTEGER, primaryKey:true },
    id_invoice: { type: DataTypes.INTEGER},
    id_product: { type: DataTypes.INTEGER},
    quantity: { type: DataTypes.INTEGER},
    price: { type: DataTypes.DOUBLE},
    total_price: { type: DataTypes.DOUBLE},
    createdAt: { type: DataTypes.DATE},
    updatedAt: { type: DataTypes.DATE},  
})

export { adminModel, clientModel, productModel, invoiceModel, invoiceDetailsModel }