/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { goalsService } from '../../services/goals/goals.service';
import { Router, ActivatedRoute } from '@angular/router';
import { metadataService } from '../../services/metadata/metadata.service'
import { MatDialog } from '@angular/material';
import { goalresolveService } from '../../services/goalresolve/goalresolve.service'
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-goals',
    templateUrl: './goals.template.html'
})

export class goalsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;

    constructor(private bdms: NDataModelService,
        public goalsService: goalsService,
        private router: Router,
        private metadataService: metadataService,
        private dialog: MatDialog,
        private resolveGoal: goalresolveService,
        private activatedRoute: ActivatedRoute) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    noGoals = false;
    goals;

    ngOnInit() {
        this.goals = this.metadataService.getMetaData('goals')
        
        // if(!this.goals) {
        //     this.metadataService.getData().then((data) => {
        //         this.goals = data[0].goals;
        //         if(data[0].gaols >= 0){
        //             this.noGoals = true; 
        //         }else{
        //             this.noGoals = false; 
        //         }
        //         console.log(data)
        //       });
        // }
       
    }

    deleteGaol(goal) {
        console.log('got goal', goal);
        this.goalsService.deleteGoal(goal._id);
    }

    selectedGoal(goal) {
        // console.log(goal);
        this.goalsService.setGoal(goal);
        this.router.navigate['/goal'];
    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
