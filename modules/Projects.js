import Project from "./Project.js";

export default class Projects {
  constructor() {
    this.projects = [];
    this.HTML = {
      parent: document.querySelector(".cards"),
      template: document.querySelector("#project_temp").content,
    };
    this._Init();
  }

  async _Init() {
    const options = {
      method: "GET",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltY2Jlemtka2NiZGZ4dGF4cWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY3ODY1ODEsImV4cCI6MTk4MjM2MjU4MX0.hu9LFJRAOIY62kbrNLGyLDXhhpFdHeu-crc3I_Mmdw4",
      },
    };

    fetch("https://ymcbezkdkcbdfxtaxqbm.supabase.co/rest/v1/kea_projects", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        response.forEach((el) => {
          this.projects.push(new Project(el));
        });
        console.table(this.projects);
        this.projects.forEach((proj) => {
          this._DisplayProjects(proj);
          this._ProjectImage();
        });
      })
      .catch((err) => console.error(err));
  }

  /*
<article>
            <h3 class="big_body">{{Title}}</h3>
            <p>{{Description}}</p>
            <img src="https://source.unsplash.com/featured/300x201" alt="decorative" />
            <div class="card_bottom">
              <a href="#">Check it live</a>
              <div class="tags">
                <span class="tag small-text">{{Tag}}</span>
              </div>
            </div>
          </article>
  */
  _ProjectImage() {
    document.querySelectorAll(".cards article").forEach((article) => {
      // console.log("hello");
      article.addEventListener("mouseover", function (e) {
        if (window.innerWidth > 1100) {
          if (!this.querySelector(".img_bg").classList.contains("shown")) {
            console.log(this);
            this.querySelector(".img_bg").classList.add("shown");
          }
        }
      });

      article.addEventListener("mouseout", function (e) {
        if (window.innerWidth > 1100) {
          if (this.querySelector(".img_bg").classList.contains("shown")) {
            console.log(this);
            this.querySelector(".img_bg").classList.remove("shown");
          }
        }
      });
    });
  }
  _DisplayProjects(proj) {
    const clone = this.HTML.template.cloneNode(true);

    clone.querySelector("h3").textContent = proj.project_name;
    clone.querySelector("p").textContent = proj.description;
    clone.querySelector("a").href = "./project.html?id=" + proj.id;
    clone.querySelector(".img_bg").style.backgroundImage = `url(${proj.img_url})`;
    // clone.querySelector("img").src = proj.img_url;
    makeTags().forEach((tag) => {
      clone.querySelector(".tags").innerHTML += `<span class="tag small-text">${tag} </span>`;
    });

    this.HTML.parent.appendChild(clone);
    function makeTags() {
      let tags = [];
      proj.tags.forEach((tag) => {
        tags.push(`#${tag}`);
      });
      // console.log(tags);
      return tags;
    }
  }
}
