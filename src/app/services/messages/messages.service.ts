import { Injectable } from '@angular/core'
import { Email } from '@interface/email'
import { Observable } from 'rxjs/Observable'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'

@Injectable()
export class MessagesService {

  private openM: AngularFirestoreCollection<Email>
  private messageCollection: AngularFirestoreCollection<Email>
  private message: Observable<Email[]>
  private item = { open: true }

  private doc: AngularFirestoreDocument<Email>
  messageOb: Observable<Email>

  constructor(
    private _afs: AngularFirestore
  ) { }

  loadMessage() {
    this.messageCollection = this._afs.collection<Email>('emails', ref => ref.orderBy('timestamp.timestamp'))
    return this.message = this.messageCollection.valueChanges()
  }

  openMessage(id: string) {
    this.doc = this._afs.doc<Email>('emails/' + id)
    return this.messageOb = this.doc.valueChanges()
  }

  deleteMessage(id) {
    return this.openM.doc(id).delete()
  }

}
