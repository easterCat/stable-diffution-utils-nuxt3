import Request from '~~/utils/request';

class EhtagsApi extends Request {
    getEhtags() {
        return this.get(
            'https://raw.githubusercontent.com/scooderic/exhentai-tags-chinese-translation/master/dist/ehtags-cn.json',
        );
    }
}

export default new EhtagsApi();
