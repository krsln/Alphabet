import {Component, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {Letter, LetterType, Svg} from "../../../Models";
import {Helper} from "../../Helper";
import {SvgComponent} from '../svg/svg.component';

@Component({
  selector: 'app-alphabet',
  imports: [
    SvgComponent
  ],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AlphabetComponent implements OnInit, OnChanges {
  @Input() Letters!: Letter[];
  @Input() IsTextRight: boolean = false;

  LetterType = LetterType;

  Text: { Svg: Svg, Letter: string }[] = [];
  Sentence: SafeHtml | undefined;
  SentenceReadable: string = '';

  Deciphered: { Original: string; Reverse: string; } | undefined;

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.onClear();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const letter = event.key.toLowerCase();
    const resLetter = this.Letters?.find(x => x.Value === letter);
    if (resLetter) {
      this.onClick(resLetter);
      // console.log(letter);
    }
  }

  onClick(letter: Letter) {
    if (letter) {
      const randomIndex = Math.floor((Math.random() * letter.Vectors.length));
      this.Text.push({Svg: letter.Vectors[randomIndex], Letter: letter.Value});
      if (this.IsTextRight) {
        this.Text.reverse();
      }
      this.Sentence = this.domSanitizer.bypassSecurityTrustHtml(this.Text.filter(x => x).map(x => Helper.SvgToString(x.Svg)).join(''));
      this.SentenceReadable = this.Text.filter(x => x).map(x => x.Letter).join('');
      if (this.IsTextRight) {
        this.Text.reverse();
      }
    }
  }

  onClear() {
    this.Text = [];
    this.Sentence = '';
    this.SentenceReadable = '';
    if (this.Deciphered) {
      this.Deciphered.Original = '';
      this.Deciphered.Reverse = '';
    }
  }

  onDecipher() {
    if (this.Sentence) {
      this.Deciphered = Helper.Decipher(this.Letters, this.Sentence.toString());
    }
  }
}

