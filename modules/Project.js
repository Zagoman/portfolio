export default class Project {
  constructor(data) {
    this.data = data;
    this.id;
    this.project_name;
    this.description;
    this.link;
    this.img_url;
    this.mockups = [];
    this.tags;

    this._Init();
  }

  _Init() {
    this.id = this.data.id;
    this.project_name = this.data.project_name;
    this.description = this.data.description;
    this.link = this.data.link;
    this.img_url = this.data.img_url;
    this.tags = this.data.tags;
  }
}
