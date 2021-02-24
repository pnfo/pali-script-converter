import * as PS from './pali-script';

// TODO: Use number as intermediate language instead of Sinh.
export const convert = (input, fromScript, toScript) => {
    const sinh = this.convertToSinh(input, fromScript);
    return this.convertFromSinh(sinh, toScript);
};

export const getLocaleForScript = (s) => PS.PaliScriptInfo.get(s)?.[3].locale;

export const getLocaleNameForScript = (s) => PS.PaliScriptInfo.get(s)?.[3].localeName;

export const getSupportedLocales = () => {
    const sInfos = Object.getOwnPropertyNames(PS.Script).map((k) => PS.PaliScriptInfo.get(PS.Script[k])?.[3]);
    const ls = new Set(sInfos.map((si) => si.locale));
    return ls;
};
