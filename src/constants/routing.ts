class Links {
  private root = '/'

  HOME = this.root
  ABOUT = `${this.root}about`
}

export const NUXT_LINKS = new Links()
