import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class mentees {
  @JsonProperty('full_name', String, true)
  public full_name: string = undefined;

  @JsonProperty('email_address', String, true)
  public email_address: string = undefined;

  @JsonProperty('start_date', Date, true)
  public start_date: Date = undefined;

  @JsonProperty('end_date', Date, true)
  public end_date: Date = undefined;

}