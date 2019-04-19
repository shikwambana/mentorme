import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class activity_log {
  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('location', String, true)
  public location: string = undefined;

  @JsonProperty('mood', String, true)
  public mood: string = undefined;

  @JsonProperty('notes', String, true)
  public notes: string = undefined;

  @JsonProperty('mentor_name', String, true)
  public mentor_name: string = undefined;

  @JsonProperty('mentee_name', String, true)
  public mentee_name: string = undefined;

  @JsonProperty('reason', String, true)
  public reason: string = undefined;

}