import { Router } from 'express';
import asyncHandler from 'express-async-handler'
import { sample_products, sample_tags } from '../data';
import { ProductModel } from '../models/product.model';
import { UserModel } from '../models/user.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) => {
        const productCount = await ProductModel.countDocuments();
        if (productCount > 0) {
            res.send("Seed already done!");
            return;
        } else {
            await ProductModel.create(sample_products);
            res.send("Seed is done!");
        }
    }
))

router.get("/", asyncHandler(
    async (req, res) => {
        const products = await ProductModel.find();
        res.send(products);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async (req, res) => {
        const searchRegEx = new RegExp(req.params.searchTerm, 'i');
        const products = await ProductModel.find({ name: { $regex: searchRegEx } });
        res.send(products);
    }
))

router.get("/tags", asyncHandler(
    async (req, res) => {
        const tags = await ProductModel.aggregate([
            {
                $unwind: '$tags'
            },
            {
                $group: {
                    _id: '$tags',
                    count: { $sum: 1}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({ count: -1 });

        const all = {
            name: 'All',
            count: await ProductModel.countDocuments()
        }

        tags.unshift(all);
        res.send(tags);
    }
))

router.get("/tag/:tagName", asyncHandler(
    async (req, res) => {
        const products = await ProductModel.find({ tags: req.params.tagName });
        res.send(products);
    }
))

router.get("/:productId", asyncHandler(
    async (req, res) => {
        const products = await ProductModel.findById(req.params.productId);
        res.send(products);
    }
))

router.get("/:id/delete", async (req, res) => {
    const product = await ProductModel.findById(req.params.id).lean();
    const user = localStorage.getItem('User');
    const isAdmin = user && user.hasOwnProperty('isAdmin')

    if (product && isAdmin) {
      await ProductModel.findByIdAndDelete(req.params.id);
    }
  
    res.redirect("/");
  });

export default router;