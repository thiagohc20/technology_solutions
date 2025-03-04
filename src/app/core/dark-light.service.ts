import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class DarkLightService {
  private stateSubject = new BehaviorSubject<boolean>(false);

  state$ = this.stateSubject.asObservable();

  constructor() {}

  changeState(newState: boolean): void {
    this.stateSubject.next(newState);
  }

  getCurrentState(): boolean {
    return this.stateSubject.value;
  }
}
