import {Injectable} from '@angular/core';

import {Database} from '../../Models/Database';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  Aurebesh = () => Database.GetAlphabet('Aurebesh');
  Futhark = () => Database.GetAlphabet('Futhark');
  Orkhon = () => Database.GetAlphabet('Orkhon');
  Yenisei = () => Database.GetAlphabet('Yenisei');
}
