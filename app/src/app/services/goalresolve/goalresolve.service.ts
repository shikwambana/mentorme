/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { goalsService } from '../../services/goals/goals.service'
@Injectable()
export class goalresolveService implements Resolve<any>{

    constructor(private goalsService : goalsService,private route : ActivatedRoute){

    }
    resolve(route: ActivatedRouteSnapshot) {
        // throw new Error("Method not implemented.");
        // let goals = 
        console.log('goal resolver')
        return this.goalsService.getGoals();
    }

    

}
