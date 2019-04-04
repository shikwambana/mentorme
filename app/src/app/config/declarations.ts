import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NAuthGuardService } from 'neutrinos-seed-services';
window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-tokenService
import { tokenService } from '../services/token/token.service';
//CORE_REFERENCE_IMPORT-userComponent
import { userComponent } from '../components/userComponent/user.component';
//CORE_REFERENCE_IMPORT-resetpasswordService
import { resetpasswordService } from '../services/resetpassword/resetpassword.service';
//CORE_REFERENCE_IMPORT-changepwdComponent
import { changepwdComponent } from '../components/changepwdComponent/changepwd.component';
//CORE_REFERENCE_IMPORT-inviteService
import { inviteService } from '../services/invite/invite.service';
//CORE_REFERENCE_IMPORT-registerService
import { registerService } from '../services/register/register.service';
//CORE_REFERENCE_IMPORT-registerComponent
import { registerComponent } from '../components/registerComponent/register.component';
//CORE_REFERENCE_IMPORT-goalComponent
import { goalComponent } from '../components/goalComponent/goal.component';
//CORE_REFERENCE_IMPORT-goalsService
import { goalsService } from '../services/goals/goals.service';
//CORE_REFERENCE_IMPORT-goalsComponent
import { goalsComponent } from '../components/goalsComponent/goals.component';
//CORE_REFERENCE_IMPORT-groupmessageComponent
import { groupmessageComponent } from '../components/groupmessageComponent/groupmessage.component';
//CORE_REFERENCE_IMPORT-addgoalComponent
import { addgoalComponent } from '../components/addgoalComponent/addgoal.component';
//CORE_REFERENCE_IMPORT-inviteComponent
import { inviteComponent } from '../components/inviteComponent/invite.component';
//CORE_REFERENCE_IMPORT-profileComponent
import { profileComponent } from '../components/profileComponent/profile.component';
//CORE_REFERENCE_IMPORT-menteeinfoComponent
import { menteeinfoComponent } from '../components/menteeinfoComponent/menteeinfo.component';
//CORE_REFERENCE_IMPORT-menteesComponent
import { menteesComponent } from '../components/menteesComponent/mentees.component';
//CORE_REFERENCE_IMPORT-metadataService
import { metadataService } from '../services/metadata/metadata.service';
//CORE_REFERENCE_IMPORT-logactivityComponent
import { logactivityComponent } from '../components/logactivityComponent/logactivity.component';
//CORE_REFERENCE_IMPORT-feedComponent
import { feedComponent } from '../components/feedComponent/feed.component';
//CORE_REFERENCE_IMPORT-splashComponent
import { splashComponent } from '../components/splashComponent/splash.component';
//CORE_REFERENCE_IMPORT-loaderComponent
import { loaderComponent } from '../components/loaderComponent/loader.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/

export const appEntryComponents: any = [
  loaderComponent
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userComponent
userComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-changepwdComponent
changepwdComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
registerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-goalComponent
goalComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-goalsComponent
goalsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-groupmessageComponent
groupmessageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addgoalComponent
addgoalComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-inviteComponent
inviteComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-profileComponent
profileComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-menteeinfoComponent
menteeinfoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-menteesComponent
menteesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-logactivityComponent
logactivityComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-feedComponent
feedComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-splashComponent
splashComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loaderComponent
loaderComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-tokenService
tokenService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-resetpasswordService
resetpasswordService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-inviteService
inviteService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-registerService
registerService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-goalsService
goalsService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-metadataService
metadataService,

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent,
children: [{path: 'load', component: splashComponent},{path: 'feed', component: feedComponent},{path: 'log', component: logactivityComponent},{path: 'mentees', component: menteesComponent,
children: []},{path: 'mentee', component: menteeinfoComponent},{path: 'addgoal', component: addgoalComponent},{path: 'broadcast', component: groupmessageComponent},{path: '', component: goalsComponent},{path: 'goal', component: goalComponent},{path: 'invite', component: inviteComponent},{path: 'profile', component: profileComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full', canActivate: [NAuthGuardService]},{path: 'welcome', component: splashComponent},{path: 'invite', component: inviteComponent},{path: 'register', component: registerComponent},{path: 'resetpassword', component: changepwdComponent},{path: 'user', component: userComponent,
children: [{path: 'register', component: registerComponent},{path: 'changepwd', component: changepwdComponent}]},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
