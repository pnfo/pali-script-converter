import * as PS from './pali-script';
import * as PSE from './pali-script-extensions';

describe('test getLocaleForScript', () => {
    const testCases = [
        { s: PS.Script.SI, l: 'si' },
        { s: PS.Script.RO, l: 'en' },
        { s: PS.Script.TIBT, l: 'bo' },
    ];

    testCases.forEach(({ s, l }) => {
        it(`checking ${s} -> ${l}`, () => {
            const actual = PSE.getLocaleForScript(s);
            expect(actual).toEqual(l);
        });
    });
});

describe('test getLocaleNameForScript', () => {
    const testCases = [
        { s: PS.Script.SI, ln: 'සිංහල' },
        { s: PS.Script.THAI, ln: 'ไทย' },
        { s: PS.Script.MALA, ln: 'മലയാളം' },
    ];

    testCases.forEach(({ s, ln }) => {
        it(`checking ${s} -> ${ln}`, () => {
            const actual = PSE.getLocaleNameForScript(s);
            expect(actual).toEqual(ln);
        });
    });
});

it(`checking getSupportedLocales`, () => {
    const actual = PSE.getSupportedLocales();
    const expected = new Set([
        'si',
        'hi',
        'en',
        'th',
        'my',
        'lo',
        'km',
        'bn',
        'pa',
        'gu',
        'te',
        'kn',
        'ml',
        'bo',
        'ru',
    ]);
    expect(actual).toEqual(new Set(expected));
});
