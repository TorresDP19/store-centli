'use strict';

const products_model = require('../models/products');
const joi = require('joi');
const path = require('path');
const fs = require('fs');
const mongoosePaginate = require('mongoose-pagination');

async function addProduct(req, res) {
    let params = req.body;

    let productsValue = {
        productName: params.productName,
        brand: params.brand,
        price: params.price,
        description: params.description,
        material: params.material,
        creation_date: new Date() // Fecha por defecto si no se proporciona
    };

    if (
        params.productName &&
        params.brand &&
        params.price &&
        params.description &&
        params.material
    ) {
        const schema = joi.object().keys({
            productName: joi.string().required().trim(),
            brand: joi.string().required().trim(),
            price: joi.string().required().trim(),
            description: joi.string().required().trim(),
            material: joi.string().required().trim(),
            creation_date: joi.date().optional()
        });

        let { error, value } = schema.validate(productsValue);

        if (error) {
            console.error('Validación fallida:', error.details);
            res.status(400).send({ ERROR: error.details[0].message });
        } else {
            console.log("---> Validación correcta de datos");
            let products = new products_model(productsValue);
            products.save((errSave, productsStored) => {
                if (errSave) {
                    console.error('Error al guardar producto:', errSave);
                    res.status(500).send({ message: 'Error al guardar el producto.' });
                } else {
                    res.status(200).send({ INFO_PRODUCT: productsStored });
                }
            });
        }
    } else {
        res.status(400).send({ message: 'Faltan parámetros en el formulario.' });
    }
}

function getProduct(req, res) {
    const productId = req.params.id;

    products_model.findById(productId, (err, product) => {
        if (err) {
            console.error('Error al buscar producto:', err);
            res.status(500).send({ message: 'Error al buscar el producto.' });
        } else if (!product) {
            res.status(404).send({ message: 'Producto no encontrado.' });
        } else {
            res.status(200).send({ product });
        }
    });
}

async function uploadImage(req, res) {
    const productId = req.params.id;

    if (!req.files || !req.files.image) {
        return res.status(400).send({ message: 'No se ha cargado ningún archivo.' });
    }

    const filePath = req.files.image.path;

    try {
        // Subir la imagen a Cloudinary
        const result = await cloudinary.uploader.upload(filePath, { folder: 'products' });
        console.log('Imagen subida:', result);

        // Actualizar el producto con la URL de la imagen
        const updateProduct = await products_model.findOneAndUpdate(
            { _id: productId },
            { image: result.secure_url },
            { new: true }
        );

        console.log('updateProduct:', updateProduct);

        if (!updateProduct) {
            return res.status(500).send({ message: 'Error al actualizar el producto.' });
        }

        res.status(200).send({ product: updateProduct });
    } catch (err) {
        console.error('Error al subir la imagen:', err);
        res.status(500).send({ message: 'Error al procesar la imagen.' });
    }
}

function deleteProduct(req, res) {

    var productId = req.params.id;

    products_model.findByIdAndRemove(productId, (err, productsRemoved) => {
        if(err) {
            res.status(500).send({message: 'ERROR: Se encontraron problemas al realizar está petición.'});
            console.log("---> ERROR: Se encontraron problemas al realizar está petición.");
        }
        else {
            if(!productsRemoved) {
                res.status(404).send({message: 'ERROR: El producto que intentas buscar no existe.'});
                console.log("---> ERROR: El producto que intentas buscar no existe.");
            }
            else {
                res.status(200).send({productsRemoved});
                console.log(`---> El producto se elimino con exito ${productsRemoved}`);
            }
        }
    });

}

function updateProduct(req, res) {
    const productId = req.params.id;
    const update = req.body;

    products_model.findOneAndUpdate({ _id: productId }, update, { new: true }, (err, productsUpdate) => {
        if (err) {
            console.error('Error al actualizar producto:', err);
            res.status(500).send({ message: 'Error al actualizar el producto.' });
        } else if (!productsUpdate) {
            res.status(404).send({ message: 'Producto no encontrado.' });
        } else {
            res.status(200).send({ INFO_PRODUCT: productsUpdate });
        }
    });
}

function getAllProducts(req, res) {
    var page = req.params.page;
    var itemsPerPage = 50;
    var total = total;

    products_model.find().sort('category').paginate(page, itemsPerPage, function (err, product, total){
        if(err) {
            res.status(500).send({message: 'ERROR: Se encontraron problemas al realizar está petición.'});
            console.log('---> ERROR: Se encontraron problemas al realizar está petición.');
        }
        else {
            if(!product) {
                res.status(404).send({message: 'Los productso a buscar no existen.'});
            }
            else {
                return res.status(200).send({
                    pages: total,
                    total: total,
                    product: product
                });
            }
        }
    });
}

async function getImage(req, res) {
    try {
        const productId = req.params.id;
        const product = await products_model.findById(productId);

        if (!product || !product.image) {
            return res.status(404).send({ message: 'Imagen no encontrada.' });
        }

        // Redirige a la URL de Cloudinary
        return res.redirect(product.image);
    } catch (err) {
        console.error('Error al obtener la imagen:', err);
        return res.status(500).send({ message: 'Error interno del servidor.' });
    }
}

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dxio4wfhm',
    api_key: '852642134579854',
    api_secret: 'Osm10PRZ7L5G2Avdjzu7PzvYUj4'
});

module.exports = {
    addProduct,
    getProduct,
    uploadImage,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getImage,
    cloudinary
};
