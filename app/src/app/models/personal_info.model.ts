import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class personal_info {
  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('surname', String, true)
  public surname: string = undefined;

  @JsonProperty('date_of_birth', Date, true)
  public date_of_birth: Date = undefined;

  @JsonProperty('date_of_joining', Date, true)
  public date_of_joining: Date = undefined;

  @JsonProperty('userKey', String, true)
  public userKey: string = undefined;

}