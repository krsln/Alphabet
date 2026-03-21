export interface Alphabet {
  Name: string;
  Letters: Letter[];
  RTL: boolean;
}

export interface Letter {
  Type: LetterType;
  Value: string;
  Vectors: Svg [];
}

export enum LetterType {
  Vowel, // Sesli harf
  Consonants, // Sessiz harf
  Syllable, // Hece
  Separator// Bosluk
}

export interface Svg {
  viewBox: string;
  width: string;
  height: string;
  transform: string;
  paths: Path[];
}

export interface Path {
  d: string;
  style: string;
}
