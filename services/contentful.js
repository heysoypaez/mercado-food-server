const ContentfulLib = require("../lib/contentful.js");	
const contentfulLib = new ContentfulLib();



class ContentfulService {

	constructor() {
		this.contentfulLib = new ContentfulLib();
	}

	async getAssets() {
		const assets = await this.contentfulLib.getAssets();
		return assets || [];
	}

	async getEntries({tags}) {
		const query = tags && {tags: { $in: tags} };
		const entries = await this.contentfulLib.getAll(query) ;
		return entries || [];
	}

	async getEntry({entryId}) {
		const entry = await this.contentfulLib.get(entryId) ;
		return entry || {};
	}

	async createEntry({contentTypeId, entry}) {
		const createdEntryId = await this.contentfulLib.create(contentTypeId, entry);
		return createdEntryId;
	}

	async updateEntry({entryId,entry} = {}) {
		const updatedEntryId = await this.contentfulLib.update( entryId, entry);
		return updatedEntryId;
	}

	async partialUpdateEntry() {
		const updatedEntryId = await Promise.resolve(entriesMock[0].id);
		return updatedEntryId;
	}

	async deleteEntry({entryId}) {
		const deletedEntryId = await this.contentfulLib.delete( entryId);
		return deletedEntryId;
	}
}


module.exports = ContentfulService;	