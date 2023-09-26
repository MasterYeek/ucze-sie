import { ProjectList } from "./App/ProjectList.js";

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");

    activeProjectsList.switchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );

    finishedProjectsList.switchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerid = setTimeout(this.startAnalytics, 3000);

    // document
    //   .getElementById("stop-analytics-btn")
    //   .addEventListener("click", () => {
    //     clearTimeout(timerid);
    //   });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/Utility/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}
App.init();
