import { ArtistaComponent } from './components/artista/artista.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { SearchComponent } from './components/search/search.component';



const APP_ROUTES: Routes = [
    {path :'home', component: HomeComponent},
    {path :'search', component: SearchComponent},
    {path :'artist/:id', component: ArtistaComponent },
    {path : '' , pathMatch: 'full', redirectTo: 'home'},
    {path : '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });

