class DOMhelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }
}
class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }
  remove = () => {
    if (this.element) {
      this.element.remove();
    }
  };
  show() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? "beforebegin" : "beforeend"
    );
    this.element;
  }
}
class Tooltip extends Component {
  constructor(closeNotifierFunction) {
    super();
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }
  closeToolTip = () => {
    this.remove();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    tooltipElement.textContent = "Doomie";
    tooltipElement.addEventListener("click", this.remove);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectLists, type) {
    this.id = id;
    this.updateProjectLists = updateProjectLists;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.activeProjectsList) {
      return;
    }
    const toolTip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    });
    toolTip.show();
    this.hasActiveTooltip = true;
  }
  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler);
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMhelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectLists.bind(null, this.id)
    );
  }
  update(updateProjectListsFn, type) {
    this.updateProjectLists = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjitem of prjItems) {
      this.projects.push(
        new ProjectItem(prjitem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }
  switchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  addProject(project) {
    this.projects.push(project);
    DOMhelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex((p) => p.id === projectid);
    // this.projects.splice(projectIndex);
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}
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
  }
}
App.init();
