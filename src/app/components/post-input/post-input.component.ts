import { Component, HostListener, OnDestroy, EventEmitter, Output } from '@angular/core'
import { MarkdownService } from '@services/markdown/markdown.service'
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { NotificationService } from '@services/notification/notification.service'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'kgp-post-input',
  templateUrl: './post-input.component.html',
  styleUrls: ['./post-input.component.sass']
})
export class PostInputComponent implements OnDestroy {

  markdown: string
  textAreaData: string
  dragEvent: boolean
  toggleView: boolean
  uploading = false
  uploadPercent: number

  @Output() data: EventEmitter<string> = new EventEmitter()

  private task: AngularFireUploadTask
  private uploadPercentSub: Subscription

  constructor(
    private markdownService: MarkdownService,
    private angularFireStorage: AngularFireStorage,
    private notificationService: NotificationService
  ) {
     this.markdown = ''
     this.textAreaData = ''
     this.toggleView = false
   }

  @HostListener('dragover', ['$event'])
    onDragOver($event) {
      $event.preventDefault()
      if (this.toggleView === true) { return }
      this.dragEvent = true
    }

  @HostListener('dragleave', ['$event'])
    onDragLeave($event) {
      $event.preventDefault()
      this.dragEvent = false
    }

  @HostListener('drop', ['$event'])
    onDrop($event) {
      $event.preventDefault()
      this.dragEvent = false
      if (this.toggleView === true) { return }
      const transfer = $event.dataTransfer
      this.getFiles(transfer.files)
    }

  async getFiles(filelist: FileList) {
    const filesIndex = filelist.length

    for (let i = 0; i < filesIndex; i++) {
      const element = filelist[i]
      if (element.type !== 'image/png' && element.type !== 'image/jpeg') {
        return this.notificationService.notifitem(`${element.name} is not an image`, `Please use jpg or png image`, true)
      }

      await this.imageUpload(element)
    }
  }

  textAreaChange() {
    this.markdown = this.markdownService.convert(this.textAreaData)
    return this.data.emit(this.markdown)
  }

  imageUpload(fileitem: File) {
    this.uploading = true
    const timestamp = new Date()
    const metadata = { contentType: fileitem.type }
    const filePath = `/projects/markdown/${timestamp.toISOString()}/${fileitem.name}/`
    this.task = this.angularFireStorage.upload(filePath, fileitem, metadata)
    const uploadPercent = this.task.percentageChanges()

    this.uploadPercentSub = this.task.percentageChanges()
      .subscribe(data => this.uploadPercent = data)

    return this.task.then().then((a: AngularFireUploadTask) => {
      this.textAreaData = this.textAreaData.concat(`![${fileitem.name}](${a.downloadURL} "${fileitem.name}")<br>`)
    }).then(() => this.textAreaChange())
      .then(() => this.uploading = false)
  }

  ngOnDestroy() {
    if (!this.uploadPercentSub) { return }
    this.uploadPercentSub.unsubscribe()
  }

}
