import {Alphabet, Letter, LetterType, Svg} from "./index";

export class Database {

  static GetAlphabet(name: string): Alphabet {
    let alphabet = {} as Alphabet;
    switch (name) {
      case 'Aurebesh':
        alphabet = {Name: 'Aurebesh', Letters: this.Aurebesh(), RTL: false};
        break;
      case 'Futhark':
        alphabet = {Name: 'Futhark', Letters: this.Futhark(), RTL: true};
        break;
      case 'Orkhon':
        alphabet = {Name: 'Orkhon', Letters: this.Orkhon(), RTL: true};
        break;
      case 'Yenisei':
        alphabet = {Name: 'Yenisei', Letters: this.Yenisei(), RTL: true};
        break;
    }

    return alphabet;
  }

  private static Aurebesh(sort: boolean = false): Letter[] {
    const sp = LetterType.Separator;
    const v = LetterType.Vowel;
    const c = LetterType.Consonants;
    const s = LetterType.Syllable;
    const styleText = 'fill:currentColor';

    //#region Alphabet
    const svgA1 = {
      width: '80', height: '60', viewBox: '30 -10 40 80', paths: [{
        style: styleText,
        d: 'm0.210388,0.066761l0,24.706836l52.608037,0l46.971187,-24.706836l-27.243868,0l-21.607077,11.403187l-38.517273,0l0,-11.403187l-12.211005,0zm0,35.159643l0,24.706836l12.211005,0l0,-11.403187l38.517273,0l21.607077,11.403187l27.243868,0l-46.971187,-24.706836l-52.608037,0z'
      }]
    } as Svg;
    const svgA2 = {
      width: '76', height: '60', viewBox: '28 -10 40 80', paths: [{
        style: styleText,
        d: 'm0.229412,0.602715l0,25.72263l51.445247,0l44.095927,-25.72263l-44.095927,0l0,11.023985l-36.746602,0l0,-11.023985l-14.698645,0zm0,33.071951l0,25.722621l14.698645,0l0,-11.023981l36.746602,0l0,11.023981l44.095927,0l-44.095927,-25.722621l-51.445247,0z'
      }]
    } as Svg;
    const svgE1 = {
      width: '70', height: '60', viewBox: '31 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.34203,0.05326l29.47244,59.89347l14.26066,0l23.38126,-47.53443l3.23785,0l0,47.53443l12.35844,0l0,-47.53443l7.60529,0l0,-12.35904l-17.1128,0l-14.25947,0l-22.34151,44.68242l-22.34151,-44.68242l-14.26066,0z'
      }]
    } as Svg;
    const svgE2 = {
      width: '66', height: '60', viewBox: '27 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.07635,0.17498l0,13.25554l40.28449,0l-40.28449,16.56948l0,29.82502l16.56948,0l0,-23.19723l53.02225,-21.85098l0,21.85098l13.25558,0l0,-36.45281l-13.25558,0l-69.59172,0zm19.88337,49.70835l0,9.94169l13.25554,0l0,-9.94169l-13.25554,0z'
      }]
    } as Svg;
    const svgI1 = {
      width: '30', height: '60', viewBox: '08 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.1625,18.2821l8.70002,8.69978l12.66466,-12.66478l0,45.51011l12.31031,0l0,-48.29166l0,-11.36276l-12.31031,0l-3.25475,0l-18.10993,18.10931z'
      }]
    } as Svg;
    const svgI2 = {
      width: '56', height: '60', viewBox: '20 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.214,0.18349l0,59.63303l13.25156,0l0,-59.63303l-13.25156,0zm19.87754,6.6259l0,46.38123l13.25196,0l0,-46.38123l-13.25196,0zm19.87794,16.56471l0,13.2518l29.81651,0l0,-13.2518l-29.81651,0z'
      }]
    } as Svg;
    const svgO1 = {
      width: '68', height: '60', viewBox: '28 -10 30 80', paths: [{
        style: styleText,
        d: 'm20.7797,0.21487l-19.85715,47.27793l7.56423,12.29232l14.18368,0l40.65908,0l14.18368,0l7.56423,-12.29232l-19.85715,-47.27794l-0.94598,0l-13.23651,0l-16.07563,0l-14.18249,0zm9.01179,12.29232l26.41703,0l14.68526,34.98561l-55.78754,0l14.68526,-34.98561z'
      }]
    } as Svg;
    const svgO2 = {
      width: '67', height: '60', viewBox: '27 -10 30 80', paths: [{
        style: styleText,
        d: 'm20.47231,0.19255l-19.8715,46.36713l9.93595,13.24777l62.92689,0l9.93555,-13.24777l-19.8715,-46.36713l-3.31198,0l-26.49547,0l-13.24793,0zm7.55557,13.24773l27.94464,0l14.17914,33.1194l-56.30292,0l14.17914,-33.1194zm5.69236,9.93583l0,13.24777l16.55992,0l0,-13.24777l-16.55992,0z'
      }]
    } as Svg;
    const svgU = {
      width: '66', height: '60', viewBox: '27 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.23501,0.08233l0,59.83534l12.34651,0l72.18348,0l0,-12.34686l0,-47.48848l-38.94112,0l-20.89465,24.69397l17.09628,0l10.44732,-12.34699l19.94446,0l0,35.14151l-59.83577,0l0,-47.48848l-12.34651,0z'
      }]
    } as Svg;


    const svgB1 = {
      width: '76', height: '60', viewBox: '30 -10 40 80', paths: [{
        style: styleText,
        d: 'm17.572404,0.338509l-16.59623,19.774287l16.949796,0l6.327402,-7.533084l49.494448,0l6.326215,7.533084l16.949796,0l-16.59623,-19.774287l-0.353566,0l-16.59623,0l-28.955605,0l-16.59623,0l-0.353566,0zm11.65343,23.540948l0,12.241203l39.548338,0l0,-12.241203l-39.548338,0zm-28.24966,16.007745l16.59623,19.774287l0.353566,0l16.59623,0l28.955605,0l16.59623,0l0.353566,0l16.59623,-19.774287l-16.949796,0l-6.326215,7.533084l-49.494448,0l-6.327402,-7.533084l-16.949796,0z'
      }]
    } as Svg;
    const svgB2 = {
      width: '76', height: '60', viewBox: '30 -10 40 80', paths: [{
        style: styleText,
        d: 'm19.064269,0.06428l-18.7098,22.451791l18.7098,0l6.197646,-7.483929l47.476166,0l6.197646,7.483929l18.7098,0l-18.7098,-22.451791l-18.709845,0l-22.451769,0l-18.709845,0zm-18.7098,37.419653l18.7098,22.451787l18.709845,0l22.451769,0l18.709845,0l18.7098,-22.451787l-18.7098,0l-6.197646,7.483924l-47.476166,0l-6.197646,-7.483924l-18.7098,0z'
      }]
    } as Svg;
    const svgC1 = {
      width: '42', height: '60', viewBox: '22 -10 10 80', paths: [{
        style: styleText,
        d: 'm1.005569,0.224821l0,39.700237l12.288861,0l0,-39.700237l-12.288861,0zm19.850595,19.850119l0,19.850119l12.28767,0l0,-19.850119l-12.28767,0zm19.849404,0l0,39.700237l12.288861,0l0,-39.700237l-12.288861,0z'
      }]
    } as Svg;
    const svgC2 = {
      width: '42', height: '60', viewBox: '22 -10 10 80', paths: [{
        style: styleText,
        d: 'm0.434097,0.21039l0,40.960729l14.894782,0l0,-40.960729l-14.894782,0zm37.237022,0l0,14.894782l14.894782,0l0,-14.894782l-14.894782,0zm-18.618534,18.618489l0,22.34224l14.894827,0l0,-22.34224l-14.894827,0zm18.618534,0l0,40.960729l14.894782,0l0,-40.960729l-14.894782,0z'
      }]
    } as Svg;
    const svgCH = {
      width: '76', height: '60', viewBox: '34 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.197052,0.165863l0,12.312503l57.389289,0l17.818246,35.043387l-75.207535,0l0,12.312383l81.452454,0l6.629185,0l8.524261,0l-30.308084,-59.668272l-0.947538,0l-65.350277,0z'
      }]
    } as Svg;
    const svgD1 = {
      width: '60', height: '60', viewBox: '23 -10 30 80', paths: [{
        style: styleText,
        d: 'm11.566115,0.150467l-10.87361,13.059197l14.837636,0l22.474356,0l10.464073,0l-8.656382,10.260738l-24.514874,0l-10.87361,13.059197l24.369208,0l-19.705507,23.319935l16.790993,0l50.429096,-59.699066l-12.592946,0l-4.196853,0l-10.639589,0l-22.475549,0l-14.836442,0z'
      }]
    } as Svg;
    const svgD2 = {
      width: '60', height: '60', viewBox: '23 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.311111,0.248898l0,59.502203l14.875573,0l59.502203,0l0,-14.875573l-59.502203,0l0,-44.62663l-14.875573,0zm18.594467,0l0,40.907782l14.875529,0l0,-40.907782l-14.875529,0z'
      }]
    } as Svg;
    const svgF1 = {
      width: '70', height: '60', viewBox: '30 -10 30 80', paths: [{
        style: styleText,
        d: 'm38.47366,0.16674l0,16.14018c-10.20896,0.98128 -22.04802,1.22913 -38.22364,1.57329l0,1.86458l0,10.25514l0,29.83332l13.05267,0l75.5141,0l0,-13.05208l-37.29165,0l0,-20.19c11.66483,-2.32843 22.63394,-6.50939 38.22483,-14.30472l0,-12.11973c-15.59089,7.79545 -26.56001,11.97617 -38.22483,14.30484l0,-14.30484l-13.05148,0zm0,28.26003l0,18.35441l-25.17097,0l0,-17.07253c9.80084,-0.24463 17.95727,-0.58843 25.17097,-1.28188z'
      }]
    } as Svg;
    const svgF2 = {
      width: '36', height: '60', viewBox: '12 -10 20 80', paths: [{
        style: styleText,
        d: 'm20.34538,0.21655l-19.85566,9.92783l0,3.30924l0,13.23711l0,6.61855l0,9.92783l0,6.61851l19.85566,9.92783l0,-16.54635l-6.61855,-3.30928l0,-19.85566l6.61855,-3.30928l0,-16.54635zm9.92783,0l0,59.56691l13.23707,0l0,-59.56691l-13.23707,0z'
      }]
    } as Svg;
    const svgG1 = {
      width: '70', height: '60', viewBox: '30 -10 30 80', paths: [{
        style: styleText,
        d: 'm23.9484,0.10682l0,16.81494l12.14383,0l0,-4.67076l31.61628,0l-19.58844,35.49822l-35.38163,0l0,-46.70818l-12.14383,0l0,58.85213l54.85289,0c0,0 32.95789,-59.78635 32.95789,-59.78635l-64.45699,0z'
      }]
    } as Svg;
    const svgG2 = {
      width: '68', height: '60', viewBox: '28 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.5211,0.19373l0,59.61254l13.22429,0l39.67282,0l33.06068,-59.50921l-62.81532,0l0,16.53032l13.22429,0l0.10333,-3.30607l29.65128,0l-19.7331,33.06068l-33.16397,0l0,-46.28493l-13.22429,-0.10333zm23.14246,23.24579l0,16.53036l13.22429,0l0,-16.53036l-13.22429,0z'
      }]
    } as Svg;
    const svgH1 = {
      width: '74', height: '60', viewBox: '33 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.25662,0.18995l0,12.2905l95.48676,0l0,-12.2905l-95.48676,0zm16.07245,23.63553l0,12.29026l63.34185,0l0,-12.29026l-63.34185,0zm-16.07245,23.69432l0,12.29026l95.48676,0l0,-12.29026l-95.48676,0z'
      }]
    } as Svg;
    const svgH2 = {
      width: '72', height: '60', viewBox: '32 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.16072,0.21048l0,13.23977l92.67856,0l0,-13.23977l-92.67856,0zm16.54956,23.16962l0,13.23981l59.57945,0l0,-13.23981l-59.57945,0zm-16.54956,23.16962l0,13.23981l92.67856,0l0,-13.23981l-92.67856,0z'
      }]
    } as Svg;
    const svgJ = {
      width: '67', height: '60', viewBox: '28 -10 30 80', paths: [{
        style: styleText,
        d: 'm71.38694,0.20932c0,0 -13.24017,22.69763 -70.9304,23.64343l0,12.29462c30.24111,0.37798 47.61026,-3.31094 57.60206,-7.89096l-9.16242,19.23977l-48.43964,0l0,12.29449l56.74408,0l28.34285,-59.58135l-14.15653,0z'
      }]
    } as Svg;
    const svgK1 = {
      width: '70', height: '60', viewBox: '30 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.472,0.15636l0,12.31638l76.7401,0l0,35.05453l-76.7401,0l0,12.31638l89.056,0l0,-5.68439l0,-6.63199l0,-35.05453l0,-12.31638l-12.3159,0l-76.7401,0z'
      }]
    } as Svg;
    const svgK2 = {
      width: '68', height: '60', viewBox: '29 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.41707,0.17334l0,13.25627l72.9094,0l0,33.14074l-72.9094,0l0,13.25631l86.16587,0l0,-13.25631l0,-36.45478l0,-9.94223l-86.16587,0zm0,23.19851l0,13.25631l19.88431,0l0,-13.25631l-19.88431,0z'
      }]
    } as Svg;
    const svgL = {
      width: '46', height: '60', viewBox: '14 -10 30 80', paths: [{
        style: styleText,
        d: 'm44.48678,0.18405l0,47.3862l-37.53604,-24.63976l-6.7432,10.2937l40.4938,26.59175l3.78545,0l12.30569,0l0,-7.57221l0,-52.05969l-12.30569,0z'
      }]
    } as Svg;
    const svgM1 = {
      width: '47', height: '60', viewBox: '14 -10 30 80', paths: [{
        style: styleText,
        d: 'm33.75517,0.12713l-26.57615,47.60992l-6.76801,12.13582l50.40997,0l6.76801,-12.13582l-35.47351,0l17.70748,-31.73999l13.7989,0l0,-15.86993l-4.93023,0l-9.07301,0l-5.86346,0z'
      }]
    } as Svg;
    const svgM2 = {
      width: '47', height: '60', viewBox: '14 -10 30 80', paths: [{
        style: styleText,
        d: 'm33.61284,0.14625l-14.71993,26.53666l-18.45095,0l0,9.95126l12.85342,0l-12.85342,23.21957l13.26811,0l3.31713,0l16.58564,0l9.95098,0l6.63425,0l7.35996,-13.26835l-13.99422,0l-2.59142,0l-16.58524,0l5.49386,-9.95122l23.63418,0l0,-9.95126l-18.03666,0l5.49386,-9.95126l12.5428,0l0,-16.5854l-3.31713,0l-16.58524,0z'
      }]
    } as Svg;
    const svgN1 = {
      width: '73', height: '60', viewBox: '33 -10 30 80', paths: [{
        style: styleText,
        d: 'm10.70161,0.18829c0,0 -10.24808,10.24784 -10.24808,30.74339c0,17.70065 12.11071,28.88004 12.11071,28.88004l14.90586,0l26.08525,-46.37701l26.08525,46.37701l14.90586,0l-33.53818,-59.62343l-14.90586,0l-27.48163,48.88072c-2.77249,-4.74364 -5.12404,-10.88056 -5.12404,-18.13733c0,-20.49555 12.11071,-30.74339 12.11071,-30.74339l-14.90586,0z'
      }]
    } as Svg;
    const svgN2 = {
      width: '51', height: '60', viewBox: '18 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.47055,0.13001l0,13.27553l43.14571,0l0,-13.27553l-43.14571,0zm56.42144,0c-3.66443,0 -6.63786,2.97371 -6.63786,6.63778c0,3.66403 2.97343,6.63774 6.63786,6.63774c3.66403,0 6.63746,-2.97371 6.63746,-6.63774c0,-3.66407 -2.97343,-6.63778 -6.63746,-6.63778zm-56.42144,23.2322l0,13.27557l23.23252,0l0,23.2322l13.27533,0l0,-23.2322l26.55106,0l0,-13.27557l-63.05891,0z'
      }]
    } as Svg;
    const svgP1 = {
      width: '48', height: '60', viewBox: '20 -10 20 80', paths: [{
        style: styleText,
        d: 'm12.51777,0.28072c0,0 -12.26577,13.2087 -12.26577,33.96492c0,13.20859 8.49141,25.47364 8.49141,25.47364l15.09624,0l34.90835,0l0,-12.26506l0,-47.17351l-12.26577,0l0,47.17351l-30.01416,0c-1.69281,-3.95125 -3.0076,-8.50817 -3.0076,-13.20859c0,-10.83626 3.86114,-19.58682 7.54753,-25.50323l0,5.6903l14.15235,0l0,-14.152l-7.54753,0l-6.60483,0l-8.49022,0z'
      }]
    } as Svg;
    const svgP2 = {
      width: '57', height: '60', viewBox: '27 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.24255,0.33472l0,26.36913l39.55344,19.77684l-36.25765,0l0,13.18459l69.21912,0l0,-13.18459l0,-46.14598l-13.18435,0l0,42.84987l-16.48093,-8.24039l0,-34.60948l-13.18435,0l0,28.01719l-16.48093,-8.24035l0,-19.77684l-13.18435,0z'
      }]
    } as Svg;
    const svgQ1 = {
      width: '60', height: '60', viewBox: '29 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.31902,0.28165l0,12.2647l0,34.90731l0,12.2647l12.26422,0l27.36002,0l15.09461,-12.2647l-42.45463,0l0,-34.90731l52.83352,0l0,12.2647l12.26422,0l0,-12.2647l0,-9.43455l0,-2.83015l-65.09774,0l-12.26422,0z'
      }]
    } as Svg;
    const svgQ2 = {
      width: '55', height: '60', viewBox: '25 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.21388,0.18339l0,59.63323l13.25201,0l0,-46.38142l33.12962,0l0,-13.25181l-33.12962,0l-3.313,0l-9.939,0zm56.32023,0l0,46.38138l-33.12922,0l0,13.25185l46.38122,0l0,-13.25185l0,-46.38138l-13.25201,0zm-36.44222,23.19069l0,13.25185l13.25161,0l0,-13.25185l-13.25161,0zm16.56461,0l0,13.25185l13.25201,0l0,-13.25185l-13.25201,0z'
      }]
    } as Svg;
    const svgR = {
      width: '58', height: '60', viewBox: '27 -10 20 80', paths: [{
        style: styleText,
        d: 'm10.47284,0.21507l-10.23891,12.10012l46.77206,0l-39.3258,47.46975l16.7535,0l49.33238,-59.56986l-13.96204,0l-2.79265,0l-46.53855,0z'
      }]
    } as Svg;
    const svgS = {
      width: '69', height: '60', viewBox: '34 -10 20 80', paths: [{
        style: styleText,
        d: 'm11.40728,0.26718l59.46599,59.46564l16.72422,-0.01189l0,-59.45374l-12.07873,0l0,46.45745l-46.45721,-46.45745l-17.65426,0zm-6.70657,30.60394l-4.2982,11.29497l46.31212,17.56673l4.2982,-11.29497l-46.31212,-17.56673z'
      }]
    } as Svg;
    const svgT = {
      width: '72', height: '60', viewBox: '32 -10 30 80', paths: [{
        style: styleText,
        d: 'm41.34665,0.18167l0,52.06383l-22.71812,-22.71884l-17.98652,0l30.29202,30.29166l15.14541,0l2.84111,0l4.73279,0l10.41262,0l30.29202,-30.29166l-17.98652,0l-22.71812,22.71884l0,-52.06383l-12.30669,0z'
      }]
    } as Svg;
    const svgV = {
      width: '54', height: '60', viewBox: '24 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.47502,0.25308l27.38756,30.21913l0,29.27471l12.27603,0l0,-29.27471l27.38637,-30.21913l-16.99868,0l-16.52511,18.23771l-16.52749,-18.23771l-16.99868,0z'
      }]
    } as Svg;
    const svgW = {
      width: '71', height: '60', viewBox: '31 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.53106,0.17835l0,12.30735l0,39.76229l0,7.57367l89.93788,0l0,-7.57367l0,-4.73356l0,-35.02873l0,-12.30735l-12.30807,0l-65.32294,0l-12.30687,0zm12.30687,12.30735l65.32294,0l0,35.02873l-65.32294,0l0,-35.02873z'
      }]
    } as Svg;
    const svgX = {
      width: '60', height: '60', viewBox: '27 -10 20 80', paths: [{
        style: styleText,
        d: 'm29.91669,0.15641c0,0 -29.63369,53.74075 -29.63369,53.74075l10.70915,5.91707l0.05969,0.02937l0.02984,-0.02937l52.83664,0l0.02984,0.02937l0.05969,-0.02937l10.70915,-5.91707c0,0 -29.59429,-53.66948 -29.59429,-53.66948c0,0 -15.20601,-0.07127 -15.20601,-0.07127zm7.5839,11.731l19.64438,35.6196l-39.28875,0l19.64438,-35.6196z'
      }]
    } as Svg;
    const svgY = {
      width: '72', height: '60', viewBox: '31 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.675,0.24961l34.93788,59.50079l15.10853,0l5.6657,0l34.93788,-59.50079l-15.10853,0l-30.21706,51.32712l-26.38043,-44.71725l5.63595,0l10.35796,17.00876l15.10853,0l-14.16484,-23.61862l-35.88157,0z'
      }]
    } as Svg;
    const svgZ = {
      width: '60', height: '60', viewBox: '28 -10 20 80', paths: [{
        style: styleText,
        d: 'm63.62204,0.18561l0,12.11199l-14.90728,0l-19.56551,0l-24.22493,22.36092l19.56551,0l11.0934,-10.24894l28.03881,0l0,23.29281l-48.44867,0l0,-5.59023l-14.90728,0l0,17.70222l14.90728,0l55.90231,0l4.65823,0l0,-59.62877l-12.11187,0z'
      }]
    } as Svg;
    //#endregion

    //#region Syllable
    const svgAE = {
      width: '66', height: '60', viewBox: '27 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.30103,0.14739l0,24.64025l12.31965,0l0,-12.32013l58.75745,0l0,11.37248l-36.01201,0l0,12.32013l36.01201,0l0,11.37248l-58.75745,0l0,-12.32013l-12.31965,0l0,24.64013l12.31965,0l71.07829,0l0,-12.32001l0,-47.38521l-71.07829,0l-12.31965,0z'
      }]
    } as Svg;
    const svgEO = {
      width: '76', height: '60', viewBox: '34 -10 30 80', paths: [{
        style: styleText,
        d: 'm27.18708,0.12684c0,0 -6.63786,22.7605 -26.55381,31.29567l2.84514,12.32861c17.61691,-4.22803 27.37115,-19.98072 32.39226,-31.29567l26.25867,0c5.01992,11.31495 14.77416,27.06764 32.39226,31.29567l2.84514,-12.32861c-19.91596,-8.53517 -26.55381,-31.29567 -26.55381,-31.29567l-43.62583,0zm-22.7599,47.41783l2.84514,12.32849l83.45536,0l2.84514,-12.32849l-89.14563,0z'
      }]
    } as Svg;
    const svgKH = {
      width: '52', height: '60', viewBox: '19 -10 30 80', paths: [{
        style: styleText,
        d: 'm54.38518,0.29575l0,23.20664l-14.85221,0l-13.92306,0l-0.92915,0l-24.13425,36.20185l14.85221,0l16.0998,-24.13484l22.88666,0l0,24.13484l12.06831,0l0,-24.13484l0,-12.06701l0,-23.20664l-12.06831,0z'
      }]
    } as Svg;
    const svgNG = {
      width: '58', height: '60', viewBox: '23 -10 30 80', paths: [{
        style: styleText,
        d: 'm11.04305,0.20625l0,12.29572l12.85787,0l-23.26191,47.29178l14.18787,0l23.26191,-47.29178l24.97565,0l0,47.29178l12.29655,0l0,-47.29178l0,-12.29572l-12.29655,0l-18.91676,0l-14.18787,0l-18.91676,0z'
      }]
    } as Svg;
    const svgOO = {
      width: '46', height: '60', viewBox: '19 -10 20 80', paths: [{
        style: styleText,
        d: 'm0.59584,0.20395l0,12.29666l0,34.99876l0,12.29666l23.64867,0l0,-12.29666l-11.35117,0l0,-34.99876l11.35117,0l0,-12.29666l-11.35117,0l-12.2975,0zm32.16085,0l0,12.29666l11.35117,0l0,34.99876l-11.35117,0l0,12.29666l23.64747,0l0,-12.29666l0,-47.29543l-23.64747,0z'
      }]
    } as Svg;
    const svgSH = {
      width: '84', height: '60', viewBox: '39 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.47549,0.15924l0,16.10444l12.31595,0l0,-16.10444l-12.31595,0zm19.89436,0l0,12.31512l0,3.78932l12.31476,0l0,-3.78932l53.61343,0l-17.22897,35.05129l-36.38446,0l0,-3.78944l-12.31476,0l0,3.78944l0,12.31512l53.99778,0l3.7898,0l29.36707,-59.68153l-9.4739,0l-77.68075,0zm-19.89436,43.57697l0,16.10456l12.31595,0l0,-16.10456l-12.31595,0z'
      }]
    } as Svg;
    const svgTH = {
      width: '66', height: '60', viewBox: '27 -10 30 80', paths: [{
        style: styleText,
        d: 'm0.40516,0.22177l0,59.55647l12.28888,0l60.50223,0l10.39856,0l0,-59.55647l-10.39856,0l-60.50223,0l-12.28888,0zm12.28888,12.28948l58.6119,0l0,34.97751l-58.6119,0l0,-11.34408l34.97871,0l0,-12.28936l-34.97871,0l0,-11.34408z'
      }]
    } as Svg;
    //#endregion

    //#region Signs
    const svgExclamation = {
      width: '20', height: '60', viewBox: '16 -10 10 80',
      transform: 'matrix(0.94,0,0,0.94,1632,-230)', paths: [{
        style: styleText, d: 'm-1704.14131,246.41927l-19,20l0,13l19,-20l0,-13zm0,24l-19,20l0,13l19,-20l0,-13z'
      }]
    } as Svg;
    const svgDot = {
      width: '28', height: '60', viewBox: '19 -10 10 80',
      transform: 'matrix(0.94,0,0,0.94,1161,70)', paths: [{
        style: styleText, d: 'm-1226.60576,-42.53008l0,32l13,0l0,-32l-13,0zm21,0l0,32l13,0l0,-32l-13,0z'
      }]
    } as Svg;
    const svgSemicolon = {
      width: '20', height: '60', viewBox: '02 -10 10 80', paths: [{
        style: styleText, d: 'm0.33699,0.13182l12.32602,0l0,59.73636l-12.32602,0l0,-59.73636z'
      }]
    } as Svg;
    const svgSep = {width: '20', height: '60', viewBox: '02 -10 10 80', paths: [{d: ''}]} as Svg;

    //#endregion

    let alphabet: Letter[] = [
      // {Value: '.', Type: sp, Vectors: [svgSep]},
      {Value: ' ', Type: sp, Vectors: [svgSep]},
      {Value: '!', Type: sp, Vectors: [svgExclamation]},
      {Value: '.', Type: sp, Vectors: [svgDot]},
      {Value: ';', Type: sp, Vectors: [svgSemicolon]},

      {Value: 'a', Type: v, Vectors: [svgA1, svgA2]},
      {Value: 'e', Type: v, Vectors: [svgE1, svgE2]},
      {Value: 'i', Type: v, Vectors: [svgI1, svgI2]},
      {Value: 'o', Type: v, Vectors: [svgO1, svgO2]},
      {Value: 'u', Type: v, Vectors: [svgU]},
      // {Value: 'ı', Type: c, Vectors: [svgI]},
      // {Value: 'ö', Type: c, Vectors: [svgOE]},
      // {Value: 'ü', Type: c, Vectors: [svgOE]},

      // Consonant
      {Value: 'b', Type: c, Vectors: [svgB1, svgB2]},
      {Value: 'c', Type: c, Vectors: [svgC1, svgC2]},
      {Value: 'ç', Type: c, Vectors: [svgCH]},
      {Value: 'd', Type: c, Vectors: [svgD1, svgD2]},
      {Value: 'f', Type: c, Vectors: [svgF1, svgF2]},
      {Value: 'g', Type: c, Vectors: [svgG1, svgG2]},
      {Value: 'h', Type: c, Vectors: [svgH1, svgH2]},
      {Value: 'j', Type: c, Vectors: [svgJ]},
      {Value: 'k', Type: c, Vectors: [svgK1, svgK2]},
      {Value: 'l', Type: c, Vectors: [svgL]},
      {Value: 'm', Type: c, Vectors: [svgM1, svgM2]},
      {Value: 'n', Type: c, Vectors: [svgN1, svgN2]},
      {Value: 'p', Type: c, Vectors: [svgP1, svgP2]},
      {Value: 'q', Type: c, Vectors: [svgQ1, svgQ2]},
      {Value: 'r', Type: c, Vectors: [svgR]},
      {Value: 's', Type: c, Vectors: [svgS]},
      {Value: 't', Type: c, Vectors: [svgT]},
      {Value: 'v', Type: c, Vectors: [svgV]},
      {Value: 'w', Type: c, Vectors: [svgW]},
      {Value: 'x', Type: c, Vectors: [svgX]},
      {Value: 'y', Type: c, Vectors: [svgY]},
      {Value: 'z', Type: c, Vectors: [svgZ]},

      // Syllable
      {Value: 'ae', Type: s, Vectors: [svgAE]},
      {Value: 'eo', Type: s, Vectors: [svgEO]},
      {Value: 'kh', Type: s, Vectors: [svgKH]},
      {Value: 'ng', Type: s, Vectors: [svgNG]},
      {Value: 'oo', Type: s, Vectors: [svgOO]},
      {Value: 'sh', Type: s, Vectors: [svgSH]},
      {Value: 'th', Type: s, Vectors: [svgTH]},
    ];


    if (sort) {
      alphabet = alphabet.sort((a, b) => {
        if (a.Value < b.Value) {
          return -1;
        }
        if (a.Value > b.Value) {
          return 1;
        }
        return 0;
      });
    }

    return alphabet.filter(x => x.Vectors.length > 0);
  }

  private static Futhark(sort: boolean = false): Letter[] {
    const sp = LetterType.Separator;
    const v = LetterType.Vowel;
    const c = LetterType.Consonants;
    const s = LetterType.Syllable;
    const bevelStyle = 'fill:none;stroke:currentColor;stroke-width:4;stroke-linejoin:bevel;';
    const miterStyle = 'fill:none;stroke:currentColor;stroke-width:4;stroke-linejoin:miter;';

    //#region Alphabet
    const svgA = {
      width: '20', height: '60', paths: [
        {d: 'M 0,2 L 4,2 L 16,12', style: miterStyle},
        {d: 'M 16,27 L 2,15.333333', style: miterStyle},
        {d: 'M 2,60 L 2,0', style: bevelStyle},
      ]
    } as Svg; /*A:Ansuz*/
    const svgE = {
      width: '42', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 20,18 L 36,2 L 40,2', style: miterStyle},
        {d: 'M 38,60 L 38,0', style: miterStyle},
      ]
    } as Svg; /*E:Ehwaz*/
    const svgI = {
      width: '6', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
      ]
    } as Svg; /*I:Isa*/
    const svgO = {
      width: '42', height: '60', paths: [
        {d: 'M 2,54.5 37.5,19 20.5,2 3.5,19 39,54.5', style: miterStyle},
      ]
    } as Svg; /*O:Othila*/
    const svgU = {
      width: '38', height: '60', paths: [
        {d: 'M 2,60 L 2,1 L 34,59', style: bevelStyle},
      ]
    } as Svg; /*U:Uruz*/

    const svgB = {
      width: '27', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 23,15 L 2,30 L 23,45 L 4,58 L 0,58', style: bevelStyle},
      ]
    } as Svg; /*B:Berkano*/
    const svgD = {
      width: '42', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 38,60 L 38,0', style: miterStyle},
        {d: 'M 0,58 L 4,58 L 36,2 L 40,2', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 36,58 L 40,58', style: miterStyle}
      ]
    } as Svg; /*D:Dagaz*/
    const svgF = {
      width: '29', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 25,2 L 2,25', style: miterStyle},
        {d: 'M 25,17 L 2,40', style: miterStyle}
      ]
    } as Svg; /*F:Fehu*/
    const svgG = {
      width: '32', height: '60', paths: [
        {d: 'M 2,1 L 28.55615,59', style: miterStyle},
        {d: 'M 2,59 L 28,1', style: miterStyle}
      ]
    } as Svg; /*G:Gebo*/
    const svgH = {
      width: '42', height: '60', paths: [
        {d: 'm2,0v60m36,0V0m0,43-36-26', style: bevelStyle}
      ]
    } as Svg; /*H:Hagalaz*/
    const svgH2 = {
      width: '42', height: '60', paths: [
        {d: 'm2,0v60m36,0V0m0,38-36-26m0,10 36,26', style: bevelStyle}
      ]
    } as Svg; /*H:Hagalaz*/
    const svgK = {
      width: '28', height: '60', paths: [
        {d: 'M 24,52 L 2,30 L 24,8', style: bevelStyle}
      ]
    } as Svg; /*K:Kenaz*/
    const svgL = {
      width: '26', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 22,18', style: miterStyle}
      ]
    } as Svg; /*L:Laguz*/
    const svgM = {
      width: '42', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 38,60 L 38,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 38,24', style: miterStyle},
        {d: 'M 40,2 L 36,2 L 2,24', style: miterStyle}
      ]
    } as Svg; /*M:Mannaz*/
    const svgN = {
      width: '26', height: '60', paths: [
        {d: 'M 12,0 L 12,60', style: miterStyle},
        {d: 'M 23,30 L 1,20', style: miterStyle}
      ]
    } as Svg; /*N:Nauthiz*/
    const svgP = {
      width: '27', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 13,9 L 23,1', style: miterStyle},
        {d: 'M 0,58 L 4,58 L 13,51 L 23,59', style: miterStyle}
      ]
    } as Svg; /*P:Pertho*/
    const svgR = {
      width: '26', height: '60', paths: [
        {d: 'M 2,60 L 2,0', style: miterStyle},
        {d: 'M 0,2 L 4,2 L 20,16 L 12.616635,33.273748 L 22,59', style: bevelStyle}
      ]
    } as Svg; /*R:Raido*/
    const svgS = {
      width: '26', height: '60', paths: [
        {d: 'M 22,58 L 2,44 L 22,30 L 2,16 L 22,2', style: bevelStyle}
      ]
    } as Svg; /*S:Sowilo*/
    const svgS2 = {
      width: '26', height: '60', paths: [
        {d: 'M 2,53 L 22,38 L 2,23 L 22,8', style: bevelStyle}
      ]
    } as Svg; /*S:Sowilo*/
    const svgT = {
      width: '42', height: '60', paths: [
        {d: 'M 20,60 L 20,0', style: miterStyle},
        {d: 'M 38,14 L 22,2 L 18,2 L 2,14', style: miterStyle}
      ]
    } as Svg; /*T:Tiwaz*/
    const svgW = {
      width: '21', height: '60', paths: [
        {d: 'M2,60V0L18,14 2,26', style: bevelStyle}
      ]
    } as Svg; /*W:Wunjo*/
    const svgY = {
      width: '40', height: '60', paths: [
        {d: 'M 20,7.5 L 2,22.5 L 20,37.5', style: bevelStyle},
        {d: 'M 18,22.5 L 36,37.5 L 18,52.5', style: bevelStyle}
      ]
    } as Svg; /*Y:Jera*/
    const svgZ = {
      width: '42', height: '60', paths: [
        {d: 'M 1,1 L 20,20 L 39,1', style: miterStyle},
        {d: 'M 20,0 L 20,60', style: miterStyle}
      ]
    } as Svg; /*Z:Algiz*/

    //#endregion

    //#region Syllable
    const svgTH = {
      width: '27', height: '60', paths: [
        {d: 'M 2,59.567568 L 2,0', style: bevelStyle},
        {d: 'M 2,16 L 23,30 L 2,44', style: bevelStyle}
      ]
    } as Svg; /*Th:Thurisaz*/
    const svgEI = {
      width: '38', height: '60', paths: [
        {d: 'M 18,0 L 18,60', style: miterStyle},
        {d: 'M 16,2 L 20,2 L 34,8', style: miterStyle},
        {d: 'M 20,58 L 16,58 L 1.9999996,52', style: miterStyle}
      ]
    } as Svg; /*El:Eithwaz*/
    const svgNG = {
      width: '34', height: '60', paths: [
        {d: 'M 3,30 L 16,15 L 29,30', style: bevelStyle},
        {d: 'M 3,30 L 16,45 L 29,30', style: bevelStyle},
        {d: 'M 16,45 L 29,30 L 16,15', style: miterStyle},
        {d: 'M 16,15 L 3,30 L 16,45', style: miterStyle}
      ]
    } as Svg; /*NG:Ingwaz*/
    const svgNG2 = {
      width: '41', height: '60', paths: [
        {d: 'M 37,57 L 3,30 L 37,3 M 3,57 L 37,30 L 3,3', style: bevelStyle}
      ]
    } as Svg; /*NG:Ingwaz*/
    //#endregion

    //#region Signs

    //#endregion

    let alphabet: Letter[] = [
      {Value: 'a', Type: v, Vectors: [svgA]},
      {Value: 'e', Type: v, Vectors: [svgE]},
      {Value: 'i', Type: v, Vectors: [svgI]},
      {Value: 'o', Type: v, Vectors: [svgO]},
      {Value: 'u', Type: v, Vectors: [svgU]},

      {Value: 'b', Type: c, Vectors: [svgB]},
      {Value: 'd', Type: c, Vectors: [svgD]},
      {Value: 'f', Type: c, Vectors: [svgF]},
      {Value: 'g', Type: c, Vectors: [svgG]},
      {Value: 'h', Type: c, Vectors: [svgH, svgH2]},
      {Value: 'j', Type: c, Vectors: [svgY]},
      {Value: 'k', Type: c, Vectors: [svgK]},
      {Value: 'l', Type: c, Vectors: [svgL]},
      {Value: 'm', Type: c, Vectors: [svgM]},
      {Value: 'n', Type: c, Vectors: [svgN]},
      {Value: 'p', Type: c, Vectors: [svgP]},
      {Value: 'r', Type: c, Vectors: [svgR]},
      {Value: 's', Type: c, Vectors: [svgS2, svgS]},
      {Value: 't', Type: c, Vectors: [svgT]},
      {Value: 'v', Type: c, Vectors: [svgW]},
      {Value: 'w', Type: c, Vectors: [svgW]},
      {Value: 'y', Type: c, Vectors: [svgY]},
      {Value: 'z', Type: c, Vectors: [svgZ]},

      {Value: 'th', Type: s, Vectors: [svgTH]},
      {Value: 'el', Type: s, Vectors: [svgEI]},
      {Value: 'ng', Type: s, Vectors: [svgNG, svgNG2]},

    ];

    if (sort) {
      alphabet = alphabet.sort((a, b) => {
        if (a.Value < b.Value) {
          return -1;
        }
        if (a.Value > b.Value) {
          return 1;
        }
        return 0;
      });
    }

    return alphabet.filter(x => x.Vectors.length > 0);
  }

  private static Orkhon(sort: boolean = false): Letter[] {
    const sp = LetterType.Separator;
    const v = LetterType.Vowel;
    const c = LetterType.Consonants;
    const s = LetterType.Syllable;
    const styleText = 'fill:currentColor';

    //#region Alphabet
    const svgAE = {
      width: '51', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: a/e */
        d: 'M 299.5369,418.48065 L 323.1619,411.98065 L 268.7869,357.23065 L 243.0369,360.35565 L 243.0369,482.35565 L 216.6619,457.23065 L 193.9119,464.60565 L 244.4119,513.10565 L 270.1619,510.23065 L 270.1619,389.10565 L 299.5369,418.48065 z'
      }]
    } as Svg;
    const svgIi = {
      width: '32', height: '60', viewBox: '233 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ı/i */
        d: 'M 218.2869,515.04315 L 245.0369,515.04315 L 245.0369,387.04315 L 274.7869,417.04315 L 298.7869,410.04315 L 244.0369,355.29315 L 218.2869,358.54315 L 218.2869,515.04315 z'
      }]
    } as Svg;
    const svgOU = {
      width: '38', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: o/u */
        d: 'M 210.5369,365.79315 L 233.2869,358.79315 L 306.5369,433.29315 L 306.5369,442.29315 L 235.0369,511.54315 L 212.5369,504.04315 L 280.5369,437.54315 L 210.5369,365.79315 z'
      }]
    } as Svg;
    const svgUU = {
      width: '36', height: '60', viewBox: '234 345 50 175', paths: [{
        style: styleText,
        /*Okunuşu: ö/ü */
        d: 'M 210.4744,517.16815 L 210.4744,358.29315 L 236.2244,354.91815 L 279.5994,399.54315 L 279.5994,353.04315 L 306.5994,353.04315 L 306.5994,456.04315 L 237.7244,388.04315 L 237.7244,517.29315 L 210.4744,517.16815 z'
      }]
    } as Svg;

    const svgB_Kalin = {
      width: '37', height: '60', viewBox: '237 352 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ab */
        d: 'M 257.81685,360.10464 C 257.81685,360.10464 246.50314,378.64196 246.50314,398.64196 C 246.50314,436.1471 281.50492,454.89573 281.50492,470.4133 C 281.50492,480.1647 270.64628,488.79808 260.64527,488.79808 C 246.23553,488.79808 240.16062,467.00277 240.16062,467.00277 L 215.03689,473.94884 C 215.03689,473.94884 225.54992,515.66814 260.99883,515.66814 C 289.78708,515.66814 308.72854,487.41399 308.72854,470.4133 C 308.72854,444.99293 273.3732,424.6409 273.3732,396.52064 C 273.3732,385.73147 281.15137,373.18612 281.15137,373.18612 L 257.81685,360.10464 z'
      }]
    } as Svg;
    const svgB_Ince = {
      width: '46', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: eb */
        d: 'M 258.89628,359.15253 L 209.74003,406.87128 L 244.74003,452.12128 L 200.36503,511.18378 L 228.11503,511.18378 L 258.89628,471.21503 L 288.58378,511.18378 L 316.70878,511.18378 L 272.49003,452.30878 L 307.33378,406.52753 L 258.89628,359.15253 z M 258.52128,387.96503 L 278.52128,407.05878 L 258.36503,433.55878 L 238.74003,407.74628 L 258.52128,387.96503 z'
      }]
    } as Svg;

    const svgCH = {
      width: '50', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ach */
        d: 'M 247.6619,359.48065 L 273.5369,359.48065 L 273.5369,437.10565 L 323.6619,507.23065 L 297.7869,510.60565 L 260.0369,457.48065 L 218.1619,510.85565 L 193.4119,506.98065 L 247.7869,437.23065 L 247.6619,359.48065 z'
      }]
    } as Svg;

    const svgD_Kalin = {
      width: '46', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ad */
        d: 'M 199.5369,362.16815 L 232.7869,396.54315 L 198.6619,434.16815 L 234.7869,471.54315 L 199.5369,508.16815 L 228.6619,508.16815 L 262.9119,472.04315 L 227.4119,434.16815 L 261.7869,396.54315 L 228.5369,362.16815 L 199.5369,362.16815 z M 255.0369,362.16815 L 288.2869,396.54315 L 254.1619,434.16815 L 290.2869,471.54315 L 255.0369,508.16815 L 284.1619,508.16815 L 318.4119,472.04315 L 282.9119,434.16815 L 317.2869,396.54315 L 284.0369,362.16815 L 255.0369,362.16815 z'
      }]
    } as Svg;
    const svgD_Ince = {
      width: '57', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ed */
        d: 'M 201.60503,362.33512 L 183.35503,381.83512 L 239.10503,435.83512 L 185.75668,492.00186 L 204.31823,510.74019 L 258.58868,454.34842 L 315.15722,508.44209 L 333.71877,488.99665 L 277.15023,434.37266 L 331.06712,378.51122 L 311.97524,359.59611 L 258.05835,416.87176 L 201.60503,362.33512 z'
      }]
    } as Svg;

    const svgG_Kalin = {
      width: '62', height: '60', viewBox: '232 360 50 150', paths: [{
        style: styleText,
        /*Okunuşu: ag */
        d: 'M 204.55253,360.12128 L 186.89628,367.71503 C 186.89628,367.71503 213.39628,378.85634 213.39628,401.84003 C 213.39628,425.53075 185.99003,438.77753 185.99003,438.77753 L 206.33378,446.02753 C 206.33378,446.02753 240.08378,429.58828 240.08378,401.65253 C 240.08378,372.83684 204.55253,360.12128 204.55253,360.12128 z M 312.55253,360.12128 C 312.55253,360.12128 276.99003,372.83684 276.99003,401.65253 C 276.99003,429.58829 310.77128,446.02753 310.77128,446.02753 L 331.08378,438.77753 C 331.08378,438.77753 303.70878,425.53075 303.70878,401.84003 C 303.70878,378.85634 330.20878,367.71503 330.20878,367.71503 L 312.55253,360.12128 z M 245.24003,432.24628 L 245.05253,510.21503 L 271.92753,510.21503 L 271.92753,432.24628 L 245.24003,432.24628 z'
      }]
    } as Svg;
    const svgG_Ince = {
      width: '57', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: eg */
        d: 'M 294.0369,409.46549 L 307.9119,395.84049 L 262.26545,357.99582 C 262.26545,357.99582 209.1619,388.44486 209.1619,446.59049 C 209.1619,488.16347 231.44223,512.34049 231.44223,512.34049 L 256.1619,508.34049 C 256.1619,508.34049 234.7869,482.77083 234.7869,447.59049 C 234.7869,437.33744 236.2869,430.96549 236.2869,430.96549 L 261.9119,452.34049 L 275.0369,437.71549 L 242.7869,410.59049 C 245.9119,402.46549 255.5369,388.59049 262.4119,382.96549 L 294.0369,409.46549 z'
      }]
    } as Svg;

    const svgK_Kalin = {
      width: '37', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ak */ // Q
        d: 'M 279.7501,361.9826 L 305.73627,361.9826 L 305.73627,508.17693 L 279.57332,508.17693 L 279.57332,451.25483 L 244.92509,440.29468 L 237.85402,508.00015 L 211.33752,508.35371 L 219.64602,416.78338 L 279.57332,434.46105 L 279.7501,361.9826 z'
      }]
    } as Svg;
    const svgK_Ince = {
      width: '42', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ek */
        d: 'M 259.68595,511.3589 L 286.73278,511.3589 L 286.73278,441.88566 L 313.24929,404.23222 L 238.76196,358.35239 L 228.9268,372.23564 L 283.90435,406.35355 L 268.70156,428.62741 L 213.37045,394.33273 L 203.82451,408.12131 L 259.68595,444.00698 L 259.68595,511.3589 z'
      }]
    } as Svg;

    const svgL_Kalin = {
      width: '32', height: '60', viewBox: '234 352 50 165', paths: [{
        style: styleText,
        d: 'M 272.2244,354.66815 L 298.3494,354.66815 L 298.3494,511.66815 L 273.5994,515.66815 L 218.7244,460.54315 L 241.5994,453.79315 L 272.0994,484.04315 L 272.2244,354.66815 z'
      }]
    } as Svg;
    const svgL_Ince = {
      width: '49', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        d: 'M 246.8494,511.54315 L 274.0994,511.54315 L 274.0994,414.66815 L 323.0994,363.91815 L 298.0994,359.54315 L 259.9744,399.66815 L 217.7244,358.79315 L 193.9744,364.04315 L 246.8494,414.79315 L 246.8494,511.54315 z'
      }]
    } as Svg;

    const svgM = {
      width: '56', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: am */
        d: 'M 200.63065,360.74628 L 185.25565,379.68378 L 232.9744,434.12128 L 187.56815,490.68378 L 203.63065,508.71503 L 249.44315,452.68378 L 266.75565,472.12128 L 250.13065,491.02753 L 266.2244,509.59003 L 331.81815,434.99628 L 263.56815,362.87128 L 249.06815,380.90253 L 263.56815,396.80878 L 248.7244,415.02753 L 200.63065,360.74628 z M 279.8494,415.21503 L 298.75565,435.18378 L 283.00565,453.37128 L 265.50565,433.59003 L 279.8494,415.21503 z'
      }]
    } as Svg;

    const svgN_Kalin = {
      width: '34', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: an */
        d: 'M 215.84533,360.33636 L 219.73442,386.49931 C 239.73442,380.99931 275.06552,397.74645 275.06552,434.75935 C 275.06552,471.0264 244.19152,487.46394 220.44152,484.96394 L 217.08277,510.41978 C 246.33277,517.16978 301.22848,492.9171 301.22848,435.11291 C 301.22848,377.50763 245.59533,352.08636 215.84533,360.33636 L 215.84533,360.33636 z'
      }]
    } as Svg;
    const svgN_Ince = {
      width: '56', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: en */
        d: 'M 184.90941,507.82337 L 208.95104,507.82337 L 215.315,447.89607 L 245.89737,458.85622 L 245.89737,508.70725 L 271.17644,508.70725 L 271.17644,419.78857 L 324.20945,436.93591 L 332.1644,362.51292 L 308.12277,362.51292 L 301.93558,412.89428 L 271.17644,402.81801 L 271.17644,361.62904 L 245.89737,361.62904 L 245.89737,441.88566 L 191.98048,424.9151 L 184.90941,507.82337 z'
      }]
    } as Svg;

    const svgP = {
      width: '32', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ap */
        d: 'M 273.29775,355.1767 L 298.04649,358.53546 L 298.04649,515.15961 L 272.06031,515.15961 L 272.06031,387.17328 L 242.36183,416.69499 L 219.02731,410.15425 L 273.29775,355.1767 z'
      }]
    } as Svg;

    const svgR_Kalin = {
      width: '34', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ar */
        d: 'M 277.05426,362.11518 L 301.09589,362.11518 L 301.09589,508.22112 L 276.96587,508.22112 L 276.96587,435.91945 L 224.28642,453.24357 L 215.97791,363.17584 L 240.10793,362.11518 L 246.20673,430.2626 L 277.14265,420.18632 L 277.05426,362.11518 z'
      }]
    } as Svg;
    const svgR_Ince = {
      width: '56', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: er */
        d: 'M 333.13667,403.56931 L 294.51096,358.66803 L 258.18334,400.82927 L 219.55764,359.72869 L 183.93713,403.74609 L 205.06194,408.78423 L 221.14862,389.42718 L 247.04641,417.09273 L 247.04641,511.66826 L 271.17643,511.66826 L 271.17643,415.94368 L 294.9529,388.5433 L 313.42606,408.961 L 333.13667,403.56931 z'
      }]
    } as Svg;

    const svgS_Kalin = {
      width: '40', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: as */
        d: 'M 246.4744,409.05387 L 289.5994,360.80387 L 309.5994,378.55387 L 265.3494,428.05387 C 265.3494,428.05387 289.5994,450.37024 289.5994,471.05387 C 289.5994,502.1746 243.8494,514.17887 243.8494,514.17887 L 234.4744,489.30387 C 234.4744,489.30387 262.7244,481.50909 262.7244,469.92887 C 262.7244,453.48769 207.4744,424.20688 207.4744,386.30387 C 207.4744,367.56471 227.12973,356.15742 227.12973,356.15742 L 243.5994,376.67887 C 243.5994,376.67887 235.4744,381.67887 235.4744,389.05387 C 235.4744,399.30387 246.4744,409.05387 246.4744,409.05387 L 246.4744,409.05387 z'
      }]
    } as Svg;
    const svgS_Ince = {
      width: '20', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: es */
        d: 'M 244.92509,361.9826 L 244.92509,508.3537 L 272.1487,508.3537 L 272.1487,362.33615 L 244.92509,361.9826 z'
      }]
    } as Svg;
    const svgSH = {
      width: '50', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ash */ // ş
        d: 'M 247.31158,415.36916 L 209.03942,415.36916 L 209.03942,435.43331 L 247.04641,435.43331 L 247.04641,511.35891 L 274.09325,511.3589 L 274.09325,435.43331 L 307.0621,435.43331 L 307.0621,415.28077 L 273.91647,415.28077 L 323.06039,363.83875 L 298.13488,359.41933 L 259.95112,399.72442 L 217.96665,358.97739 L 194.01341,363.92714 L 247.31158,415.36916 z'
      }]
    } as Svg;

    const svgT_Kalin = {
      width: '42', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: at */
        d: 'M 258.4119,356.29315 L 212.4119,401.04315 L 244.9119,401.04315 L 244.9119,418.79315 L 204.1619,459.79315 L 258.1619,514.04315 L 312.9119,459.54315 L 271.9119,418.54315 L 271.9119,400.79315 L 301.6619,400.79315 L 258.4119,356.29315 z M 257.9119,435.29315 L 282.6619,460.04315 L 257.9119,484.04315 L 232.9119,459.54315 L 257.9119,435.29315 z'
      }]
    } as Svg;
    const svgT_Ince = {
      width: '38', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: et */
        d: 'M 237.58886,362.11518 L 211.5143,362.11518 L 211.5143,508.22112 L 237.67725,508.22112 L 237.67725,451.29902 L 272.50226,440.16209 L 279.57332,508.22112 L 305.5595,507.16046 L 297.33938,416.20885 L 237.58886,434.32846 L 237.58886,362.11518 z'
      }]
    } as Svg;

    const svgY_Kalin = {
      width: '40', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ay */
        d: 'M 207.45878,359.52753 L 207.61503,510.80878 L 240.49003,510.80878 C 254.28471,510.80878 309.61503,495.61209 309.61503,435.15253 C 309.61503,374.17349 252.25104,359.52753 240.58378,359.52753 L 207.45878,359.52753 z M 233.58378,385.77753 C 267.59516,385.77753 283.33378,411.27576 283.33378,435.02753 C 283.33378,461.30058 265.58378,484.52753 233.58378,484.52753 L 233.58378,385.77753 z'
      }]
    } as Svg;
    const svgY_Ince = {
      width: '32', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ey */
        d: 'M 255.1619,357.91815 C 239.90371,357.91815 218.9119,369.91567 218.9119,393.91815 C 218.9119,420.91815 245.4119,439.91815 245.4119,439.91815 C 245.4119,439.91815 235.9119,458.41815 235.9119,475.16815 C 235.9119,494.66975 247.9119,512.41815 247.9119,512.41815 L 271.4119,499.41815 C 271.4119,499.41815 262.6619,487.41815 262.6619,473.41815 C 262.6619,450.16673 298.1619,422.66815 298.1619,401.16815 C 298.1619,391.90465 289.16417,357.91815 255.1619,357.91815 L 255.1619,357.91815 z M 255.9119,384.16815 C 265.5369,384.16815 271.4119,394.78982 271.4119,399.91815 C 271.4119,405.79448 261.1619,418.16815 261.1619,418.16815 C 261.1619,418.16815 245.0369,407.42366 245.0369,394.66815 C 245.0369,389.78588 249.5369,384.16815 255.9119,384.16815 z'
      }]
    } as Svg;

    const svgZ = {
      width: '54', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: az */
        d: 'M 213.1619,510.16815 L 213.1619,442.16815 L 242.9119,442.16815 L 242.9119,510.16815 L 267.4119,510.16815 L 267.4119,441.91815 L 328.9119,441.91815 L 328.1619,360.16815 L 303.9119,360.16815 L 303.9119,431.10565 L 267.0369,431.10565 L 267.0369,360.16815 L 243.0994,360.16815 L 243.0994,431.16815 L 188.9119,431.16815 L 188.9119,510.16815 L 213.1619,510.16815 z'
      }]
    } as Svg;
    const svgZ2 = {
      width: '54', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        d: 'M 188.9119,360.16815 L 188.9119,442.16815 L 242.9119,442.16815 L 242.9119,510.16815 L 267.4119,510.16815 L 267.4119,441.91815 L 303.9119,441.91815 L 303.9119,510.16815 L 328.1619,510.16815 L 328.1619,431.10565 L 267.0369,431.10565 L 267.0369,360.16815 L 243.0994,360.16815 L 243.0994,431.16815 L 213.1619,431.16815 L 213.1619,360.16815 L 188.9119,360.16815 z'
      }]
    } as Svg;

    //#endregion

    //#region Syllables - çift sesliler
    const svgICH = {
      width: '50', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: iç */ // iç çi
        d: 'M 247.1348,511.3589 L 274.35841,511.3589 L 274.35841,414.48527 L 323.32556,363.75036 L 298.40004,359.33094 L 274.35841,384.61001 L 274.35841,359.15416 L 247.1348,359.15416 L 247.1348,387.43844 L 217.78987,358.97739 L 193.74824,364.10391 L 247.1348,415.54593 L 247.1348,511.3589 z'
      }]
    } as Svg;
    const svgIQ = {
      width: '50', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ık */ // ık k kı
        d: 'M 324.7869,360.79315 L 192.2869,431.79315 L 324.7869,509.54315 L 324.7869,360.79315 z M 298.7869,404.54315 L 298.7869,463.79315 L 245.7869,432.79315 L 298.7869,404.54315 z'
      }]
    } as Svg;

    const svgOQ = {
      width: '34', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ok */ // ok uk
        d: 'M 248.37224,361.45227 L 274.71197,361.45227 L 274.71197,464.51308 L 302.99624,464.51308 L 261.27694,508.88403 L 214.07756,464.51308 L 248.37224,464.51308 L 248.37224,361.45227 z'
      }]
    } as Svg;
    const svgUQ = {
      width: '36', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ök */ // ök ük
        d: 'M 211.9744,357.73065 L 211.9744,512.73065 L 238.0994,512.73065 L 238.0994,473.73065 L 278.9744,464.85565 L 278.9744,511.73065 L 305.0994,511.73065 L 305.0994,444.60565 L 238.27505,458.68522 L 237.9744,391.85565 L 279.0994,382.60565 L 279.0994,429.73065 L 305.0994,429.73065 L 305.0994,362.60565 L 238.0994,375.85565 L 238.0994,357.60565 L 211.9744,357.73065 z'
      }]
    } as Svg;

    const svgLT = {
      width: '52', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: alt */ // ld lt
        d: 'M 215.1619,511.10565 L 191.0369,511.10565 L 191.0369,361.23065 L 213.6619,359.23065 L 259.0369,405.35565 L 303.5369,359.35565 L 326.0369,361.23065 L 326.0369,511.10565 L 302.1619,511.10565 L 302.1619,388.85565 L 258.6619,433.10565 L 215.1619,387.98065 L 215.1619,511.10565 z'
      }]
    } as Svg;
    const svgNCH = {
      width: '26', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: anch */ // nç
        d: 'M 228.4119,362.66815 L 257.2869,362.66815 L 289.2869,396.04315 L 254.4119,434.16815 L 290.7869,471.66815 L 256.2869,507.66815 L 227.2869,507.66815 L 261.9119,471.79315 L 226.2869,433.54315 L 260.7869,396.54315 L 228.4119,362.66815 z'
      }]
    } as Svg;
    const svgNG = {
      width: '29', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: eng */
        d: 'M 267.4744,362.60565 L 294.5994,362.60565 L 294.5994,507.73065 L 267.4744,507.73065 L 267.4744,432.85565 L 222.4744,409.48065 L 222.4744,386.48065 L 267.4744,409.85565 L 267.4744,362.60565 z'
      }]
    } as Svg;
    const svgNT = {
      width: '50', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: ant */ // nd nt
        d: 'M 298.39628,366.93377 L 284.61503,386.90252 C 284.61503,386.90252 300.70878,400.17834 300.70878,427.40252 C 300.70878,458.70447 279.30836,476.37127 258.27128,476.37127 C 237.82121,476.37127 216.55253,457.28189 216.55253,426.68377 C 216.55253,402.22379 231.39628,389.93377 231.39628,389.93377 L 214.95878,370.30877 C 214.95878,370.30877 192.52128,391.46152 192.52128,427.21502 C 192.52128,464.6823 219.91386,503.40252 258.27128,503.40252 C 300.70284,503.40253 324.55253,462.40345 324.55253,427.40252 C 324.55253,385.39582 298.39628,366.93377 298.39628,366.93377 z M 278.89628,412.18377 C 273.72128,412.18377 269.52128,416.38377 269.52128,421.55877 C 269.52128,426.73377 273.72128,430.93377 278.89628,430.93377 C 284.07128,430.93377 288.27128,426.73377 288.27128,421.55877 C 288.27128,416.38377 284.07128,412.18377 278.89628,412.18377 z M 238.77128,412.55877 C 233.59628,412.55877 229.39628,416.75877 229.39628,421.93377 C 229.39628,427.10877 233.59628,431.30877 238.77128,431.30877 C 243.94628,431.30877 248.14628,427.10877 248.14628,421.93377 C 248.14628,416.75877 243.94628,412.55877 238.77128,412.55877 z M 258.64628,442.93377 C 253.47128,442.93377 249.27128,447.13377 249.27128,452.30877 C 249.27128,457.48377 253.47128,461.68377 258.64628,461.68377 C 263.82128,461.68377 268.02128,457.48377 268.02128,452.30877 C 268.02128,447.13377 263.82128,442.93377 258.64628,442.93377 z'
      }]
    } as Svg;
    const svgNY = {
      width: '36', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        /*Okunuşu: any */
        d: 'M 223.00565,356.81555 C 219.52735,356.85476 215.96386,357.0343 212.2869,357.3468 L 218.5369,369.3468 C 267.7869,366.5968 278.0369,398.59414 278.0369,410.3468 C 278.0369,412.8555 277.67417,415.70546 276.88065,418.7218 C 261.27995,409.4986 239.47607,404.03603 212.2869,406.3468 L 218.5369,418.3468 C 244.67171,416.8875 259.82044,425.20418 268.2869,435.0968 C 259.59117,445.38282 244.32853,453.70481 219.5369,452.5968 L 213.0369,464.0968 C 239.17686,466.10757 261.10841,460.95767 276.9744,451.8468 C 277.71154,454.75226 278.0369,457.34458 278.0369,459.3468 C 278.0369,474.8468 264.2869,503.5968 219.5369,501.5968 L 213.0369,513.0968 C 268.2869,517.3468 304.7869,489.60251 304.7869,460.0968 C 304.7869,451.89205 301.76551,443.37137 296.00565,435.56555 C 301.70074,428.04844 304.7869,419.64464 304.7869,411.0968 C 304.7869,385.29661 275.18018,356.22747 223.00565,356.81555 L 223.00565,356.81555 z'
      }]
    } as Svg;
    //#endregion

    //#region Signs
    const svgSep = {
      width: '20', height: '60', viewBox: '234 350 50 165', paths: [{
        style: styleText,
        d: 'M 258.56815,410.24628 C 253.83548,410.24628 250.00565,414.07611 250.00565,418.80878 C 250.00565,423.54145 253.83548,427.40253 258.56815,427.40253 C 263.30082,427.40253 267.1619,423.54144 267.1619,418.80878 C 267.1619,414.07611 263.30082,410.24628 258.56815,410.24628 z M 258.4744,442.96503 C 253.74173,442.96503 249.9119,446.79486 249.9119,451.52753 C 249.9119,456.2602 253.74174,460.09003 258.4744,460.09003 C 263.20707,460.09003 267.06815,456.26019 267.06815,451.52753 C 267.06815,446.79486 263.20707,442.96503 258.4744,442.96503 z'
      }]
    } as Svg;
    //#endregion

    let alphabet: Letter[] = [
      {Value: ' ', Type: sp, Vectors: [svgSep]},
      {Value: '.', Type: sp, Vectors: [svgSep]},

      {Value: 'a', Type: v, Vectors: [svgAE]},
      {Value: 'e', Type: v, Vectors: [svgAE]},
      {Value: 'ı', Type: v, Vectors: [svgIi]},
      {Value: 'i', Type: v, Vectors: [svgIi]},
      {Value: 'o', Type: v, Vectors: [svgOU]},
      {Value: 'u', Type: v, Vectors: [svgOU]},
      {Value: 'ö', Type: v, Vectors: [svgUU]},
      {Value: 'ü', Type: v, Vectors: [svgUU]},
      // Consonant
      {Value: 'b', Type: c, Vectors: [svgB_Kalin, svgB_Ince]},
      {Value: 'ç', Type: c, Vectors: [svgCH]},
      {Value: 'd', Type: c, Vectors: [svgD_Kalin, svgD_Ince]},
      {Value: 'g', Type: c, Vectors: [svgG_Kalin, svgG_Ince]},
      {Value: 'k', Type: c, Vectors: [svgK_Kalin, svgK_Ince]},
      {Value: 'l', Type: c, Vectors: [svgL_Kalin, svgL_Ince]},
      {Value: 'm', Type: c, Vectors: [svgM]},
      {Value: 'n', Type: c, Vectors: [svgN_Kalin, svgN_Ince]},
      {Value: 'p', Type: c, Vectors: [svgP]},
      {Value: 'r', Type: c, Vectors: [svgR_Kalin, svgR_Ince]},
      {Value: 's', Type: c, Vectors: [svgS_Kalin, svgS_Ince]},
      {Value: 'ş', Type: c, Vectors: [svgSH]},
      {Value: 't', Type: c, Vectors: [svgT_Kalin, svgT_Ince]},
      {Value: 'y', Type: c, Vectors: [svgY_Kalin, svgY_Ince]},
      {Value: 'z', Type: c, Vectors: [svgZ, svgZ2]},

      // TODO:not have letters
      // C F H Ğ J V eskiden yoktu sonradan diğer dillerden girdi
      {Value: 'c', Type: c, Vectors: [svgICH]}, // TODO: ?
      {Value: 'f', Type: c, Vectors: [svgD_Ince]}, // TODO: ?
      {Value: 'ğ', Type: c, Vectors: [svgG_Kalin]}, // TODO: ?
      {Value: 'h', Type: c, Vectors: []}, // TODO: ?
      {Value: 'j', Type: c, Vectors: []}, // TODO: ?
      {Value: 'q', Type: c, Vectors: [svgK_Kalin]}, // TODO: ?
      {Value: 'x', Type: c, Vectors: []}, // TODO: ?
      {Value: 'v', Type: c, Vectors: []}, // TODO: ?
      {Value: 'w', Type: c, Vectors: []}, // TODO: ?

      // Syllable
      {Value: 'ık', Type: s, Vectors: [svgIQ]},
      {Value: 'ki', Type: s, Vectors: [svgIQ]},
      {Value: 'iç', Type: s, Vectors: [svgICH]},
      {Value: 'çi', Type: s, Vectors: [svgICH]},
      {Value: 'ok', Type: s, Vectors: [svgOQ]},
      {Value: 'uk', Type: s, Vectors: [svgOQ]},
      {Value: 'ök', Type: s, Vectors: [svgUQ]},
      {Value: 'ük', Type: s, Vectors: [svgUQ]},
      {Value: 'ld', Type: s, Vectors: [svgLT]},
      {Value: 'lt', Type: s, Vectors: [svgLT]},
      {Value: 'nç', Type: s, Vectors: [svgNCH]},
      {Value: 'nt', Type: s, Vectors: [svgNT]},
      {Value: 'nd', Type: s, Vectors: [svgNT]},
      {Value: 'ng', Type: s, Vectors: [svgNG]},
      {Value: 'ny', Type: s, Vectors: [svgNY]}
    ];

    if (sort) {
      alphabet = alphabet.sort((a, b) => {
        if (a.Value < b.Value) {
          return -1;
        }
        if (a.Value > b.Value) {
          return 1;
        }
        return 0;
      });
    }

    return alphabet.filter(x => x.Vectors.length > 0);
  }

  private static Yenisei(sort: boolean = false): Letter[] {
    const sp = LetterType.Separator;
    const v = LetterType.Vowel;
    const c = LetterType.Consonants;
    const s = LetterType.Syllable;
    const styleText = 'fill:currentColor';

    //#region Alphabet
    const svgA1 = {
      width: '40', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 161.00287,1036.5205 -4.39453,0 -106.018065,-85.14404 17.028808,-21.24023 62.622067,50.1709 0,-206.35986 4.39453,0 106.01807,85.14404 -17.02881,21.24023 -62.62207,-50.1709 0,206.35986 z'
      }]
    } as Svg;
    const svgA2 = {
      width: '40', height: '60', viewBox: '96 750 100 320', transform: 'scale(-1,1)', paths: [{
        style: styleText,
        d: 'm -130.24115,1036.5205 -4.39453,0 -106.01807,-85.14404 17.02881,-21.24023 62.62207,50.1709 0,-206.35986 4.39453,0 106.018069,85.14404 -17.028809,21.24023 -62.62207,-50.1709 0,206.35986 z'
      }]
    } as Svg;
    const svgE = {
      width: '26', height: '60', viewBox: '106 750 100 320', paths: [{
        style: styleText,
        d: 'm 212.87738,1016.5762 -11.35253,21.7895 q -14.46534,-6.7749 -26.7334,-14.0991 -12.08496,-7.3242 -22.33887,-15.1978 -10.43701,7.8736 -22.52197,15.1978 -12.08496,7.3242 -26.5503,14.0991 l -11.352535,-21.7895 q 11.718745,-6.5918 21.240235,-13.1836 9.70459,-6.59182 17.76123,-13.00051 -10.62012,-10.80322 -18.12744,-21.97266 -7.32422,-11.16943 -12.08496,-22.15576 -4.577639,-11.16943 -6.774905,-21.97265 -2.01416,-10.80323 -2.01416,-21.05713 0,-10.25391 2.01416,-21.05713 2.197266,-10.98633 6.774905,-21.97266 4.76074,-11.16943 12.08496,-22.33887 7.50732,-11.35253 18.12744,-22.15576 -8.05664,-6.40869 -17.76123,-13.00049 -9.52149,-6.59179 -21.240235,-13.36669 l 11.352535,-21.78956 q 14.46534,6.77491 26.5503,14.28223 12.08496,7.32422 22.52197,15.01465 10.25391,-7.69043 22.33887,-15.01465 12.26806,-7.50732 26.7334,-14.28223 l 11.35253,21.78956 q -23.07128,13.36669 -39.18457,26.36718 10.62012,10.80323 17.94434,22.15576 7.50732,11.16944 12.08496,22.33887 4.76074,10.98633 6.95801,21.97266 2.19726,10.80322 2.19726,21.05713 0,10.2539 -2.19726,21.05713 -2.19727,10.80322 -6.95801,21.97265 -4.57764,10.98633 -12.08496,22.15576 -7.32422,11.16944 -17.94434,21.97266 8.05664,6.40869 17.76123,13.00051 9.70459,6.5918 21.42334,13.1836 z M 180.65082,903.23389 q 0,-6.5918 -1.09863,-14.09912 -1.09863,-7.69043 -4.21143,-16.11329 -2.92968,-8.60595 -8.42285,-17.94433 -5.49316,-9.52149 -14.46533,-19.40918 -8.97217,9.88769 -14.46533,19.40918 -5.49317,9.33838 -8.60596,17.94433 -2.92969,8.42286 -4.02832,16.11329 -1.09863,7.50732 -1.09863,14.09912 0,6.59179 1.09863,14.28222 1.09863,7.50733 4.02832,16.11328 3.11279,8.42286 8.60596,17.76123 5.49316,9.15528 14.46533,19.04297 8.97217,-9.88769 14.46533,-19.04297 5.49317,-9.33837 8.42285,-17.76123 3.1128,-8.60595 4.21143,-16.11328 1.09863,-7.69043 1.09863,-14.28222 z'
      }]
    } as Svg;
    const svgI = {
      width: '23', height: '60', viewBox: '106 750 100 320', paths: [{
        style: styleText,
        d: 'm 122.78949,1034.5205 -30.761715,0 0,-262.57323 4.394531,0 106.018064,85.14404 -17.02881,21.24023 -62.62207,-50.1709 0,206.35986 z'
      }]
    } as Svg;
    const svgO = {
      width: '29', height: '60', viewBox: '106 750 100 320', paths: [{
        style: styleText,
        d: 'm 79.942814,1034.5205 q 0,-19.4092 3.845215,-37.35351 3.845215,-18.12744 12.634277,-34.60693 8.789064,-16.47949 23.071294,-31.31104 14.46533,-14.83154 35.33935,-27.83203 Q 133.77582,890.2334 119.4936,875.40186 105.21137,860.57031 96.422306,844.09082 87.633244,827.42822 83.788029,809.48389 79.942814,791.35645 79.942814,771.94727 l 32.226566,0 q 0,11.90185 1.28173,23.25439 1.46485,11.16943 5.31006,21.97266 3.84522,10.80322 10.62012,21.42334 6.7749,10.62011 17.57813,21.05713 10.98632,10.43701 26.36718,21.05712 15.56397,10.43702 36.6211,21.05713 l 0,2.92969 q -21.05713,10.80322 -36.6211,21.24023 -15.38086,10.43702 -26.36718,20.87403 -10.80323,10.43701 -17.57813,21.05713 -6.7749,10.62011 -10.62012,21.42334 -3.84521,10.80324 -5.31006,22.15574 -1.28173,11.1695 -1.28173,23.0713 l -32.226566,0 z'
      }]
    } as Svg;
    const svgOE = {
      width: '27', height: '60', viewBox: '106 750 100 320', paths: [{
        style: styleText,
        d: 'm 185.45798,773.16223 30.76172,0 0,130.00488 -4.39453,0 -91.55274,-73.42529 0,205.99368 -30.761715,0 0,-262.57327 4.394532,0 91.552733,73.6084 0,-73.6084 z'
      }]
    } as Svg;

    const svgB1 = {
      width: '34', height: '60', viewBox: '94 750 100 320', paths: [{
        style: styleText,
        d: 'm 153.12934,771.94727 q -1.09864,2.38037 -2.19727,7.14111 -0.91553,4.57764 -1.83105,10.43701 -0.91553,5.67627 -1.46485,12.08496 -0.54931,6.22559 -0.54931,11.90186 0,9.88769 5.49316,18.67675 5.67627,8.78907 14.09912,17.57813 8.42285,8.78906 18.31055,18.49365 9.88769,9.52149 18.31055,21.24024 8.42285,11.71875 13.91601,26.18408 5.67627,14.46533 5.67627,32.95898 0,17.76123 -4.94385,34.24073 -4.94384,16.47949 -15.19775,29.29683 -10.25391,12.6343 -26.00098,20.3247 -15.56396,7.6905 -36.9873,7.6905 -13.73291,0 -27.83203,-3.8452 -13.916019,-3.6621 -25.085452,-12.4512 -11.169434,-8.9722 -18.310547,-23.4375 -6.958008,-14.64845 -6.958008,-36.438 0,-10.62011 2.563476,-21.60644 2.563477,-11.16944 8.422852,-22.15576 5.859375,-10.98633 15.197754,-21.78956 9.338379,-10.98632 23.071285,-21.24023 l 21.97266,21.24023 q -21.97266,15.93018 -31.86035,31.86036 -9.887697,15.93017 -9.887697,34.79004 0,13.5498 4.760743,23.07128 4.760744,9.52149 11.901854,15.38088 7.32422,5.8594 15.93018,8.6059 8.60595,2.5635 16.11328,2.5635 11.35254,0 21.05713,-4.0283 9.88769,-4.2114 17.02881,-12.45118 7.32421,-8.23974 11.35253,-20.69091 4.21143,-12.45117 4.21143,-28.93067 0,-15.74707 -5.49316,-28.01513 -5.49317,-12.45118 -13.73291,-22.88819 -8.23975,-10.43701 -17.76123,-19.77539 -9.52149,-9.33838 -17.76123,-18.85986 -8.23975,-9.70459 -13.73291,-20.50781 -5.49317,-10.98633 -5.49317,-24.53614 0,-6.22558 0.36621,-12.63427 0.36621,-6.5918 0.91553,-12.26807 0.54932,-5.85938 1.28174,-10.25391 0.73242,-4.57763 1.64795,-6.958 l 29.47998,0 z'
      }]
    } as Svg;
    const svgB2 = {
      width: '34', height: '60', viewBox: '94 750 100 320', paths: [{
        style: styleText,
        d: 'm 143.75036,766.17566 81.66504,82.76367 -64.08691,84.22852 64.27002,84.41165 -24.35303,18.6767 -59.14307,-77.63669 -59.143063,77.63669 -24.353028,-18.6767 64.086911,-84.41165 -64.086911,-84.22852 82.031251,-82.76367 3.11279,0 z m -44.677732,85.14404 43.029782,56.57959 42.66358,-56.21338 -42.48047,-42.84668 -43.212892,42.48047 z'
      }]
    } as Svg;
    const svgB3 = {
      width: '53', height: '60', viewBox: '100 750 100 320', transform: 'matrix(0,-1,1,0,0,0)', paths: [{
        style: styleText,
        d: 'm -893.17719,16.109802 q -1.09863,2.380371 -2.19726,7.141114 -0.91553,4.577636 -1.83106,10.437011 -0.91552,5.67627 -1.46484,12.084961 -0.54932,6.225586 -0.54932,11.901856 0,9.887695 5.49317,18.676757 5.67627,8.789063 14.09912,17.578125 8.42285,8.789064 18.31055,18.493654 9.88769,9.52148 18.31054,21.24023 8.42285,11.71875 13.91602,26.18409 5.67627,14.46533 5.67627,32.95898 0,17.76123 -4.94385,34.24072 -4.94385,16.47949 -15.19775,29.29688 -10.25391,12.63427 -26.00098,20.3247 -15.56396,7.69043 -36.9873,7.69043 -13.73291,0 -27.83204,-3.84521 -13.91601,-3.66211 -25.08544,-12.45117 -11.16944,-8.97217 -18.31055,-23.4375 -6.95801,-14.64844 -6.95801,-36.43799 0,-10.62012 2.56348,-21.60645 2.56347,-11.16943 8.42285,-22.15576 5.85937,-10.98633 15.19775,-21.78955 9.33838,-10.98633 23.07129,-21.24023 l 21.97266,21.24023 q -21.97266,15.93018 -31.86035,31.86035 -9.8877,15.93018 -9.8877,34.79004 0,13.54981 4.76074,23.07129 4.76075,9.52149 11.90186,15.38086 7.32422,5.85938 15.93017,8.60596 8.60596,2.56347 16.11329,2.56347 11.35253,0 21.05712,-4.02832 9.8877,-4.21142 17.02881,-12.45117 7.32422,-8.23974 11.35254,-20.69092 4.21143,-12.45117 4.21143,-28.93066 0,-15.74707 -5.49317,-28.01514 -5.49316,-12.45117 -13.73291,-22.88818 -8.23974,-10.43701 -17.76123,-19.77539 -9.52148,-9.33838 -17.76123,-18.85986 -8.23974,-9.704594 -13.73291,-20.507817 -5.49316,-10.986328 -5.49316,-24.536133 0,-6.225586 0.36621,-12.634277 0.36621,-6.591797 0.91553,-12.268067 0.54931,-5.859375 1.28174,-10.253906 0.73242,-4.577637 1.64794,-6.958008 l 29.47998,0 z'
      }]
    } as Svg;
    const svgB4 = {
      width: '47', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 149.05951,770.11621 115.35645,115.35645 -21.60645,21.78955 -30.57861,-30.21241 -45.59326,60.0586 64.27002,84.4116 -24.35303,18.6768 L 147.41156,962.37695 88.268497,1040.1968 63.91547,1021.52 128.18549,937.1084 82.592228,877.23291 52.19672,907.26221 30.590275,885.47266 145.94672,770.11621 l 3.11279,0 z m -44.49463,85.32715 42.84668,56.39648 42.84668,-56.57959 -42.66357,-42.48046 -43.02979,42.66357 z'
      }]
    } as Svg;
    const svgB5 = {
      width: '35', height: '60', viewBox: '88 750 100 320', transform: 'scale(1,-1)', paths: [{
        style: styleText,
        d: 'm 221.18608,-844.7782 -81.66504,82.76367 -3.1128,0 -82.031247,-82.76367 68.481447,-69.03076 0,-124.70704 30.76172,0 0,125.25636 z m -83.12989,40.1001 39.18457,-40.1001 -39.18457,-40.1001 -40.832517,40.1001 z'
      }]
    } as Svg;
    const svgB6 = {
      width: '33', height: '60', viewBox: '102 750 100 320', transform: 'matrix(-1,0,0,-1,304,1803)',
      paths: [{
        style: styleText,
        d: 'm 133.1323,1035.7355 q -0.91553,-2.3804 -1.64795,-6.7749 -0.73242,-4.5777 -1.28174,-10.2539 -0.54932,-5.8594 -0.91553,-12.2681 -0.36621,-6.4087 -0.36621,-12.81738 0,-13.54981 5.49317,-24.35303 5.49316,-10.98633 13.73291,-20.50781 8.23974,-9.70459 17.76123,-19.04297 9.52148,-9.33838 17.76123,-19.77539 8.23974,-10.43702 13.73291,-22.70508 5.49316,-12.45117 5.49316,-28.19824 0,-16.4795 -4.21142,-28.93067 -4.02832,-12.45117 -11.35254,-20.69092 -7.14112,-8.23974 -17.02881,-12.26806 -9.70459,-4.21143 -21.05713,-4.21143 -7.50733,0 -16.11328,2.74658 -8.60596,2.56348 -15.93018,8.60596 -7.14111,5.85938 -11.90185,15.38086 -4.76075,9.33838 -4.76075,22.88818 0,9.52149 2.38038,18.12745 2.38037,8.60595 7.50732,16.8457 5.12695,8.05664 13.00049,15.93017 7.87353,7.87354 18.85986,15.74707 l -21.97266,21.24024 Q 106.582,920.19592 97.243626,909.3927 87.905247,898.40637 82.045872,887.42004 76.186497,876.43372 73.62302,865.44739 q -2.563476,-10.98633 -2.563476,-21.78955 0,-21.60645 6.958007,-36.25489 7.141114,-14.64843 18.310547,-23.4375 11.169432,-8.97216 25.085452,-12.63427 14.09912,-3.84522 27.83203,-3.84522 21.42334,0 36.9873,7.69043 15.74707,7.69043 26.00098,20.50781 10.25391,12.63428 15.19775,29.11377 4.94385,16.4795 4.94385,34.24073 0,18.49365 -5.67627,32.95898 -5.49316,14.46533 -13.91601,26.18408 -8.42286,11.71875 -18.31055,21.42334 -9.8877,9.52149 -18.31055,18.31055 -8.42285,8.78906 -14.09912,17.57812 -5.49316,8.78907 -5.49316,18.67676 0,5.85937 0.54931,12.08497 0.54932,6.2256 1.46485,12.085 0.91553,5.6762 1.83105,10.437 1.09864,4.5776 2.19727,6.958 l -29.47998,0 z'
      }]
    } as Svg;
    const svgB7 = {
      width: '53', height: '60', viewBox: '100 750 100 320', transform: 'matrix(0,1,-1,0,0,0)', paths: [{
        style: styleText,
        d: 'm 881.60962,-15.633518 q -0.91553,-2.380371 -1.64795,-6.774903 -0.73242,-4.577636 -1.28174,-10.253906 -0.54931,-5.859375 -0.91553,-12.268066 -0.36621,-6.408692 -0.36621,-12.817383 0,-13.549805 5.49317,-24.353027 5.49316,-10.986329 13.73291,-20.507817 8.23974,-9.70459 17.76123,-19.04296 9.52148,-9.33838 17.76123,-19.7754 8.23974,-10.43701 13.73291,-22.70507 5.49316,-12.45118 5.49316,-28.19825 0,-16.47949 -4.21142,-28.93066 -4.02832,-12.45117 -11.35254,-20.69092 -7.14112,-8.23974 -17.02881,-12.26806 -9.70459,-4.21143 -21.05713,-4.21143 -7.50732,0 -16.11328,2.74658 -8.60596,2.56348 -15.93018,8.60596 -7.14111,5.85937 -11.90185,15.38086 -4.76074,9.33838 -4.76074,22.88818 0,9.52149 2.38037,18.12744 2.38037,8.60596 7.50732,16.84571 5.12695,8.05664 13.00049,15.93017 7.87353,7.87354 18.85986,15.74707 l -21.97265,21.24024 q -13.73291,-10.25391 -23.07129,-21.05713 -9.33838,-10.98633 -15.19776,-21.97266 -5.85937,-10.98633 -8.42285,-21.97265 -2.56347,-10.98633 -2.56347,-21.78955 0,-21.60645 6.958,-36.25489 7.14112,-14.64844 18.31055,-23.4375 11.16943,-8.97217 25.08545,-12.63428 14.09912,-3.84521 27.83203,-3.84521 21.42334,0 36.98731,7.69043 15.74707,7.69043 26.00097,20.50781 10.25391,12.63428 15.19776,29.11377 4.94384,16.47949 4.94384,34.24072 0,18.49366 -5.67627,32.95899 -5.49316,14.46533 -13.91601,26.18408 -8.42285,11.71875 -18.31055,21.42334 -9.88769,9.52149 -18.31055,18.310548 -8.42285,8.789062 -14.09912,17.578125 -5.49316,8.789062 -5.49316,18.676757 0,5.859375 0.54932,12.084961 0.54931,6.225586 1.46484,12.084961 0.91553,5.67627 1.83105,10.437012 1.09864,4.577637 2.19727,6.958008 l -29.47998,0 z'
      }]
    } as Svg;
    const svgC1 = {
      width: '32', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 159.31244,771.94727 0,175.04882 60.97412,72.32671 -19.40918,18.4936 -56.9458,-68.84765 -56.945797,68.84765 -19.40918,-18.4936 60.974117,-72.32671 0,-175.04882 30.76172,0 z'
      }]
    } as Svg;
    const svgC2 = {
      width: '32', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 160.79538,1035.7355 -30.76172,0 0,-167.72464 -60.974116,-72.32666 19.409179,-18.49365 41.564937,50.35401 0,-54.38233 30.76172,0 0,54.38233 41.56494,-50.35401 19.40918,18.49365 -60.97412,72.32666 0,167.72464 z'
      }]
    } as Svg;
    const svgC3 = {
      width: '31', height: '60', viewBox: '94 750 100 280', transform: 'rotate(180,146,905)', paths: [{
        style: styleText,
        d: 'M 168.79538,1023.7355 H 138.03366 V 894.01086 l -51.23927,-44.14322 -0.102103,-52.73694 26.161393,-0.0785 0.64,38.14683 38.87652,34.00846 37.45544,-36.00846 -0.009,-36.14683 26.16139,0.0785 0.0564,48.28159 -47.23927,48.59857 z'
      }]
    } as Svg;
    const svgD1 = {
      width: '46', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 62.464787,766.271 97.778323,79.65087 0,2.56348 -58.41065,54.74854 57.67822,48.88916 0,2.56347 -96.679683,85.69338 -21.423339,-26.3672 68.481442,-60.0586 -55.480954,-49.07226 0,-4.57764 L 110.43842,849.21777 39.576603,794.28613 62.464787,766.271 Z m 100.708003,0 97.77832,79.65087 0,2.56348 -58.41064,54.74854 57.67822,48.88916 0,2.56347 -96.67968,85.69338 -21.42334,-26.3672 68.48144,-60.0586 -55.48096,-49.07226 0,-4.57764 56.03028,-51.08643 -70.86182,-54.93164 22.88818,-28.01513 z'
      }]
    } as Svg;
    const svgD2 = {
      width: '36', height: '60', viewBox: '96 750 100 320', transform: 'matrix(0.7,-0.7,0.7,0.7,-595,370)',
      paths: [{
        style: styleText,
        d: 'm 38.010645,887.90494 97.182165,0.18362 0,-97.00439 30.76172,0 0,97.00439 96.57846,-0.45096 0.0426,27.64893 -96.62108,0.45096 0,97.91991 -30.76172,0 0,-97.91991 -97.139545,-0.18362 z'
      }]
    } as Svg;
    const svgD3 = {
      width: '42', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 139.92008,1040.9917 -80.383299,-113.34229 0.915528,-4.57763 55.114741,-42.66358 -66.46728,-94.29931 26.184082,-18.31055 80.749508,116.63818 -0.73242,4.21143 -56.762694,41.74805 68.298344,93.2007 -26.91651,17.395 z m 82.39746,0 -80.3833,-113.34229 0.91553,-4.57763 55.11475,-42.66358 -66.46729,-94.29931 26.18408,-18.31055 80.74951,116.63818 -0.73242,4.21143 -56.76269,41.74805 68.29834,93.2007 -26.91651,17.395 z'
      }]
    } as Svg;
    const svgD4 = {
      width: '46', height: '60', viewBox: '98 750 100 320', transform: 'scale(-1,1)', paths: [{
        style: styleText,
        d: 'm -233.0527,764.48999 97.77832,79.65088 0,2.56348 -58.41065,54.74853 57.67822,48.88916 0,2.56348 -96.67968,85.69338 -21.42334,-26.3672 68.48144,-60.0586 -55.48095,-49.07227 0,-4.57764 56.03027,-51.08642 -70.86182,-54.93164 22.88819,-28.01514 z m 100.708,0 97.778324,79.65088 0,2.56348 -58.410644,54.74853 57.678222,48.88916 0,2.56348 -96.679692,85.69338 -21.42333,-26.3672 68.48144,-60.0586 -55.48096,-49.07227 0,-4.57764 56.030277,-51.08642 -70.861817,-54.93164 22.88818,-28.01514 z'
      }]
    } as Svg;
    const svgD5 = {
      width: '41', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 50.738567,888.08856 84.454243,0 0,-97.00439 30.76172,0 0,97.00439 84.41162,0 0.0426,27.64893 -84.45424,0 0,97.91991 -30.76172,0 0,-97.91991 -84.411623,0 z'
      }]
    } as Svg;
    const svgG1 = {
      width: '40', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 163.28543,1036.4048 -30.76172,0 0,-131.28664 30.76172,0 0,131.28664 z m 34.42383,-114.07472 q -3.2959,-4.21143 -7.87354,-11.71875 -4.39453,-7.69043 -8.42285,-17.21192 -4.02832,-9.52148 -6.95801,-20.3247 -2.74658,-10.98633 -2.74658,-21.97266 0,-26.9165 14.64844,-46.14258 14.83154,-19.40918 44.31152,-34.05761 l 14.28223,25.45166 q -12.81739,6.22558 -21.24024,12.63427 -8.42285,6.40869 -13.5498,13.00049 -4.94385,6.5918 -6.95801,13.73291 -2.01416,6.95801 -2.01416,14.64844 0,8.42285 2.01416,16.29639 2.01416,7.87353 4.94385,14.83154 3.11279,6.95801 6.59179,13.00049 3.47901,6.04248 6.5918,10.80322 l -23.6206,17.02881 z M 74.479275,905.30127 q 3.112793,-4.76074 6.591797,-10.80322 3.479004,-6.04248 6.408691,-13.00049 3.112793,-6.95801 5.126953,-14.83154 2.01416,-7.87354 2.01416,-16.29639 0,-7.69043 -2.01416,-14.64844 -2.01416,-7.14111 -7.141113,-13.73291 -4.943848,-6.5918 -13.366699,-13.00049 -8.422852,-6.40869 -21.240235,-12.63427 l 14.282227,-25.45166 q 29.47998,14.64843 44.128414,34.05761 14.83155,19.22608 14.83155,46.14258 0,10.98633 -2.92969,21.97266 -2.74658,10.80322 -6.7749,20.3247 -4.02832,9.52149 -8.60596,17.21192 -4.39453,7.50732 -7.69043,11.71875 L 74.479275,905.30127 Z'
      }]
    } as Svg;
    const svgG2 = {
      width: '32', height: '60', viewBox: '90 750 100 320', paths: [{
        style: styleText,
        d: 'm 170.6933,1013.8296 -17.39502,23.9868 q -17.39502,-10.6201 -30.76172,-23.0713 -13.3667,-12.4512 -23.254391,-25.81785 -9.887695,-13.3667 -16.662597,-27.09961 -6.774903,-13.91602 -10.986328,-27.28272 -4.028321,-13.5498 -5.859375,-26.18408 -1.831055,-12.63428 -1.831055,-23.4375 0,-16.47949 4.02832,-33.3252 4.211426,-17.0288 14.831543,-32.59277 10.803223,-15.56396 29.113773,-28.38135 18.31054,-12.81738 46.875,-21.05713 l 2.74658,0 53.6499,62.07276 -18.49365,15.74707 -42.11426,-46.875 q -15.56396,7.14111 -26.00098,15.74707 -10.43701,8.60596 -17.0288,17.76123 -6.5918,9.15527 -9.8877,18.49365 -3.295898,9.33838 -4.577636,17.94434 L 204.2016,929.05176 186.98969,951.93994 97.268009,902.68457 q 1.281738,10.80322 5.310061,23.62061 4.02832,12.81738 12.26806,27.09961 8.42286,14.28222 21.78955,29.66308 13.54981,15.19775 34.05762,30.76173 z'
      }]
    } as Svg;
    const svgG3 = {
      width: '34', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 164.3721,1033.5503 -30.76172,0 0,-131.28663 30.76172,0 0,131.28663 z m -67.382812,-131.28663 -30.761718,0 0,-131.28662 30.761718,0 0,131.28662 z m 134.765622,0 -30.76172,0 0,-131.28662 30.76172,0 0,131.28662 z'
      }]
    } as Svg;
    const svgG4 = {
      width: '43', height: '60', viewBox: '94 750 100 320', paths: [{
        style: styleText,
        d: 'm 53.046875,768.48911 -14.28125,25.45118 c 8.544922,4.15038 15.625,8.36229 21.240234,12.63476 5.615235,4.27246 10.069336,8.60547 13.365235,13 3.417968,4.39453 5.799805,8.97364 7.142578,13.73438 1.342773,4.63867 2.013672,9.52148 2.013672,14.64843 0,5.61524 -0.670899,11.0459 -2.013672,16.29492 -1.342773,5.24902 -3.051758,10.19336 -5.126953,14.83204 -1.953126,4.63867 -4.090821,8.97168 -6.410157,13 -2.319335,4.02832 -4.516601,7.63086 -6.591796,10.80468 l 23.621093,17.02735 c 2.197266,-2.80762 4.761719,-6.71387 7.691407,-11.71875 3.040197,-5.10753 5.897464,-10.82163 8.574214,-17.14063 5.8148,2.44502 10.72249,5.19408 14.69922,8.25586 4.47016,3.31845 7.98971,7.09125 10.5586,11.31836 0.30906,0.50079 0.6086,1.00837 0.90039,1.52149 l 0,121.83982 30.76172,0 0,-122.42772 c 0.20049,-0.34318 0.39908,-0.6878 0.60742,-1.02539 2.56889,-4.22711 6.08843,-7.99991 10.55859,-11.31835 4.02619,-3.09986 9.00577,-5.87805 14.91602,-8.34571 0.0154,0.0365 0.0295,0.0748 0.0449,0.11133 2.68555,6.34765 5.49414,12.08398 8.42383,17.21094 3.05176,5.00488 5.67578,8.91113 7.87304,11.71875 l 23.6211,-17.02735 c -2.0752,-3.17382 -4.27247,-6.77636 -6.5918,-10.80468 -2.31934,-4.02832 -4.5166,-8.36133 -6.5918,-13 -1.95312,-4.63868 -3.60058,-9.58302 -4.94335,-14.83204 -1.34278,-5.24902 -2.01563,-10.67968 -2.01563,-16.29492 0,-5.12695 0.67285,-10.00976 2.01563,-14.64843 1.34277,-4.76074 3.66113,-9.33985 6.95703,-13.73438 3.41796,-4.39453 7.93554,-8.72754 13.55078,-13 5.61524,-4.27247 12.69531,-8.48438 21.24023,-12.63476 l -14.2832,-25.45118 c -19.65332,9.76563 -34.42285,21.11915 -44.31055,34.0586 -9.76562,12.81738 -14.64844,28.19824 -14.64844,46.14258 0,4.74823 0.3906,9.49591 1.16016,14.24414 -9.53663,3.66448 -17.8073,8.16234 -24.79101,13.50585 -3.43358,2.57013 -6.25252,4.64061 -8.64844,6.6211 -2.17345,-2.03929 -4.77839,-4.12417 -7.99414,-6.53125 -6.93756,-5.30819 -15.14668,-9.7784 -24.60352,-13.42969 0.84013,-4.80363 1.26953,-9.60653 1.26953,-14.41015 0,-17.94434 -4.94433,-33.3252 -14.832029,-46.14258 -9.765624,-12.93945 -24.475586,-24.29297 -44.128906,-34.0586 z'
      }]
    } as Svg;
    const svgK1 = {
      width: '27', height: '60', viewBox: '90 750 100 320', paths: [{
        style: styleText,
        d: 'm 77.576603,1032.5063 q 9.521484,-13.1835 14.282226,-29.2968 4.943848,-16.11331 4.943848,-34.97317 0,-9.15528 -1.281738,-18.67676 -1.098633,-9.52148 -3.479004,-18.67676 -2.380371,-9.15527 -6.042481,-17.76123 -3.662109,-8.60596 -8.422851,-15.93017 l 0,-3.84522 93.749997,28.93067 0,-150.32959 30.76172,0 0,262.57323 -30.76172,0 0,-82.76366 -51.63574,-15.93018 q 2.38037,7.69043 3.84522,17.21191 1.64794,9.33838 1.64794,17.39502 0,9.70459 -1.46484,18.85987 -1.28174,9.15527 -3.66211,17.39504 -2.19726,8.0566 -5.12695,15.1977 -2.92969,6.958 -6.22559,12.4512 l -31.127927,0 0,-1.8311 z'
      }]
    } as Svg;
    const svgK2 = {
      width: '38', height: '60', viewBox: '94 750 100 320', paths: [{
        style: styleText,
        d: 'm 158.05902,1034.5205 -30.76171,0 0,-218.62792 q -3.47901,3.11279 -7.32422,6.40869 -3.2959,2.74658 -7.50733,6.22559 -4.21142,3.479 -8.60595,6.59179 -6.408695,4.76074 -14.099125,8.97217 -7.69043,4.02832 -14.282227,7.14111 -7.690429,3.66211 -15.563964,6.5918 L 48.928165,832.00586 q 6.958008,-2.56348 14.465332,-6.04248 6.408692,-3.11279 14.648438,-7.50733 8.239746,-4.57763 16.845703,-10.62011 8.789062,-6.22559 17.028812,-13.3667 8.23974,-7.14112 14.64843,-13.3667 7.50733,-7.32422 14.28223,-14.46533 l 3.66211,0 q 6.5918,7.14111 14.09912,14.46533 6.40869,6.22558 14.64844,13.3667 8.42285,7.14111 17.21191,13.3667 8.60596,6.04248 16.84571,10.62011 8.23974,4.39454 14.64843,7.50733 7.50733,3.479 14.46534,6.04248 l -10.98633,25.81787 q -7.87354,-2.92969 -15.56397,-6.5918 -6.59179,-3.11279 -14.28222,-7.14111 -7.69043,-4.21143 -14.09913,-8.97217 -4.39453,-3.11279 -8.60595,-6.59179 -4.21143,-3.47901 -7.50733,-6.22559 -3.84521,-3.2959 -7.32422,-6.40869 l 0,218.62792 z'
      }]
    } as Svg;
    const svgK3 = {
      width: '30', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 130.58073,1035.3154 0,-131.10349 -55.48096,-66.83349 19.409179,-16.6626 51.452641,61.52344 36.43798,-43.5791 -45.95947,-52.73438 18.12744,-16.29639 62.25586,67.74903 -55.48095,66.83349 0,131.10349 -30.76172,0 z'
      }]
    } as Svg;
    const svgK4 = {
      width: '24', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 93.510715,773.16223 q 19.409185,0 35.156255,3.47901 15.74707,3.479 28.01513,9.33837 12.45117,5.67627 21.42334,13.1836 8.97217,7.50732 14.83155,15.56396 5.85937,8.05664 8.60595,16.11328 2.92969,8.05664 2.92969,15.01465 0,8.78907 -3.66211,17.76123 -3.479,8.78907 -10.0708,16.6626 -6.5918,7.69043 -15.93018,14.09912 -9.33838,6.22559 -21.05713,10.0708 11.71875,3.47901 21.05713,9.70459 9.52149,6.22559 16.11328,14.09912 6.5918,7.69043 10.07081,16.84571 3.479,8.97216 3.479,17.94433 0,6.95801 -2.74658,15.01465 -2.74658,8.05664 -8.60596,16.11328 -5.67627,8.05667 -14.64844,15.56397 -8.78906,7.5073 -21.24023,13.3667 -12.26807,5.6763 -28.19824,9.1553 -15.93018,3.479 -35.522465,3.479 l 0,-262.57327 z m 30.761715,117.37061 q 11.71875,-1.83106 20.69092,-6.5918 8.97217,-4.94385 15.01465,-11.16943 6.04248,-6.22559 9.15527,-13.1836 3.1128,-7.14111 3.1128,-13.73291 0,-5.85937 -3.47901,-12.45117 -3.2959,-6.7749 -9.52148,-12.63428 -6.22559,-6.04248 -15.19776,-10.62011 -8.78906,-4.57764 -19.77539,-6.4087 l 0,86.792 z m 0,114.62406 q 12.08497,-1.8311 21.05713,-6.40873 8.97217,-4.57764 14.83155,-10.43701 6.04248,-6.04248 8.97216,-12.63428 3.1128,-6.5918 3.1128,-12.63428 0,-6.59179 -3.1128,-13.5498 -2.92968,-6.95801 -8.97216,-13.1836 -6.04248,-6.22558 -15.01465,-10.98632 -8.97217,-4.76075 -20.87403,-6.95801 l 0,86.79203 z'
      }]
    } as Svg;
    const svgK5 = {
      width: '40', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 132.82102,767.74634 30.76172,0 0,218.62793 q 3.479,-3.1128 7.32422,-6.40869 3.29589,-2.74659 7.50732,-6.04248 4.21143,-3.47901 8.60596,-6.77491 6.40869,-4.76074 14.09912,-8.78906 7.69043,-4.02832 14.28222,-7.14111 7.69043,-3.47901 15.56397,-6.7749 l 10.98633,25.81787 q -6.95801,2.56347 -14.46533,6.04248 -6.4087,3.11279 -14.64844,7.69043 -8.23975,4.57763 -16.84571,10.43701 -8.78906,6.22559 -17.21191,13.36669 -8.23975,7.1411 -14.64844,13.3667 -7.50732,7.3242 -14.09912,14.4653 l -3.66211,0 q -6.7749,-7.1411 -14.28222,-14.4653 -6.4087,-6.2256 -14.64844,-13.3667 -8.23975,-7.1411 -17.02881,-13.36669 -8.605957,-5.85938 -16.845703,-10.43701 -8.239746,-4.57764 -14.648437,-7.69043 -7.507325,-3.47901 -14.465332,-6.04248 l 10.986328,-25.81787 q 7.873535,3.29589 15.563965,6.7749 6.591796,3.11279 14.282226,7.14111 7.690433,4.02832 14.099123,8.78906 4.39453,3.2959 8.60596,6.77491 4.21142,3.29589 7.50732,6.04248 3.84521,3.29589 7.32422,6.40869 l 0,-218.62793 z'
      }]
    } as Svg;
    const svgL1 = {
      width: '23', height: '60', viewBox: '88 750 100 320', paths: [{
        style: styleText,
        d: 'm 159.75101,770.97705 30.76172,0 0,262.57325 -4.39454,0 -106.018062,-85.14405 17.028809,-21.24023 62.622073,50.17089 0,-206.35986 z'
      }]
    } as Svg;
    const svgL2 = {
      width: '32', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 130.55072,1034.5205 0,-175.04882 -60.974117,-72.32666 19.40918,-18.49365 56.945797,68.84765 56.9458,-68.84765 19.40918,18.49365 -60.97412,72.32666 0,175.04882 -30.76172,0 z'
      }]
    } as Svg;
    const svgL3 = {
      width: '23', height: '60', viewBox: '88 750 100 320', transform: 'matrix(-1,0,0,1,270,0)', paths: [{
        style: styleText,
        d: 'm 159.75101,770.97705 30.76172,0 0,262.57325 -4.39454,0 -106.018062,-85.14405 17.028809,-21.24023 62.622073,50.17089 0,-206.35986 z'
      }]
    } as Svg;
    const svgM1 = {
      width: '48', height: '60', viewBox: '100 750 100 320', transform: 'matrix(0,1,-1,0,0,0)', paths: [{
        style: styleText,
        d: 'm 907.87226,-269.68892 112.26594,118.36625 -22.175,21.21064 -29.76907,-31.01037 -43.44707,40.86725 62.81034,67.552331 -22.68608,20.651549 -62.3057,-65.69866 -68.69987,65.567913 -20.83039,-22.40815 68.5754,-64.992613 -43.01483,-44.78422 -31.17888,29.21513 -21.02274,-22.35323 118.36619,-112.26605 z m -46.73518,84.12086 41.61447,43.83263 44.05408,-41.75022 -41.52545,-43.59367 z'
      }]
    } as Svg;
    const svgM2 = {
      width: '52', height: '60', viewBox: '104 750 100 320', paths: [{
        style: styleText,
        d: 'm 145.57964,782.80736 c -31.62908,0.65185 -58.299394,23.36402 -64.329574,54.5659 -3.12931,16.19179 -0.42023,32.55346 6.71984,46.78602 -17.89673,1.24422 -35.1736,8.75753 -48.04055,22.11422 -22.04785,22.88698 -25.27281,57.76044 -7.60482,84.00285 17.66804,26.24245 51.18141,37.73305 82.087084,28.73685 16.18542,-4.7114 29.71582,-14.6425 38.82144,-27.51151 9.10394,12.73831 22.56395,22.56061 38.63664,27.23921 30.90568,8.9962 64.41907,-2.4847 82.08709,-28.7271 17.66801,-26.2424 14.44302,-61.12562 -7.6048,-84.0126 -13.6272,-14.14588 -32.2014,-21.70251 -51.22054,-22.22118 6.28224,-15.51428 6.9809,-33.4236 1.17671,-50.3745 -10.42738,-30.45263 -39.09948,-51.24998 -70.72852,-50.59816 z m 0.50568,24.88578 c 20.26827,-0.41775 39.66904,13.3302 46.66936,33.77424 7.00032,20.44408 -0.005,41.55074 -16.43492,52.2903 l 13.62441,20.84023 c 0.66821,-0.43666 1.27784,-0.93303 1.92553,-1.39061 19.13094,-8.84229 42.40854,-4.62439 56.55948,10.06514 14.31535,14.86023 16.2037,36.01848 4.88185,52.83489 -11.32187,16.81642 -33.73989,24.76947 -54.48807,18.72996 -19.36397,-5.63663 -32.1624,-21.5797 -33.23939,-39.6286 0.0508,-1.48889 0.1001,-2.97655 0.0498,-4.48312 l -8.587,0.29177 -16.39603,-0.56403 c -0.0572,1.66666 -0.0199,3.31478 0.0498,4.95963 -1.05398,18.07393 -13.86431,34.054 -33.24914,39.6967 -20.748164,6.03956 -43.156454,-1.91363 -54.478324,-18.73001 -11.32187,-16.81641 -9.43351,-37.97465 4.88186,-52.83488 13.81605,-14.34189 36.3163,-18.68769 55.178534,-10.65836 1.75732,1.18841 3.57185,2.31742 5.4459,3.36479 l 12.13656,-21.73493 c -1.67647,-0.93701 -3.25863,-1.99148 -4.79433,-3.10223 l 0.0397,-0.0877 c -0.12498,-0.0602 -0.25395,-0.1061 -0.37941,-0.1653 -15.32253,-11.28359 -23.32704,-30.76964 -19.78999,-49.07138 3.91532,-20.25896 20.12857,-33.97892 40.39683,-34.39661 z'
      }]
    } as Svg;
    const svgN1 = {
      width: '28', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 179.97757,902.26367 q 0,-6.7749 -1.28174,-14.64844 -1.09863,-8.05664 -4.39453,-17.0288 -3.2959,-8.97217 -9.33838,-18.67676 -6.04248,-9.8877 -15.93017,-20.1416 -9.8877,-10.43702 -24.16993,-21.24024 Q 110.7637,799.5415 91.354523,788.37207 l 11.352537,-21.78955 q 30.57862,14.28223 51.45264,31.12793 21.05713,16.8457 33.87451,34.60693 13.00049,17.76123 18.49365,35.70557 5.67627,17.76123 5.67627,34.24072 0,16.29639 -5.67627,34.05762 -5.49316,17.57812 -18.49365,35.33935 -12.81738,17.76123 -33.87451,34.60696 -20.87402,16.8457 -51.45264,31.1279 L 91.354523,1015.606 q 19.409177,-11.1695 33.508297,-21.9727 14.28223,-10.80322 24.16993,-21.05713 9.88769,-10.43701 15.93017,-20.1416 6.04248,-9.70459 9.33838,-18.49365 3.2959,-8.97217 4.39453,-16.84571 1.28174,-8.05664 1.28174,-14.83154 z'
      }]
    } as Svg;
    const svgN2 = {
      width: '44', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 68.338322,1034.5205 -30.761719,0 0,-130.00488 4.394531,0 91.552736,73.4253 0,-205.99365 4.39453,0 91.55273,73.60839 0,-73.60839 30.76172,0 0,130.00488 -4.39453,0 -91.55273,-73.42529 0,205.99364 -4.39453,0 -91.552738,-73.60839 0,73.60839 z'
      }]
    } as Svg;
    const svgN3 = {
      width: '44', height: '60', viewBox: '98 750 100 320', transform: 'matrix(-1,0,0,1,292,0)', paths: [{
        style: styleText,
        d: 'm 65.328099,1032.7395 -30.761718,0 0,-130.00488 4.394531,0 91.552738,73.42529 0,-205.99365 4.39453,0 91.55273,73.6084 0,-73.6084 30.76172,0 0,130.00488 -4.39453,0 -91.55274,-73.42529 0,205.99365 -4.39453,0 -91.552731,-73.6084 0,73.6084 z'
      }]
    } as Svg;
    const svgN4 = {
      width: '27', height: '60', viewBox: '102 750 100 320', transform: 'matrix(-1,0,0,1,304,0)', paths: [{
        style: styleText,
        d: 'm 179.97757,902.26367 q 0,-6.7749 -1.28174,-14.64844 -1.09863,-8.05664 -4.39453,-17.0288 -3.2959,-8.97217 -9.33838,-18.67676 -6.04248,-9.8877 -15.93017,-20.1416 -9.8877,-10.43702 -24.16993,-21.24024 Q 110.7637,799.5415 91.354523,788.37207 l 11.352537,-21.78955 q 30.57862,14.28223 51.45264,31.12793 21.05713,16.8457 33.87451,34.60693 13.00049,17.76123 18.49365,35.70557 5.67627,17.76123 5.67627,34.24072 0,16.29639 -5.67627,34.05762 -5.49316,17.57812 -18.49365,35.33935 -12.81738,17.76123 -33.87451,34.60696 -20.87402,16.8457 -51.45264,31.1279 L 91.354523,1015.606 q 19.409177,-11.1695 33.508297,-21.9727 14.28223,-10.80322 24.16993,-21.05713 9.88769,-10.43701 15.93017,-20.1416 6.04248,-9.70459 9.33838,-18.49365 3.2959,-8.97217 4.39453,-16.84571 1.28174,-8.05664 1.28174,-14.83154 z'
      }]
    } as Svg;
    const svgP = {
      width: '23', height: '60', viewBox: '88 750 100 320', transform: 'matrix(1,0,0,-1,0,1805)', paths: [{
        style: styleText,
        d: 'm 159.75101,770.97705 30.76172,0 0,262.57325 -4.39454,0 -106.018062,-85.14405 17.028809,-21.24023 62.622073,50.17089 0,-206.35986 z'
      }]
    } as Svg;
    const svgR1 = {
      width: '28', height: '60', viewBox: '88 750 100 320', paths: [{
        style: styleText,
        d: 'm 104.00043,845.55566 91.55274,-73.60839 4.39453,0 0,262.57323 -30.76172,0 0,-205.99364 -91.552736,73.42529 -4.394532,0 0,-130.00488 30.761718,0 0,73.60839 z'
      }]
    } as Svg;
    const svgR2 = {
      width: '34', height: '60', viewBox: '90 750 100 320', paths: [{
        style: styleText,
        d: 'm 124.3393,1034.5205 0,-197.02148 -25.268556,-32.22656 -25.268555,24.16992 -17.211914,-17.21191 43.395996,-43.5791 2.929689,0 36.8042,46.69189 36.8042,-46.69189 2.92968,0 43.396,43.5791 -17.21191,17.21191 -25.26856,-24.16992 -25.26855,32.22656 0,197.02148 -30.76172,0 z'
      }]
    } as Svg;
    const svgS1 = {
      width: '20', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 162.11624,1033.5503 -30.76172,0 0,-262.57325 30.76172,0 0,262.57325 z'
      }]
    } as Svg;
    const svgS2 = {
      width: '34', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 224.61142,818.93604 -15.74707,19.22607 -19.04297,-16.6626 -31.67724,37.53662 0,175.04887 -30.76172,0 0,-175.04887 -60.974122,-72.32666 19.40918,-18.49365 56.945802,68.84766 27.28271,-33.14209 -18.67675,-16.6626 15.74707,-19.22608 18.85986,16.84571 13.73291,-16.6626 19.40918,18.49365 -13.18359,15.74707 18.67675,16.4795 z'
      }]
    } as Svg;
    const svgS3 = {
      width: '48', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'M 263.6269,877.96533 242.02045,899.75488 148.45356,807.10352 56.534611,899.75488 34.928165,877.96533 144.79145,766.271 l 7.14111,0 111.69434,111.69433 z'
      }]
    } as Svg;
    const svgT1 = {
      width: '28', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 208.73442,1034.3577 -31.12793,0 q -3.2959,-5.4932 -6.22558,-12.4512 -2.92969,-7.1411 -5.31006,-15.1978 -2.19727,-8.23971 -3.66211,-17.39498 -1.28174,-9.15527 -1.28174,-18.85986 0,-8.05664 1.46484,-17.39502 1.64795,-9.52149 4.02832,-17.21192 l -51.63574,15.93018 0,82.7637 -30.761718,0 0,-262.57327 30.761718,0 0,150.32959 93.75,-28.93066 0,3.84521 q -4.76074,7.32422 -8.42285,15.93018 -3.66211,8.60595 -6.04248,17.76123 -2.38037,9.15527 -3.66211,18.67675 -1.09863,9.52149 -1.09863,18.67676 0,18.85987 4.76074,34.97311 4.94385,16.1133 14.46533,29.2969 l 0,1.8311 z'
      }]
    } as Svg;
    const svgT2 = {
      width: '46', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'M 263.6269,877.96533 242.02045,899.75488 148.45356,807.10352 56.534611,899.75488 34.928165,877.96533 144.79145,766.271 l 7.14111,0 111.69434,111.69433 z m 0,134.76567 -21.60645,21.7895 -93.56689,-92.65136 -91.918949,92.65136 -21.606446,-21.7895 109.863285,-111.69438 7.14111,0 111.69434,111.69438 z'
      }]
    } as Svg;
    const svgY1 = {
      width: '29', height: '60', viewBox: '106 750 100 320', paths: [{
        style: styleText,
        d: 'm 86.222702,773.96753 30.761718,0 q 30.57861,14.28223 51.45264,30.57861 21.05713,16.11328 33.87451,33.14209 13.00049,16.84571 18.49365,34.05762 5.67627,17.02881 5.67627,33.5083 0,16.29639 -5.67627,33.5083 -5.49316,17.02881 -18.49365,34.05762 -12.81738,16.8457 -33.87451,33.14213 -20.87403,16.2963 -51.45264,30.5786 l -30.761718,0 0,-262.57327 z M 194.25493,905.25415 q 0,-9.70459 -2.56348,-21.05713 -2.56347,-11.53564 -10.80322,-24.35303 -8.05664,-13.00048 -23.4375,-27.28271 -15.19775,-14.46533 -40.46631,-30.2124 l 0,205.81052 q 25.26856,-15.56394 40.46631,-30.02927 15.38086,-14.46534 23.4375,-27.28272 8.23975,-13.00049 10.80322,-24.35303 2.56348,-11.53564 2.56348,-21.24023 z'
      }]
    } as Svg;
    const svgY2 = {
      width: '33', height: '60', viewBox: '101 750 100 320', paths: [{
        style: styleText,
        d: 'm 133.1323,1035.7355 q -0.91553,-2.3804 -1.64795,-6.7749 -0.73242,-4.5777 -1.28174,-10.2539 -0.54932,-5.8594 -0.91553,-12.2681 -0.36621,-6.4087 -0.36621,-12.81738 0,-13.54981 5.49317,-24.35303 5.49316,-10.98633 13.73291,-20.50781 8.23974,-9.70459 17.76123,-19.04297 9.52148,-9.33838 17.76123,-19.77539 8.23974,-10.43702 13.73291,-22.70508 5.49316,-12.45117 5.49316,-28.19824 0,-16.4795 -4.21142,-28.93067 -4.02832,-12.45117 -11.35254,-20.69092 -7.14112,-8.23974 -17.02881,-12.26806 -9.70459,-4.21143 -21.05713,-4.21143 -7.50733,0 -16.11328,2.74658 -8.60596,2.56348 -15.93018,8.60596 -7.14111,5.85938 -11.90185,15.38086 -4.76075,9.33838 -4.76075,22.88818 0,9.52149 2.38038,18.12745 2.38037,8.60595 7.50732,16.8457 5.12695,8.05664 13.00049,15.93017 7.87353,7.87354 18.85986,15.74707 l -21.97266,21.24024 Q 106.582,920.19592 97.243626,909.3927 87.905247,898.40637 82.045872,887.42004 76.186497,876.43372 73.62302,865.44739 q -2.563476,-10.98633 -2.563476,-21.78955 0,-21.60645 6.958007,-36.25489 7.141114,-14.64843 18.310547,-23.4375 11.169432,-8.97216 25.085452,-12.63427 14.09912,-3.84522 27.83203,-3.84522 21.42334,0 36.9873,7.69043 15.74707,7.69043 26.00098,20.50781 10.25391,12.63428 15.19775,29.11377 4.94385,16.4795 4.94385,34.24073 0,18.49365 -5.67627,32.95898 -5.49316,14.46533 -13.91601,26.18408 -8.42286,11.71875 -18.31055,21.42334 -9.8877,9.52149 -18.31055,18.31055 -8.42285,8.78906 -14.09912,17.57812 -5.49316,8.78907 -5.49316,18.67676 0,5.85937 0.54931,12.08497 0.54932,6.2256 1.46485,12.085 0.91553,5.6762 1.83105,10.437 1.09864,4.5776 2.19727,6.958 l -29.47998,0 z'
      }]
    } as Svg;
    const svgY3 = {
      width: '29', height: '60', viewBox: '100 750 100 320', transform: 'matrix(-1,0,0,1,305,0)', paths: [{
        style: styleText,
        d: 'm 86.222702,773.96753 30.761718,0 q 30.57861,14.28223 51.45264,30.57861 21.05713,16.11328 33.87451,33.14209 13.00049,16.84571 18.49365,34.05762 5.67627,17.02881 5.67627,33.5083 0,16.29639 -5.67627,33.5083 -5.49316,17.02881 -18.49365,34.05762 -12.81738,16.8457 -33.87451,33.14213 -20.87403,16.2963 -51.45264,30.5786 l -30.761718,0 0,-262.57327 z M 194.25493,905.25415 q 0,-9.70459 -2.56348,-21.05713 -2.56347,-11.53564 -10.80322,-24.35303 -8.05664,-13.00048 -23.4375,-27.28271 -15.19775,-14.46533 -40.46631,-30.2124 l 0,205.81052 q 25.26856,-15.56394 40.46631,-30.02927 15.38086,-14.46534 23.4375,-27.28272 8.23975,-13.00049 10.80322,-24.35303 2.56348,-11.53564 2.56348,-21.24023 z'
      }]
    } as Svg;
    const svgZ1 = {
      width: '40', height: '60', viewBox: '102 750 100 320', paths: [{
        style: styleText,
        d: 'm 81.837357,888.42334 53.649903,0 0,-117.00439 30.76172,0 0,117.00439 84.41162,0 0,145.56886 -30.76172,0 0,-117.91993 -53.6499,0 0,117.91993 -30.76172,0 0,-117.91993 -84.411622,0 0,-144.65332 30.761719,0 0,117.00439 z'
      }]
    } as Svg;
    const svgZ2 = {
      width: '36', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 69.209762,789.86217 c -1.095231,3.39282 -2.154038,7.94447 -3.179687,13.65235 -1.098184,5.86454 -1.814678,12.23874 -2.148438,19.12304 -0.333764,6.88429 -0.120267,14.02205 0.642578,21.41407 0.690307,7.54866 2.298448,14.76107 4.822266,21.63672 6.183354,16.84534 16.123463,29.57985 29.822265,38.20507 6.559614,4.22756 14.077944,7.70757 22.535164,10.45508 l -37.955085,54.79102 24.734375,18.29101 45.98047,-66.3789 c 5.25216,1.11044 9.96129,2.41585 14.12695,3.91797 6.6375,2.39342 12.24449,5.17541 16.82227,8.34375 4.46132,3.20491 8.04621,6.87605 10.75391,11.01562 2.6711,4.02314 4.77614,8.48171 6.3125,13.37305 1.68268,5.35717 2.66905,10.7402 2.96093,16.15039 0.29188,5.41018 0.20185,10.62009 -0.27148,15.63086 -0.58981,5.04736 -1.38894,9.84064 -2.39453,14.37893 -1.00561,4.5382 -2.02205,8.6315 -3.05078,12.2812 l 27.63867,9.1699 c 1.25495,-3.337 2.58826,-7.8516 4,-13.541 1.25868,-5.7692 2.21699,-12.0845 2.87695,-18.94528 0.65995,-6.86071 0.84366,-14.01815 0.54883,-21.47461 -0.44791,-7.53633 -1.77004,-14.79948 -3.96484,-21.78711 -5.37729,-17.11971 -14.64499,-30.32891 -27.80274,-39.63086 -8.56028,-6.03353 -18.86059,-10.82952 -30.88086,-14.40039 l 34.40235,-49.66406 -24.73438,-18.29102 -42.57226,61.45899 c -2.30719,-0.52832 -4.50499,-1.10162 -6.56055,-1.73438 -6.74356,-2.07586 -12.41901,-4.60798 -17.02735,-7.59766 -4.72292,-2.94761 -8.53453,-6.42518 -11.43554,-10.43164 -2.85896,-3.89188 -5.172785,-8.24368 -6.939458,-13.05664 -1.934928,-5.27132 -3.176413,-10.60195 -3.724609,-15.99219 -0.548203,-5.39025 -0.646556,-10.62174 -0.296875,-15.6914 0.235091,-5.0276 0.745969,-9.83131 1.535156,-14.41211 0.78919,-4.58082 1.612352,-8.71758 2.466797,-12.41211 l -28.042969,-7.84766 z'
      }]
    } as Svg;
    const svgZ3 = {
      width: '36', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 229.44346,789.86217 c 1.09523,3.39282 2.15404,7.94447 3.17969,13.65235 1.09818,5.86454 1.81467,12.23874 2.14843,19.12304 0.33377,6.88429 0.12027,14.02205 -0.64257,21.41407 -0.69031,7.54866 -2.29845,14.76107 -4.82227,21.63672 -6.18335,16.84534 -16.12346,29.57985 -29.82227,38.20507 -6.55961,4.22756 -14.07794,7.70757 -22.53516,10.45508 l 37.95509,54.79102 -24.73438,18.29101 -45.98047,-66.3789 c -5.25216,1.11044 -9.96129,2.41585 -14.12695,3.91797 -6.6375,2.39342 -12.24449,5.17541 -16.82227,8.34375 -4.46132,3.20491 -8.04621,6.87605 -10.75391,11.01562 -2.671099,4.02314 -4.776139,8.48171 -6.312499,13.37305 -1.68268,5.35717 -2.66905,10.7402 -2.96093,16.15039 -0.29188,5.41018 -0.20185,10.62009 0.27148,15.63086 0.58981,5.04736 1.38894,9.84064 2.39453,14.37893 1.00561,4.5382 2.02205,8.6315 3.05078,12.2812 l -27.63867,9.1699 c -1.25495,-3.337 -2.58826,-7.8516 -4,-13.541 -1.25868,-5.7692 -2.21699,-12.0845 -2.87695,-18.94528 -0.65995,-6.86071 -0.84366,-14.01815 -0.54883,-21.47461 0.44791,-7.53633 1.77004,-14.79948 3.96484,-21.78711 5.37729,-17.11971 14.64499,-30.32891 27.80274,-39.63086 8.560279,-6.03353 18.860589,-10.82952 30.880859,-14.40039 l -34.402349,-49.66406 24.734379,-18.29102 42.57226,61.45899 c 2.30719,-0.52832 4.50499,-1.10162 6.56055,-1.73438 6.74356,-2.07586 12.41901,-4.60798 17.02735,-7.59766 4.72292,-2.94761 8.53453,-6.42518 11.43554,-10.43164 2.85896,-3.89188 5.17279,-8.24368 6.93946,-13.05664 1.93493,-5.27132 3.17641,-10.60195 3.72461,-15.99219 0.5482,-5.39025 0.64655,-10.62174 0.29687,-15.6914 -0.23509,-5.0276 -0.74597,-9.83131 -1.53515,-14.41211 -0.78919,-4.58082 -1.61236,-8.71758 -2.4668,-12.41211 l 28.04297,-7.84766 z'
      }]
    } as Svg;
    //#endregion

    //#region Syllable
    const svgBS = {
      width: '42', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 252.93695,1034.5205 -30.76171,0 -72.69288,-102.53905 -72.692866,102.53905 -30.761719,0 0,-262.57323 30.761719,0 72.692866,103.8208 72.69288,-103.8208 30.76171,0 0,262.57323 z m -30.76171,-54.38232 0,-153.25927 -53.2837,76.90429 53.2837,76.35498 z m -92.28516,-76.35498 -53.100586,-76.90429 0,153.07617 53.100586,-76.17188 z'
      }]
    } as Svg;
    const svgND = {
      width: '54', height: '60', viewBox: '102 750 100 320', paths: [{
        style: styleText,
        d: 'm 287.35105,901.45288 c 0,18.9209 -2.99072,36.6211 -8.97217,53.10059 -5.98145,16.47949 -14.77051,30.82275 -26.36719,43.02978 -11.47461,12.20705 -25.63476,21.85055 -42.48047,28.93065 -16.8457,7.0801 -36.13281,10.6201 -57.86132,10.6201 -21.85059,0 -41.19873,-3.54 -58.044437,-10.6201 -16.845703,-7.0801 -31.066895,-16.7236 -42.663575,-28.93065 -11.474609,-12.20703 -20.202637,-26.55029 -26.184082,-43.02978 -5.981445,-16.47949 -8.972168,-34.17969 -8.972168,-53.10059 0,-20.01953 2.746582,-38.33008 8.239746,-54.93164 5.615235,-16.72363 14.038086,-31.06689 25.268555,-43.02978 11.352539,-11.96289 25.512696,-21.24024 42.480469,-27.83204 16.967772,-6.59179 36.865232,-9.88769 59.692382,-9.88769 22.82715,0 42.72461,3.2959 59.69238,9.88769 17.08985,6.5918 31.25,15.86915 42.48047,27.83204 11.35254,11.96289 19.77539,26.30615 25.26856,43.02978 5.61523,16.60156 8.42285,34.91211 8.42285,54.93164 z m -239.318849,0 c 0,14.4043 2.197266,28.13721 6.591797,41.19873 4.516601,13.06153 11.108398,24.53614 19.77539,34.42383 8.789063,9.88769 19.592287,17.76121 32.409672,23.62056 12.93945,5.8594 27.83203,8.7891 44.67773,8.7891 16.84571,0 31.73829,-2.9297 44.67774,-8.7891 12.93945,-5.85935 23.74267,-13.73287 32.40966,-23.62056 8.78907,-9.88769 15.38086,-21.3623 19.77539,-34.42383 4.51661,-13.06152 6.77491,-26.79443 6.77491,-41.19873 0,-14.64844 -2.13623,-28.50342 -6.4087,-41.56494 -4.27246,-13.06153 -10.68115,-24.4751 -19.22607,-34.24072 -8.54492,-9.8877 -19.34814,-17.7002 -32.40967,-23.4375 -12.93945,-5.73731 -28.07617,-8.60596 -45.41015,-8.60596 -17.45606,0 -32.65382,2.86865 -45.59327,8.60596 -12.93945,5.7373 -23.742671,13.5498 -32.409664,23.4375 -8.544921,9.76562 -14.953613,21.17919 -19.226074,34.24072 -4.272461,13.06152 -6.408691,26.9165 -6.408691,41.56494 z'
      }, {
        style: styleText,
        d: 'm 153.5069,960.43279 q -8.42285,0 -14.46533,-6.04248 -5.85938,-6.04248 -5.85938,-14.46533 0,-8.42285 5.85938,-14.28223 6.04248,-5.85937 14.46533,-5.85937 8.60596,0 14.64844,5.85937 6.04248,5.85938 6.04248,14.28223 0,8.42285 -6.04248,14.46533 -6.04248,6.04248 -14.64844,6.04248 z'
      }, {
        style: styleText,
        d: 'm 108.49127,909.23406 q -8.42285,0 -14.465329,-6.04248 -5.85937,-6.04248 -5.85937,-14.46533 0,-8.42285 5.85937,-14.28223 6.042479,-5.85937 14.465329,-5.85937 8.60596,0 14.64844,5.85937 6.04248,5.85938 6.04248,14.28223 0,8.42285 -6.04248,14.46533 -6.04248,6.04248 -14.64844,6.04248 z'
      }, {
        style: styleText,
        d: 'm 198.52253,909.23406 q -8.42285,0 -14.46533,-6.04248 -5.85938,-6.04248 -5.85938,-14.46533 0,-8.42285 5.85938,-14.28223 6.04248,-5.85937 14.46533,-5.85937 8.60596,0 14.64844,5.85937 6.04248,5.85938 6.04248,14.28223 0,8.42285 -6.04248,14.46533 -6.04248,6.04248 -14.64844,6.04248 z'
      }]
    } as Svg;
    const svgNG1 = {
      width: '25', height: '60', viewBox: '90 750 100 320', paths: [{
        style: styleText,
        d: 'm 197.30094,1035.3154 -30.76172,0 0,-131.28659 -86.425779,-66.10108 17.211915,-22.88818 69.213864,52.18506 0,-94.48242 30.76172,0 0,262.57321 z'
      }]
    } as Svg;
    const svgNG2 = {
      width: '25', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 92.027775,771.94727 30.761715,0 0,94.48242 69.21387,-52.18506 17.21191,22.88818 -86.42578,66.10108 0,131.28661 -30.761715,0 0,-262.57323 z'
      }]
    } as Svg;
    const svgNG3 = {
      width: '54', height: '60', viewBox: '102 750 100 320', paths: [{
        style: styleText,
        d: 'm 287.35105,901.45288 q 0,28.38135 -8.97217,53.10059 -8.97217,24.71924 -26.36719,43.02978 -17.21191,18.31055 -42.48047,28.93065 -25.26855,10.6201 -57.86132,10.6201 -32.77588,0 -58.044437,-10.6201 -25.268555,-10.6201 -42.663575,-28.93065 -17.211914,-18.31054 -26.184082,-43.02978 -8.972168,-24.71924 -8.972168,-53.10059 0,-30.0293 8.239746,-54.93164 8.422852,-25.08545 25.268555,-43.02978 17.028809,-17.94434 42.480469,-27.83204 25.451662,-9.88769 59.692382,-9.88769 34.24072,0 59.69238,9.88769 25.63477,9.8877 42.48047,27.83204 17.02881,17.94433 25.26856,43.02978 8.42285,24.90234 8.42285,54.93164 z m -239.318849,0 q 0,21.60645 6.591797,41.19873 6.774902,19.59229 19.77539,34.42383 13.183594,14.83154 32.409672,23.62056 19.40918,8.7891 44.67773,8.7891 25.26856,0 44.67774,-8.7891 19.40917,-8.78902 32.40966,-23.62056 13.1836,-14.83154 19.77539,-34.42383 6.77491,-19.59228 6.77491,-41.19873 0,-21.97266 -6.4087,-41.56494 -6.40869,-19.59229 -19.22607,-34.24072 -12.81738,-14.83155 -32.40967,-23.4375 -19.40918,-8.60596 -45.41015,-8.60596 -26.18409,0 -45.59327,8.60596 -19.409175,8.60595 -32.409664,23.4375 -12.817382,14.64843 -19.226074,34.24072 -6.408691,19.59228 -6.408691,41.56494 z m 103.454589,20.50781 q -8.42285,0 -14.46533,-6.04248 -5.85938,-6.04248 -5.85938,-14.46533 0,-8.42285 5.85938,-14.28223 6.04248,-5.85937 14.46533,-5.85937 8.60596,0 14.64844,5.85937 6.04248,5.85938 6.04248,14.28223 0,8.42285 -6.04248,14.46533 -6.04248,6.04248 -14.64844,6.04248 z'
      }]
    } as Svg;
    const svgNG4 = {
      width: '56', height: '60', viewBox: '102 750 100 320', paths: [{
        style: styleText,
        d: 'M 6.1139879,903.03296 150.21799,766.07007 294.322,903.03296 150.21799,1039.9958 6.1139879,903.03296 Z m 248.4741221,0 -104.37012,-98.87695 -104.370115,98.87695 104.370115,98.87694 104.37012,-98.87694 z m -104.37012,20.50781 q -8.42285,0 -14.46533,-6.04248 -5.85938,-6.04248 -5.85938,-14.46533 0,-8.42285 5.85938,-14.28223 6.04248,-5.85937 14.46533,-5.85937 8.60596,0 14.64844,5.85937 6.04248,5.85938 6.04248,14.28223 0,8.42285 -6.04248,14.46533 -6.04248,6.04248 -14.64844,6.04248 z'
      }]
    } as Svg;
    const svgNJ1 = {
      width: '26', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 107.76237,901.09912 52.18506,-45.41016 q -12.08497,-5.31005 -24.35303,-12.26806 -12.08496,-7.14111 -21.97266,-16.8457 -9.70459,-9.8877 -15.930174,-23.07129 -6.225585,-13.1836 -6.225585,-30.76172 l 32.226559,0 q 0,10.0708 3.47901,18.31054 3.479,8.05664 9.52148,15.01465 6.04248,6.77491 14.09912,12.45117 8.05664,5.67627 17.21192,10.80323 9.15527,4.94384 18.85986,9.70459 9.8877,4.76074 19.40918,9.52148 l 0,2.56348 -58.41065,52.73437 58.41065,52.91748 0,2.56348 q -9.52148,4.94385 -19.40918,9.70459 -9.70459,4.57764 -18.85986,9.70459 -9.15528,5.12695 -17.21192,10.80322 -8.05664,5.67627 -14.09912,12.45114 -6.04248,6.7749 -9.52148,15.0147 -3.47901,8.2397 -3.47901,18.3105 l -32.226559,0 q 0,-17.5781 6.225585,-30.7617 6.225584,-13.18358 15.930174,-23.07128 9.8877,-9.88769 21.97266,-16.8457 12.26806,-7.14111 24.35303,-12.45117 l -52.18506,-46.32569 0,-4.76074 z'
      }]
    } as Svg;
    const svgNJ2 = {
      width: '26', height: '60', viewBox: '92 750 100 320', paths: [{
        style: styleText,
        d: 'm 173.87986,1041.4117 -80.383305,-113.34224 0.915528,-4.57764 55.114747,-42.66357 -66.467286,-94.29932 26.184086,-18.31055 80.74951,116.63819 -0.73242,4.21142 -56.7627,41.74805 68.29834,93.20066 -26.9165,17.395 z'
      }]
    } as Svg;
    const svgNJ3 = {
      width: '26', height: '60', viewBox: '100 750 100 320', transform: 'matrix(-1,0,0,1,298,0)', paths: [{
        style: styleText,
        d: 'm 107.76237,901.09912 52.18506,-45.41016 q -12.08497,-5.31005 -24.35303,-12.26806 -12.08496,-7.14111 -21.97266,-16.8457 -9.70459,-9.8877 -15.930174,-23.07129 -6.225585,-13.1836 -6.225585,-30.76172 l 32.226559,0 q 0,10.0708 3.47901,18.31054 3.479,8.05664 9.52148,15.01465 6.04248,6.77491 14.09912,12.45117 8.05664,5.67627 17.21192,10.80323 9.15527,4.94384 18.85986,9.70459 9.8877,4.76074 19.40918,9.52148 l 0,2.56348 -58.41065,52.73437 58.41065,52.91748 0,2.56348 q -9.52148,4.94385 -19.40918,9.70459 -9.70459,4.57764 -18.85986,9.70459 -9.15528,5.12695 -17.21192,10.80322 -8.05664,5.67627 -14.09912,12.45114 -6.04248,6.7749 -9.52148,15.0147 -3.47901,8.2397 -3.47901,18.3105 l -32.226559,0 q 0,-17.5781 6.225585,-30.7617 6.225584,-13.18358 15.930174,-23.07128 9.8877,-9.88769 21.97266,-16.8457 12.26806,-7.14111 24.35303,-12.45117 l -52.18506,-46.32569 0,-4.76074 z'
      }]
    } as Svg;
    const svgNJ4 = {
      width: '20', height: '60', viewBox: '96 850 10 200', paths: [{
        style: styleText,
        d: 'm 87.023277,881.19092 q 7.910157,5.85937 14.550783,11.23047 6.73828,5.37109 11.52344,11.23047 4.78515,5.76171 7.42187,12.40234 2.73438,6.54297 2.73438,14.74609 0,6.9336 -1.95313,12.69532 -1.95312,5.66406 -5.46875,10.74218 3.51563,5.07813 5.46875,10.83985 1.95313,5.66406 1.95313,12.59765 0,8.20313 -2.73438,14.7461 -2.63672,6.54297 -7.42187,12.40231 -4.78516,5.7617 -11.52344,11.1328 -6.640626,5.3711 -14.550783,11.2305 l -9.667968,-11.6211 q 8.496093,-6.25 13.964843,-11.4258 5.566407,-5.2734 8.789058,-9.86324 3.32032,-4.58985 4.58985,-8.59375 1.36719,-4.10157 1.36719,-8.10547 0,-5.17578 -2.2461,-10.35157 -3.71094,3.22266 -7.910154,6.44532 -4.199219,3.22265 -8.886719,6.64062 l -9.667968,-11.62109 q 5.566406,-4.10156 9.765625,-7.61719 4.199218,-3.61328 7.324218,-6.83594 -3.125,-3.32031 -7.324218,-6.83593 -4.199219,-3.61329 -9.765625,-7.71485 l 9.667968,-11.62109 q 4.589844,3.41797 8.789063,6.64062 4.29687,3.22266 8.00781,6.44532 2.2461,-5.17579 2.2461,-10.44922 0,-3.90625 -1.36719,-8.00782 -1.26953,-4.10156 -4.58985,-8.59375 -3.222651,-4.58984 -8.789058,-9.76562 -5.46875,-5.27344 -13.964843,-11.52344 z'
      }]
    } as Svg;

    const svgNN1 = {
      width: '24', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 95.283253,832.43622 18.229167,-18.22916 91.14583,91.14583 -91.14583,91.14583 -18.229167,-18.22917 72.916667,-72.91666 z'
      }]
    } as Svg;
    const svgNN2 = {
      width: '26', height: '60', viewBox: '98 750 100 320', paths: [{
        style: styleText,
        d: 'm 106.94577,769.92334 -16.875,30.23437 19.6875,9.14063 19.6875,13.35937 q 11.95313,9.14063 29.17969,35.15625 l -76.640627,58.35938 18.984377,30.23437 70.3125,-54.84375 q 2.46094,23.90625 1.05469,36.5625 -1.40625,12.65625 -4.21875,26.71875 -2.8125,14.0625 -9.31641,28.82813 -6.50391,14.76562 -16.17188,26.71876 -9.66796,11.9531 -21.97265,26.0156 h 44.29687 q 16.17188,-18.2812 23.20313,-31.289 7.03125,-13.00786 10.54687,-26.01567 3.51563,-13.00782 5.625,-26.36719 2.10938,-13.35938 2.98828,-26.19141 0.87891,-12.83203 0,-26.01562 -0.8789,-13.1836 -5.09765,-27.2461 -7.91016,-26.36718 -18.98438,-42.1875 -25.66406,-36.91406 -76.28906,-61.17187 z'
      }]
    } as Svg;
    const svgNN3 = {
      width: '20', height: '60', viewBox: '90 750 100 320', paths: [{
        style: styleText,
        d: 'm 146.27095,845.56519 -52.734375,52.73437 v 43.94531 L 146.27095,889.5105 v 133.2422 h 16.875 18.98438 V 776.65894 h -35.85938 l -52.734375,52.73437 v 43.94531 l 52.734375,-52.73437 z m 0,0 z m 0,43.94531 z'
      }]
    } as Svg;
    const svgNN4 = {
      width: '50', height: '60', viewBox: '102 750 100 320', paths: [{
        style: styleText,
        d: 'm 216.84764,802.65649 -64.33594,73.125 -66.621094,-71.54296 -56.777344,53.78906 19.335938,22.85156 32.695312,-31.64062 50.273438,54.66796 -73.828125,86.13282 24.609375,24.60939 70.3125,-82.61721 72.07031,82.61721 24.60938,-24.60939 -75.58594,-86.13282 48.16406,-56.25 32.69531,31.64063 19.33594,-22.85156 z m 0,0 z m -130.957034,1.58204 z'
      }]
    } as Svg;
    const svgNN5 = {
      width: '40', height: '60', viewBox: '100 750 100 320', paths: [{
        style: styleText,
        d: 'm 249.46294,902.81702 q 0.17578,14.9414 -3.86719,29.88281 -5.09765,19.16016 -20.5664,40.60547 -19.86328,27.5977 -76.64063,61.1719 -46.23047,-25.1367 -74.355467,-60.293 -12.480469,-15.64453 -19.6875,-33.75 -6.679688,-16.69921 -6.328125,-35.85937 0.351562,-15.46875 5.625,-34.80469 4.746093,-17.57812 18.457031,-37.26562 25.664062,-36.91407 76.289061,-61.17188 45.35156,21.6211 76.64063,61.17188 11.77734,14.76562 20.21484,40.78125 4.21875,13.35937 4.21875,29.53125 z m -83.67187,-82.08985 q 0,0 -0.52735,64.16016 h -35.15625 l -1.05469,-62.75391 q -46.582027,37.08985 -46.582027,83.14453 -0.175782,43.94532 43.417967,76.46485 l 22.32422,14.76562 23.02734,-14.76562 q 40.42969,-29.17969 44.1211,-77.8711 2.63672,-33.57421 -49.57031,-83.14453 z'
      }]
    } as Svg;
    const svgNN6 = {
      width: '26', height: '60', viewBox: '96 750 100 320', paths: [{
        style: styleText,
        d: 'm 158.42552,944.51331 -57.1289,57.48049 23.73046,25.3125 76.46485,-77.51956 5.27344,-4.92187 -85.78125,-87.01172 V 780.5094 H 85.827866 v 88.76953 z'
      }]
    } as Svg;
    //#endregion

    //#region Signs

    //#endregion

    let alphabet: Letter[] = [
      // {Value: ' ', Type: sp, Vectors: [svgSep]},
      // {Value: '.', Type: sp, Vectors: [svgSep]},

      {Value: 'a', Type: v, Vectors: [svgA1, svgA2]},
      {Value: 'e', Type: v, Vectors: [svgE]},
      {Value: 'ı', Type: v, Vectors: [svgI]},
      {Value: 'i', Type: v, Vectors: [svgI]},
      {Value: 'o', Type: v, Vectors: [svgO]},
      {Value: 'u', Type: v, Vectors: [svgO]},
      {Value: 'ö', Type: v, Vectors: [svgOE]},
      {Value: 'ü', Type: v, Vectors: [svgOE]},

      // Consonant
      {Value: 'b', Type: c, Vectors: [svgB1, svgB2, svgB3, svgB4, svgB5, svgB6, svgB7]},
      {Value: 'c', Type: c, Vectors: [svgC1, svgC2, svgC3]},
      {Value: 'd', Type: c, Vectors: [svgD1, svgD2, svgD3, svgD4, svgD5]},
      {Value: 'g', Type: c, Vectors: [svgG1, svgG2, svgG3, svgG4]},
      {Value: 'k', Type: c, Vectors: [svgK1, svgK2, svgK3, svgK4, svgK5]},
      {Value: 'l', Type: c, Vectors: [svgL1, svgL2, svgL3]},
      {Value: 'm', Type: c, Vectors: [svgM1, svgM2]},
      {Value: 'n', Type: c, Vectors: [svgN1, svgN2, svgN3, svgN4]},
      {Value: 'p', Type: c, Vectors: [svgP]},
      {Value: 'r', Type: c, Vectors: [svgR1, svgR2]},
      {Value: 's', Type: c, Vectors: [svgS1, svgS2, svgS3]},
      // {Value: 'ş', Type: c, Vectors: [svgSH]},
      {Value: 't', Type: c, Vectors: [svgT1, svgT2]},
      {Value: 'y', Type: c, Vectors: [svgY1, svgY2, svgY3]},
      {Value: 'z', Type: c, Vectors: [svgZ1, svgZ2, svgZ3]},

      // Syllable
      {Value: 'bd', Type: s, Vectors: [svgBS]},
      {Value: 'nd', Type: s, Vectors: [svgND]},
      {Value: 'ng', Type: s, Vectors: [svgNG1, svgNG2, svgNG3, svgNG4]},
      {Value: 'nj', Type: s, Vectors: [svgNJ1, svgNJ2, svgNJ3, svgNJ4]},
      {Value: 'n?', Type: s, Vectors: [svgNN1, svgNN2, svgNN3, svgNN4, svgNN5, svgNN6]},
    ];

    if (sort) {
      alphabet = alphabet.sort((a, b) => {
        if (a.Value < b.Value) {
          return -1;
        }
        if (a.Value > b.Value) {
          return 1;
        }
        return 0;
      });
    }

    return alphabet.filter(x => x.Vectors.length > 0);
  }
}
