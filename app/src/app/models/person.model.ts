import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { personal_info } from './personal_info.model';
import { contact_details } from './contact_details.model';
import { mentoring } from './mentoring.model';
import { goals } from './goals.model';
import { activity_log } from './activity_log.model';

@JsonObject
export class person {
  @JsonProperty('personal_info', personal_info, true)
  public personal_info: personal_info = new personal_info();

  @JsonProperty('contact_details', contact_details, true)
  public contact_details: contact_details = new contact_details();

  @JsonProperty('mentoring', mentoring, true)
  public mentoring: mentoring = new mentoring();

  @JsonProperty('goals', [goals], true)
  public goals: goals[] = [];

  @JsonProperty('activity_log', [activity_log], true)
  public activity_log: activity_log[] = [];

}