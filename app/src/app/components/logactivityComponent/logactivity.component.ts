/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { metadataService } from '../../services/metadata/metadata.service';
import { activity_log } from '../../models/activity_log.model';
/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-logactivity',
    templateUrl: './logactivity.template.html'
})

export class logactivityComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    person: any;
    log = new activity_log();

    constructor(private bdms: NDataModelService, private metadataService : metadataService) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    metadata;
    mentees;

    ngOnInit() {
       this.metadata = this.metadataService.getCategory();
       this.person = this.metadataService.getPerson();
        this.mentees = this.person.mentoring.mentees; 
        console.log(this.mentees);
        this.log.date = new Date();
    }

    logActivity(){

        this.log.mentor_name = this.person.personal_info.name + ' ' + this.person.personal_info.surname;
        this.log.mentor_email = this.person.contact_details.email_address;

        console.log('still works',this.log)

        this.update('person',{ $push: {'activity_log' : this.log }}, { 'contact_details.email_address' :  this.log.mentee_email},{});
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
                console.table(result);
            }, error => {
                // Handle errors here
                console.table(error)
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
