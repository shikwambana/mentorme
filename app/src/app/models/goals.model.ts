import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { comments } from './comments.model';

@JsonObject
export class goals {
  @JsonProperty('author', String, true)
  public author: string = undefined;

  @JsonProperty('author_email', String, true)
  public author_email: string = undefined;

  @JsonProperty('title', String, true)
  public title: string = undefined;

  @JsonProperty('category', String, true)
  public category: string = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('start_date', Date, true)
  public start_date: Date = undefined;

  @JsonProperty('due_date', Date, true)
  public due_date: Date = undefined;

  @JsonProperty('comments', [comments], true)
  public comments: comments[] = [];

  @JsonProperty('status', String, true)
  public status: string = undefined;

  @JsonProperty('note', String, true)
  public note: string = undefined;

}