import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class comments {
  @JsonProperty('sender', String, true)
  public sender: string = undefined;

  @JsonProperty('email_address', String, true)
  public email_address: string = undefined;

  @JsonProperty('comment', String, true)
  public comment: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('time', String, true)
  public time: string = undefined;

}