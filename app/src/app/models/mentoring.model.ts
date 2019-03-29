import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { mentors } from './mentors.model';
import { mentees } from './mentees.model';
import { potential } from './potential.model';

@JsonObject
export class mentoring {
  @JsonProperty('mentors', [mentors], true)
  public mentors: mentors[] = [];

  @JsonProperty('mentees', [mentees], true)
  public mentees: mentees[] = [];

  @JsonProperty('mentor', Boolean, true)
  public mentor: boolean = undefined;

  @JsonProperty('potential', [potential], true)
  public potential: potential[] = [];

}