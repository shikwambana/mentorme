/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class metadataService {
    categories = [
        {'name' : 'Spiritual'}, 
        { 'name' : 'Mental'}, 
        { 'name' : 'Physical'}, 
        { 'name' : 'Psychologial'}, 
        { 'name' : 'Emotional'} 
    ];

    category() {
        return this.categories;
    }
}
