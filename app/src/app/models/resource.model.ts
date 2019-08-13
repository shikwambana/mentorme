import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class resource {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('department', String, true)
  public department: string = undefined;

  @JsonProperty('startDate', String, true)
  public startDate: string = undefined;

  @JsonProperty('endDate', String, true)
  public endDate: string = undefined;

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('projectName', String, true)
  public projectName: string = undefined;

  @JsonProperty('skills', String, true)
  public skills: string = undefined;

  @JsonProperty('designation', String, true)
  public designation: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

}