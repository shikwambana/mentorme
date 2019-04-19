/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { goalsService } from '../../services/goals/goals.service'
@Injectable()
export class goalresolveService implements Resolve<any>{

    constructor(private goalsService : goalsService){

    }
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot) {
        // throw new Error("Method not implemented.");
        return this.goalsService.getGoals();
    }

    

}
