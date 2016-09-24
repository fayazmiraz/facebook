import { assert } from 'chai';
import { parser, loadFixture } from './utils';

import { identify } from '../src/scrape';

describe('Scrape', function () {
    it('identifies simple posts', function () {
        const post = loadFixture('post');
        assert.equal(identify(post, parser), 'post');
    });

    it('identifies sponsored posts', function () {
        const post = loadFixture('sponsored');
        assert.equal(identify(post, parser), 'sponsored');
    });
});
