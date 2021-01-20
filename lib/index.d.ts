/* eslint-disable max-classes-per-file */
declare module '@pathnirvanafoundation/pali-script-converter' {
  export class Obj1 {
    constructor()
    get name()
    static get oneThird()
  }

  export class Obj2 {
    constructor()
    get name()
  }

  export class TextProcessor {
    static basicConvert(text: string, script: string): string
    static basicConvertFrom(text: string, script: string): string
    static beautify(text: string, script: string, rendType = ''): string
    static convert(text: string, script: string): string
    static convertFrom(text: string, script: string): string
    static convertFromMixed(mixedText: string): string
  }

  export const Script: any

  export const paliScriptInfo: Map

  export const getScriptForCode: (charCode: number) => string
}
