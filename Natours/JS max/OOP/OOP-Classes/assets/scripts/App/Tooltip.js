import { Component } from "./Component.js";

export class Tooltip extends Component {
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }
  closeToolTip = () => {
    this.remove();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement("div");
    tooltipElement.className = "card";
    const toolTipTemplate = document.getElementById("tooltip");
    const tooltipBody = document.importNode(toolTipTemplate.content, true);
    tooltipBody.querySelector("p").textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPostLeft = this.hostElement.offsetHeight;
    const hostElPostTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPostLeft + 10;
    const y = hostElPostTop + hostElHeight - parentElementScrolling - 10;
    tooltipElement.style.position = "absolute";
    tooltipElement.style.left = x + "px";
    tooltipElement.style.top = y + "px";

    tooltipElement.addEventListener("click", this.remove);
    this.element = tooltipElement;
  }
}
