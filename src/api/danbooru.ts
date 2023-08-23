import Request from '~~/src/utils/request';

class DanbooruApi extends Request {
    analysisImage(body?: any) {
        return this.post('/danbooru/analysis', body);
    }

    async searchBooruList(params?: any) {
        const result = await this.get('/danbooru/list', params);
        const { data } = toRaw(result);
        return { templates: data.list, total: data.total };
    }

    async getBooruTags(params?: any) {
        const result = await this.get('/danbooru/tags', params);
        const { data } = toRaw(result);
        return { tags: data.tags, total: data.total };
    }
}

export default new DanbooruApi();
