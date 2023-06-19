import { MenuController } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs/internal/Observable';


//crear una interface para definir propiedades que el componente lista va a tener

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  }

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
//crear nuevo listado
//componentes: any[] = [];

componentes!: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  mostrarMenu() {
    this.menuCtrl.open('first');
  }
}