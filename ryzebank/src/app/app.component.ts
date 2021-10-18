import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ryzebank';
  transferencias: any[] = [];

  transferir($event: any) {
    console.log($event);
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
  }
}
