import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {Svg} from "../../../Models";

@Component({
  selector: 'app-svg',
  imports: [],
  templateUrl: './svg.component.svg',
  styleUrl: './svg.component.scss',
})
export class SvgComponent {
  @Input() Svg!: Svg;

  constructor(private domSanitizer: DomSanitizer) {
  }


  SanitizeStyle(text: string): SafeStyle {
    return text ? this.domSanitizer.bypassSecurityTrustStyle(text) : '';
  }
}
