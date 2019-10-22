const Contentful = require('contentful-management')
const { config } = require("../config/index.js");

const CONTENT_MANAGEMENT_API_KEY = config.contentful.contentManagementApiKey;
const SPACE_ID = config.contentful.spaceId;
const ENVIRONMENT_ID = config.contentful.environmentId


class ContentfulLib {

	constructor() {
		this.spaceId = SPACE_ID;
		this.environmentId = ENVIRONMENT_ID
		this.client = new Contentful.createClient({ accessToken: CONTENT_MANAGEMENT_API_KEY });
	}

	getAll(query) {
	}

	get(id) {
		// Get entry
		return(
			this.client.getSpace(this.spaceId)
			.then((space) => space.getEnvironment(this.environmentId))
			.then((environment) => environment.getEntry(id))
			.then((entry) => entry)
			.catch(console.error)
		)	
	}

	create(contentTypeId,data) {
		// Create entry
		return (
			this.client.getSpace(this.spaceId)
			.then((space) => space.getEnvironment(this.environmentId))
			.then((environment) => environment.createEntry(contentTypeId, data))
			.then((entry) => console.log(entry))
			.catch(console.error)
		)
	}

	update(id,data) {
		// Update entry
		return(
			this.client.getSpace(config.contentful.spaceId)
			.then((space) => space.getEnvironment(this.environmentId))
			.then((environment) => environment.getEntry(id))
			.then((entry) => {
			  entry.fields.title['en-US'] = 'New entry title'
			  return entry.update()
			})
			.then((entry) => console.log(`Entry ${entry.sys.id} updated.`))
			.catch(console.error)
		)
	}

	delete(id) {
	}
}

module.exports = ContentfulLib;