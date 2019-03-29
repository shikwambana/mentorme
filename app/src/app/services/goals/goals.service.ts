/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class goalsService {

    selectedGoal;

    goals = [
        {
            'title' : 'Get 5 mentors',
            'category' : 'social',
            'date' : '22 March 2019',
            'content' : 'Added three new mentors',
            'status' : 'In Progress'
        },
         {
            'title' : 'Do devotion every morning',
            'category' : 'spiritual',
            'date' : '15 March 2019',
            'content' : 'Did devotion 5 days in a row',
            'status' : 'In Progress'
        },
         {
            'title' : 'Do devotion every night',
            'category' : 'spiritual',
            'date' : '13 March 2019',
            'content' : 'Did devotion 5 days in a row',
            'status' : 'Have not started'
        },
         {
            'title' : 'Bring 10 people to church',
            'category' : 'emotional',
            'date' : '10 March 2019',
            'content' : 'Brought 4 people to church',
            'status' : 'In Progress'
        },
         {
            'title' : 'Study consistently',
            'category' : 'mental',
            'date' : '5 March 2019',
            'content' : 'Passed all his modules during engineering week',
            'status' : 'Achieved'
        }
        
    ]
    

    getGoals(){
        return this.goals;
    }

    setGoal(goal){
        console.log(goal);
        this.selectedGoal = goal;
    }

    getSelectedGoal(){
        return this.selectedGoal;
    }
}
