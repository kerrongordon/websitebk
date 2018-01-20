import { Injectable } from '@angular/core'
import { Meta, Title } from '@angular/platform-browser'

@Injectable()
export class SeoService {

  constructor(
    private meta: Meta,
    private ptitle: Title
  ) { }

  generateTags(config) {
    // default values
    config = {
      title: 'Kerron Gordon',
      description: 'Kerron specializes in making exceptional websites',
      image: 'https://kerron-gordon.firebaseapp.com/assets/desktop.jpeg',
      slug: '',
      ...config
    }

    this.ptitle.setTitle( config.title )

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' })
    this.meta.updateTag({ name: 'twitter:site', content: '@kerrongordon' })
    this.meta.updateTag({ name: 'twitter:title', content: config.title })
    this.meta.updateTag({ name: 'twitter:description', content: config.description })
    this.meta.updateTag({ name: 'twitter:image', content: config.image })

    this.meta.updateTag({ property: 'og:type', content: 'article' })
    this.meta.updateTag({ property: 'og:site_name', content: 'KerronGordon' })
    this.meta.updateTag({ property: 'og:title', content: config.title })
    this.meta.updateTag({ property: 'og:description', content: config.description })
    this.meta.updateTag({ property: 'og:image', content: config.image })
    this.meta.updateTag({ property: 'og:url', content: `https://kerron-gordon.firebaseapp.com/${config.slug}` })
  }

}
