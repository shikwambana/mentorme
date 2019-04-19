/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class goalsService {

    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;
    token;

    constructor(private http: HttpClient, private session : NSessionStorageService){
        this.appProperties = this.systemService.getVal('properties');
        this.bModellerURL = this.appProperties.modellerUrl + '/deleteGoal';
     
    }

    selectedGoal;

    goals: Array<object>;
    
    deleteGoal(id){

        console.log('got ID', id)

        this.http.post(this.bModellerURL, id ).subscribe(result => {
                console.log(result);},
                
                 error => {
                 console.log('failed to delete', error)
             });

    }

    setSessionGoals(goals){
        this.goals = goals;
    }

    getGoals(){
        return this.goals;
    }

    setGoal(goal){
        this.selectedGoal = goal;
    }

    getSelectedGoal(){
        return this.selectedGoal;
    }
}
