import { Action } from '@ngrx/store'
import { Project } from '@models/project.model'
import * as ProjectActions from '@actions/project.action'


export function ProjectReducer(state: Project[] = [], action: ProjectActions.Actions) {
    switch (action.type) {
        case ProjectActions.ADD_PROJECT:
            return [...state, action.payload]
        default:
            return state
    }
}
