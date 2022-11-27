import Project from "./Project";

export default class ProjectPage {
  constructor() {
    this.HTML = {};
    this._Init();
  }

  async _Init() {
    this.HTML = {
      title: document.querySelector("h1"),
      description: document.querySelector(".description"),
      mainImg: document.querySelector("#main_image"),
      mockups: document.querySelectorAll(".mockup"),
      link: document.querySelector(".live_link"),
    };
    const urlParams = new URLSearchParams(window.location.search);
    const id = Number(urlParams.get("id"));
    const url = `https://ymcbezkdkcbdfxtaxqbm.supabase.co/rest/v1/kea_projects?id=eq.${id}&select=*`;
    const options = {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltY2Jlemtka2NiZGZ4dGF4cWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3ODY1ODEsImV4cCI6MTk4MjM2MjU4MX0.hu9LFJRAOIY62kbrNLGyLDXhhpFdHeu-crc3I_Mmdw4",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(...data);
        this._DisplayData(...data);
        this._RemoveLoadingScreen();
      });
  }

  _DisplayData(project) {
    project.project_name && (this.HTML.title.textContent = project.project_name);
    project.description && (this.HTML.description.textContent = project.description);
    project.link && (this.HTML.link.href = project.link);
    project.img_url && (this.HTML.mainImg.src = project.img_url);
    this.HTML.mockups.forEach((mockup) => {
      mockup.querySelector("img").src = mockup.img_src;
      mockup.querySelector("img").alt = mockup.img_description;
      mockup.querySelector("figcaption").textContent = mockup.img_description;
    });
  }

  _RemoveLoadingScreen() {
    document.querySelector(".loading_screen").remove();
  }
}
