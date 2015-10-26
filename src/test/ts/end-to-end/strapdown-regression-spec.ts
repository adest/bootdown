///<reference path="../../../../typings/tsd.d.ts"/>

describe('regression against strapdown.js', () => {

    beforeEach(() =>{
        browser.ignoreSynchronization =  true;
    });

    it('bootdown should make the same rendering as strapdown.js', () => {
        var loaded = browser.get('strapdown-sample.html');
        browser.wait(loaded);
        var body = element(by.tagName('body'));

        expect(body.getInnerHtml()).toEqual("");

    });
});
