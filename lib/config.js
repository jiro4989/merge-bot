class Config {
    constructor(core) {
        this.blocking_labels = core.getInput('blocking-labels').split(',').map(x => x.trim());
        this.labels = core.getInput('labels').split(',').map(x => x.trim());
        this.merge_method = core.getInput('method');
        this.review_required = core.getInput('reviewers') === 'true';
        this.test_mode = core.getInput('test') === 'true';
    }
}

module.exports = Config;
