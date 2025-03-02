import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class SystemMenuService {
  // Inicializando a variável com o valor `true`
  private stateSubject = new BehaviorSubject<boolean>(false);

  // Observável para ser utilizado em outros componentes
  state$ = this.stateSubject.asObservable();

  constructor() {}

  // Método para alterar o estado da variável
  changeState(newState: boolean): void {
    this.stateSubject.next(newState);
  }

  // Método para verificar o valor atual da variável
  getCurrentState(): boolean {
    return this.stateSubject.value;
  }
}
