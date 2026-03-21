import {Letter, Svg} from "../Models";

export class Helper {
  private static Tokenizer(text: string): string[] {
    return text.replace('\\p{P}', '').split(' ');
  }

  private static SvgUniquePartG(svg: Svg) {
    let paths = '';
    svg.paths.forEach(x => {
      paths += '<path d="' + x.d + '" style="' + x.style + '" />';
    });

    return '<g>' + paths + '</g>';
  }

  static SvgToString(svg: Svg) {
    let paths = '';
    svg.paths.forEach(x => {
      paths += '<path d="' + x.d + '" style="' + x.style + '" />';
    });

    let gTag = `<g>${paths}</g>`;
    if (svg.transform) {
      gTag = `<g transform="${svg.transform}">${paths}</g>`;
    }
    let viewBox = '';
    if (svg.viewBox) {
      viewBox = `viewBox="${svg.viewBox}"`;
    }
    // tslint:disable-next-line:max-line-length
    const ret = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" ${viewBox} width="${svg.width}" height="${svg.height}">${gTag}</svg>`;

    return ret;
  }

  static Decipher(Alphabet: Letter[], value: string): { Original: string, Reverse: string } {
    const pattern = new RegExp('<\\s*svg[^>]*>(.*?)<\\s*/\\s*svg>');
    // const pattern   = new RegExp('<\\s*svg[^>]*><g>(.*?)</g><\\s*/\\s*svg>');
    const parts = value.split(pattern).filter(x => x.length > 0);

    // console.log(parts);

    const alphabet: { Value: string; Vector: string; }[] = [];
    Alphabet.forEach(x => {
      x.Vectors.forEach(a => {
        alphabet.push({Value: x.Value, Vector: Helper.SvgUniquePartG(a)});
      });
    });
    console.log(alphabet);

    const results: string[] = [];
    parts.forEach((part) => {
      // console.log(alphabetOld.find(x => x.Vectors.indexOf(part) > 0));
      const letter = alphabet.find(x => x.Vector === part);
      if (letter) {
        results.push(letter.Value);
      }
    });
    // console.log(results);

    const original = results.join('');
    const reverse = results.reverse().join('');

    return {Original: original, Reverse: reverse};
  }
}
