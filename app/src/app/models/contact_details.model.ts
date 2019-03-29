import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class contact_details {
  @JsonProperty('email_address', String, true)
  public email_address: string = undefined;

  @JsonProperty('phone_number', String, true)
  public phone_number: string = undefined;

  @JsonProperty('home_address', String, true)
  public home_address: string = undefined;

}