import { RouterModule, Routes } from '@angular/router'; 
import { CristianoComponent } from "./components/cristiano/cristiano.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { JamesComponent } from "./components/james/james.component";
import { JugadoresComponent } from "./components/jugadores/jugadores.component";
import { MessiComponent } from "./components/messi/messi.component";

const APP_ROUTES:Routes=[
    {path:'Cristiano', component:CristianoComponent},  
    {path:'Footer',component:FooterComponent},  
    {path:'Header',component:HeaderComponent},
    {path:'James',component:JamesComponent},
    {path:'Jugadores',component:JugadoresComponent},
    {path:'Messi',component:MessiComponent},
    {path:'**', pathMatch:'full', redirectTo:'Jugadores'}
   
   ];
   
   export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);






