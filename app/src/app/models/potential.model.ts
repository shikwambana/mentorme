import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class potential {
  @JsonProperty('full_name', String, true)
  public full_name: string = undefined;

  @JsonProperty('email_address', String, true)
  public email_address: string = undefined;

  @JsonProperty('code', String, true)
  public code: string = undefined;

}