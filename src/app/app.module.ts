import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './components/pensamentos/listar-pensamentos/listar-pensamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentoComponent,
    ListarPensamentosComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
