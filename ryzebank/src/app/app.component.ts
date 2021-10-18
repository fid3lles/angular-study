import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ryzebank';

  constructor(private service: TransferenciaService) {}

  transferir($event: any) {
    this.service.adicionar($event);
  }
}
