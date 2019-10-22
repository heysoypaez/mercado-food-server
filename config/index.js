require("dotenv").config();

const config = {
	dev: process.env.NODE_ENV !== "production",
	cors : process.env.CORS,
	port : process.env.PORT || 3000,
	contentful: {
		spaceId: process.env.SPACE_ID ,
		contentManagementApiKey: process.env.CONTENT_MANAGEMENT_API_KEY,
		environmentId: process.env.ENVIRONMENT_ID,
		contentTypesId:{ 
			product: process.env.CONTENT_TYPE_ID_PRODUCT
		}
	}
}

module.exports =  { config };