import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Project } from '@interface/Project'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from 'angularfire2/firestore'

@Injectable()
export class ProjectService {
  projectCollection: Observable<Project[]>
  projectCollectionHome: Observable<Project[]>

  private doc: AngularFirestoreDocument<Project>
  projectOb: Observable<Project>

  constructor(
    private _afs: AngularFirestore
  ) { }

  loadProjectsHome() {
    return this.projectCollectionHome = this._afs
      .collection<Project>('projects', ref => ref
      .orderBy('timestamp.timestamp', 'desc')
      .limit(4))
      .valueChanges()
  }

  loadListOfProjects() {
    return this.projectCollection = this._afs
      .collection<Project>('projects', ref => ref
      .orderBy('timestamp.timestamp', 'desc'))
      .valueChanges()
  }

  addProject(id: string, data: Project) {
    return this._afs
      .collection<Project>('projects')
      .doc(id)
      .set(data)
  }

  getProjectById(id: string) {
    this.doc = this._afs.doc<Project>('projects/' + id)
    return this.projectOb = this.doc.valueChanges()
  }

}
