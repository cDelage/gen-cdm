import { Model } from "./Model.type"

export type Project = {
    _id?: string,
    name?: string,
    prompt : string,
    model? : Model
}

export type CreateProjectPayload = {
    prompt: string;
    token: string;
}