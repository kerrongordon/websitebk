import { Component, Input, ViewChild, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core'
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { Subscription } from 'rxjs/Subscription'
import { Imagen } from '../../interface/Project'
import { ImageService } from '../../services/image/image.service'


@Component({
  selector: 'kgp-upload-image-button',
  templateUrl: './upload-image-button.component.html',
  styleUrls: ['./upload-image-button.component.sass'],
  providers: [ImageService]
})
export class UploadImageButtonComponent implements OnDestroy {

  private file: File
  private task: AngularFireUploadTask
  private uploadPercentSub: Subscription

  pauseUp = false
  uploading = false
  uploadPercent: number

  @Input() type: string
  @Input() postTitle: string
  @ViewChild('imageSrc') imageSrc: ElementRef
  @Output() downloadURLOut = new EventEmitter
  // @Output() addFile = new EventEmitter

  constructor(
    private _afsage: AngularFireStorage,
    private _imgs: ImageService
  ) {
    this.type = this.type
  }

  addfile(e) {
    if (!e) { return }
    const srcType = this.type + 'imageSrc'
    return this._imgs.FileInput(e).then( (data: FileList) => {
      this.file = data[0]
      this._imgs.ShowImageInHTML(data, srcType)
    })
  }

  onload(e) {
    const imageId = this.imageSrc.nativeElement
    return this._imgs.ImageToBase64Small(imageId)
      .then((img) => this.uploadFile(img))
  }

  uploadFile(base64) {
    this.uploading = true
    const metadata = { contentType: this.file.type }
    const filePath = `/projects/${this.postTitle}/${this.type}/${this.file.name}/`
    this.task = this._afsage.upload(filePath, this.file, metadata)

    this.uploadPercentSub = this.task.percentageChanges()
      .subscribe(data => {
        this.uploadPercent = data
        if (data === 100) { this.uploading = false }
      })

    return this.task.then().then(a => {
      const image: Imagen = {
        base64: base64,
        name: this.file.name,
        size: this.file.size,
        type: this.file.type,
        url: a.downloadURL
      }
      this.downloadURLOut.emit(image)
    })

  }

  resumeUpload() {
    this.task.resume()
    return this.pauseUp = false
  }

  pauseUpload() {
    this.task.pause()
    return this.pauseUp = true
  }

  cancelUpload() {
    return this.task.cancel()
  }

  ngOnDestroy() {
    if (!this.uploadPercentSub) { return }
    this.uploadPercentSub.unsubscribe()
  }

}
