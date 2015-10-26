///<reference path="../../../../typings/tsd.d.ts"/>
describe('regression against strapdown.js', function () {
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });
    it('bootdown should make the same rendering as strapdown.js', function () {
        var loaded = browser.get('strapdown-sample.html');
        browser.wait(loaded);
        var body = element(by.tagName('body'));
        expect(body.getInnerHtml()).toEqual("");
    });
});
//# sourceMappingURL=strapdown-regression-spec.js.map