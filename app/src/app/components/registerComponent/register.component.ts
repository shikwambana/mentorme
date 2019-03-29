/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { person } from '../../models/person.model';
import { registerService } from '../../services/register/register.service';


@Component({
    selector: 'bh-register',
    templateUrl: './register.template.html'
})

export class registerComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    date = new Date();
    person = new person();
    possibleMentees = [];
    mentor;
    
    constructor(private bdms: NDataModelService, private registerService : registerService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.get('invites');
    }

    register(){
        // console.log(this.person.mentoring.mentors);
        // this.put('person',this.person);

        this.checkMentor(this.person.contact_details.email_address);

        console.log(this.person);
        
    }

    checkMentor(user){

        this.mentor = this.possibleMentees.find(val=>val.email_address == user);
        delete this.mentor._id;
        console.log(this.mentor);

        this.person.mentoring.mentors.push(this.mentor);
        
    }
    
    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.possibleMentees = result;
                // console.log(this.possibleMentees);
            },
            error => {
                // Handle errors here
                console.log(error);
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
                this.registerService.register(this.person);

            }, error => {
                // Handle errors here
                console.log(error);
                
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

    delete (dataModelName, filter) {
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
