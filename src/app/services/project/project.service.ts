import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Project } from '@interface/Project'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, } from 'angularfire2/firestore'

@Injectable()
export class ProjectService {

  private projectCollectionHome: AngularFirestoreCollection<Project>
  private projectCollection: AngularFirestoreCollection<Project>
  projects: Observable<Project[]>
  private doc: AngularFirestoreDocument<Project>
  private projectOb: Observable<Project>

  constructor(
    private _afs: AngularFirestore
  ) {
    this.projectCollectionHome = this._afs
      .collection<Project>('projects', ref => ref
        .orderBy('timestamp.timestamp', 'desc')
        .limit(4))
    this.projects = this.projectCollectionHome.valueChanges()
  }

  public loadListOfProjects() {
    this.projectCollection = this._afs
      .collection<Project>('projects', ref => ref.orderBy('timestamp.timestamp'))
    return this.projects = this.projectCollection.valueChanges()
  }

  public addProject(id: string, data: Project) {
    return this._afs
      .collection<Project>('projects')
      .doc(id)
      .set(data)
  }

  public getProjectById(id: string) {
    this.doc = this._afs.doc<Project>('projects/' + id)
    return this.projectOb = this.doc.valueChanges()
  }

}
