import { Injectable } from '@angular/core'
import { AngularFireStorage } from 'angularfire2/storage'

@Injectable()
export class ImageService {

  constructor(
    private _afsage: AngularFireStorage
  ) { }

  FileInput(event: EventTarget) {
    return new Promise((resolve, reject) => {
      const eventObj: MSInputMethodContext = <MSInputMethodContext>event
      const target: HTMLInputElement = <HTMLInputElement>eventObj.target
      const files: FileList = target.files
      resolve(files)
    })
  }

  ShowImageInHTML(value: FileList, id: string) {
    if (value && value[0]) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(value[0])
        const img = reader.onload = function (e: any) {
          const image = document.getElementById(id)
          image.setAttribute('src', e.target.result)
          image.setAttribute('class', 'upimage upthumb')
          image.setAttribute('alt', value[0].name)
        }
        resolve(img)
      })
    }
  }

  ImageToBase64Small(img) {
    return new Promise((resolve, reject) => {
      const imgWidth = img.width * 0.01
      const imgHeight = img.height * 0.01

      const canvas = document.createElement('canvas')
      canvas.width = imgWidth
      canvas.height = imgHeight

      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
      const ImageBase64 = canvas.toDataURL('image/png')

      resolve(ImageBase64)
    })
  }

  imageUpload(fileitem: FileList, title: string, type: string) {
    const file = fileitem[0]
    const metadata = { contentType: file.type }
    const filePath = `/projects/${title}/${type}/${file.name}/`
    const task = this._afsage.upload(filePath, file, metadata)

    const uploadPercent = task.percentageChanges()
  }

}
