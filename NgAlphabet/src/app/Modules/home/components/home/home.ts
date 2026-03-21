import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from 'express';

import {Alphabet} from '../../../../Models';
import {AlphabetService} from '../../../../Shared/services/alphabet.service';
import {AlphabetComponent} from '../../../../Shared/components/alphabet/alphabet.component';

@Component({
  selector: 'app-home',
  imports: [
     AlphabetComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  Alphabet: Alphabet | undefined = undefined;

  constructor(private route: ActivatedRoute, private alphabetService: AlphabetService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const Name = params.get('Name');
      switch (Name) {
        case 'Aurebesh':
          this.Alphabet = this.alphabetService.Aurebesh();
          break;
        case 'Futhark':
          this.Alphabet = this.alphabetService.Futhark();
          break;
        case 'Orkhon':
          this.Alphabet = this.alphabetService.Orkhon();
          break;
        case 'Yenisei':
          this.Alphabet = this.alphabetService.Yenisei();
          break;
      }
    });
  }
}
