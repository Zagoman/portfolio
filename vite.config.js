import { resolve } from "path";

export default {
  //set base here or in the build command
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        project: resolve(__dirname, "project.html"),
      },
    },
  },
};
