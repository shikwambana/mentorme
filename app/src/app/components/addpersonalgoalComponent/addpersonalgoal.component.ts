/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { goals } from '../../models/goals.model';
import { metadataService } from '../../services/metadata/metadata.service';
import { goalsService } from '../../services/goals/goals.service';
import { Router } from '@angular/router';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-addpersonalgoal',
    templateUrl: './addpersonalgoal.template.html'
})

export class addpersonalgoalComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    goal;
    categories: { 'name': string; }[];
    person: any;
    mentees;
    hidden: boolean = true;
    checked: boolean = false;
    email: any;
    constructor(private bdms: NDataModelService,
        private metadataService: metadataService,
        private router: Router,
        private goalsService: goalsService) {
        super();
        this.mm = new ModelMethods(bdms);
        this.goal = new goals();

    }

    ngOnInit() {
        this.categories = this.metadataService.getCategory();
        this.person = this.metadataService.getPerson();
        this.mentees = this.person.mentoring.mentees;
    }

    changed() {
        this.hidden = !this.hidden;
        console.log(this.hidden)
    }

    setPerson(person) {
        console.log(person,this.goal.author)
    }

    addGoal() {
        //get entire person object
        //add outstanding info
        this.goal.author = this.person.personal_info.name + " " + this.person.personal_info.surname;
        this.goal.author_email = this.person.contact_details.email_address;
        this.goal.status = "In Progress";
        // this.person.goals.push(this.goal);
        console.log(this.goal);
        // this.goalsService.addGoal(this.goal);
        if (this.hidden) {
            this.email = this.person.contact_details.email_address;
        } else {
            // this.email = 
        }

        //add goal to person document
        this.update('person', { $push: { 'goals': this.goal } }, { 'contact_details.email_address': this.email }, {});
        // this.router.navigate(['../']);
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
                console.log(result);
                this.router.navigate(['../']);
            }, error => {
                // Handle errors here
                console.log(error)
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
