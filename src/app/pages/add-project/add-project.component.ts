import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProjectService } from '@services/project/project.service'
import { TimestampService } from '@services/timestamp/timestamp.service'
import { MarkdownService } from '@services/markdown/markdown.service'
import { Project, Imagen } from '@interface/Project'

@Component({
  selector: 'kgp-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.sass'],
  providers: [ProjectService, TimestampService, MarkdownService]
})
export class AddProjectComponent implements OnInit {

  bigImage: Imagen
  smaillImage: Imagen

  AddProjectForm: FormGroup
  markdown: string

  htmlView = false

  postTitle: string
  postTitleBind = ''
  toggleImageView = false

  constructor(
    public _ProjectService: ProjectService,
    private _TimestampService: TimestampService,
    private _MarkdownService: MarkdownService
  ) { }

  ngOnInit() {
    this.forminit()
  }

  private forminit() {
    return this.AddProjectForm = new FormGroup({
      projectTitle: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(3)]),
        updateOn: 'change',
      }),
      projectWebUrl: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
      projectGitUrl: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
      projectMarkdown: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.minLength(5)]),
        updateOn: 'change'
      }),
    })
  }

  formUpdate() {
    const { projectTitle } = this.AddProjectForm.value
    if (projectTitle !== '') {
      return this.toggleImageView = true
    } else {
      return this.toggleImageView = false
    }
  }

  locktitle() {

  }

  toggleView() {
    return this.htmlView = !this.htmlView
  }

  geturlSmaill(e: Imagen): Promise<Imagen>  {
    return new Promise( (resolve, reject) => {
      this.smaillImage = e
      resolve(this.smaillImage)
    })
  }

  geturlBig(e: Imagen): Promise<Imagen> {
    return new Promise( (resolve, reject) => {
      this.bigImage = e
      resolve(this.bigImage)
    })
  }

  resetEmailForm() {
    this.markdown = ''
    this.AddProjectForm.reset()
  }

  textToMarkDown(text) {
    return this.markdown = this._MarkdownService.convert(text)
  }

  onSubmit() {
    console.log('this.AddProjectForm.valid', this.AddProjectForm.valid)
    if (!this.AddProjectForm.valid) { return }

    const { projectTitle, projectMarkdown, projectWebUrl, projectGitUrl } = this.AddProjectForm.value
    const getId = this._TimestampService.getTheId()

    console.log('send')

    Promise.all([
      this.smaillImage,
      this.bigImage
    ]).then(e => {

      const projectPush: Project = {
        id: getId,
        title: projectTitle,
        content: projectMarkdown,
        markdown: this.markdown,
        weburl: projectWebUrl,
        giturl: projectGitUrl,
        image: {
          small: this.smaillImage,
          big: this.bigImage
        },
        timestamp: {
          timestamp: this._TimestampService.getTimestamp(),
          month: this._TimestampService.getTheMonth(),
          weekday: this._TimestampService.getTheWeekday(),
          year: this._TimestampService.getTheYear(),
          date: this._TimestampService.getTheDateNum(),
          time: this._TimestampService.getTheTime()
        },
      }

      this._ProjectService.addProject(getId, projectPush)
      console.log(projectPush)
    }).then(e => {
      this.resetEmailForm()
    })
    .catch(error => {
      console.log('error ', error)
    })

  }

}
