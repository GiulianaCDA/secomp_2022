import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { InscricoesComponent } from './pages/inscricoes/inscricoes.component';
import { CongressoComponent } from './pages/congresso/congresso.component';
import { MaratonaComponent } from './pages/maratona/maratona.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'inscricao', component: InscricoesComponent },
  { path: 'congresso', component: CongressoComponent },
  { path: 'minicursos', component: HomeComponent },
  { path: 'campeonato', component: HomeComponent },
  { path: 'maratona', component: MaratonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
