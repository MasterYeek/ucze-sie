/* eslint-disable indent */
import { DOMhelper } from "../utility/DOMhelper.js";
// import { Tooltip } from "./Tooltip.js";

export class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectLists, type) {
    this.id = id;
    this.updateProjectLists = updateProjectLists;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.activeProjectsList) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    import("./Tooltip.js").then((module) => {
      const toolTip = new module.toolTip(
        () => {
          this.hasActiveTooltip = false;
        },
        toolTipText,
        this.id
      );
      toolTip.show();
      this.hasActiveTooltip = true;
    });
  }

  connectDrag() {
    const item = document.getElementById(this.id);
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
  }
  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      "button:first-of-type"
    );
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler.bind(this));
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
