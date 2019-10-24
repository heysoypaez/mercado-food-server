const express = require("express");
const ContentfulService = require("../services/contentful.js");

function contentfulApi(app) {
	const router = express.Router();
	const contentfulService = new ContentfulService();
	app.use("/api/contentful", router);

	router.get("/", async function(req,res,next) {
		
		const {tags} = req.query;

		try {
			//throw new Error("Error getting contentful");
			const contentful = await contentfulService.getContentful({
				tags
			});

			res.status(200).json({
				data:contentful,
				message: "contentful listed"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.get("/assets", async function(req,res,next) {
		
		try {
			//throw new Error("Error getting contentful");
			const contentful = await contentfulService.getAssets();

			res.status(200).json({
				data:contentful,
				message: "Assets listed"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.get("/:entryId" , async function(req,res,next) {
		
		const {entryId} = req.params;
		console.log(entryId)

		try {
			const entry = await contentfulService.getEntry({ entryId });

			res.status(200).json({
				data: entry,
				message: "entry retrieve"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.post( "/", async function(req,res,next) {
					
				const {body: contentful} = req;

				try {
					const createdcontentfulId = await contentfulService.createEntry({contentful});

					res.status(201).json({
						data:createdcontentfulId,
						message: "Entry created"
					});
				}
				catch(error) {
					next(error);
				}
			}
	);

	router.put("/:contentfulId" , async function(req,res,next) {
		const {contentfulId} = req.params;
		const {body: contentful} = req;		
		try {
			const updatedcontentfulId = await contentfulService.updatecontentful({contentfulId,contentful});

			res.status(200).json({
				data:updatedcontentfulId,
				message: "contentful updated "
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.patch("/:contentfulId", async function(req,res,next) {
		const {contentfulId} = req.params;
		const {body: contentful} = req;		
		try {
			const updatedcontentfulId = await contentfulService.partialUpdatecontentful({contentfulId,contentful});

			res.status(200).json({
				data:updatedcontentfulId,
				message: "contentful updated partially"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.delete("/:contentfulId" , async function(req,res,next) {
		const {contentfulId} = req.params;		
		try {
			const deletedcontentfulId = await contentfulService.deletecontentful({contentfulId});

			res.status(200).json({
				data: deletedcontentfulId,
				message: "contentful deleted"
			});
		}
		catch(error) {
			next(error);
		}
	});
}

 module.exports = contentfulApi;