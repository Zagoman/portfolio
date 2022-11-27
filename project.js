import ProjectPage from "./modules/ProjectPage";

// https://ymcbezkdkcbdfxtaxqbm.supabase.co/rest/v1/kea_projects?id=eq.${id}
let projectPage = null;
document.addEventListener("DOMContentLoaded", init);

function init() {
  projectPage = new ProjectPage();
}
