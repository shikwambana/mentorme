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
//CORE_REFERENCE_IMPORT-testComponent
import { testComponent } from '../components/testComponent/test.component';
//CORE_REFERENCE_IMPORT-inviteresolverService
import { inviteresolverService } from '../services/inviteresolver/inviteresolver.service';
//CORE_REFERENCE_IMPORT-lostuserComponent
import { lostuserComponent } from '../components/lostuserComponent/lostuser.component';
//CORE_REFERENCE_IMPORT-goalresolveService
import { goalresolveService } from '../services/goalresolve/goalresolve.service';
//CORE_REFERENCE_IMPORT-dataresolverService
import { dataresolverService } from '../services/dataResolver/dataresolver.service';
//CORE_REFERENCE_IMPORT-mentorService
import { mentorService } from '../services/mentor/mentor.service';
//CORE_REFERENCE_IMPORT-goalinfoComponent
import { goalinfoComponent } from '../components/goalinfoComponent/goalinfo.component';
//CORE_REFERENCE_IMPORT-addpersonalgoalComponent
import { addpersonalgoalComponent } from '../components/addpersonalgoalComponent/addpersonalgoal.component';
//CORE_REFERENCE_IMPORT-commonService
import { commonService } from '../services/common/common.service';
//CORE_REFERENCE_IMPORT-ArtImgSrcDirective
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
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
//CORE_REFERENCE_IMPORT-goalsService
import { goalsService } from '../services/goals/goals.service';
//CORE_REFERENCE_IMPORT-goalsComponent
import { goalsComponent } from '../components/goalsComponent/goals.component';
//CORE_REFERENCE_IMPORT-groupmessageComponent
import { groupmessageComponent } from '../components/groupmessageComponent/groupmessage.component';
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
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-testComponent
testComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-lostuserComponent
lostuserComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-goalinfoComponent
goalinfoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addpersonalgoalComponent
addpersonalgoalComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-ArtImgSrcDirective
ArtImgSrcDirective,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-userComponent
userComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-changepwdComponent
changepwdComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-registerComponent
registerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-goalsComponent
goalsComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-groupmessageComponent
groupmessageComponent,
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
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-inviteresolverService
inviteresolverService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-goalresolveService
goalresolveService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-dataresolverService
dataresolverService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-mentorService
mentorService,
//CORE_REFERENCE_PUSH_TO_PRO_ARRAY-commonService
commonService,
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
export const appRoutes = [{path: 'home', component: homeComponent, canActivate: [NAuthGuardService],
children: [{path: 'load', component: splashComponent},{path: 'feed', component: feedComponent},{path: 'log', component: logactivityComponent},{path: 'mentees', component: menteesComponent,
children: []},{path: 'mentee', component: menteeinfoComponent},{path: 'broadcast', component: groupmessageComponent},{path: '', component: goalsComponent, resolve: { person : dataresolverService }},{path: 'goal', component: goalinfoComponent},{path: 'invite', component: inviteComponent},{path: 'profile', component: profileComponent},{path: 'personalgoal', component: addpersonalgoalComponent}]},{path: 'login', component: loginComponent},{path: 'unauthorized', redirectTo: '/login', pathMatch: 'full'},{path: 'welcome', component: splashComponent},{path: 'invite', component: inviteComponent},{path: 'user', component: userComponent,
children: [{path: 'register', component: registerComponent},{path: 'changepwd', component: changepwdComponent}]},{path: 'test', component: testComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
