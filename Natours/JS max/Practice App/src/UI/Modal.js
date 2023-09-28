import { codePointAt } from "core-js/core/string"


export class Modal {
    constructor(contentId) {
        this.fallbackText = fallbackText
        this.contentTemplateEl = document.getElementById(contentId)
        this.modalTemplate=document.getElementById('modal-template')
    }
    show(){
        if('content' in document.createElement('template')){
            this.modalContent = document.importNode(this.modalTemplate.content, true)
            this.modalElement = modalElements.querySelector('.modal')
            const backdropElement = modalElements.querySelector('.backdrop')
            const contentElement = document.importNode(this.contentTemplateEl.content, true)
            this.modalElement.appendChild(contentElement)
            document.body.insertAdjacentElement('afterbegin',this.modalElement)
            document.body.insertAdjacentElement('afterbegin',this.backdropElementElement)
        }else{
            alert(this.fallbackText)
        }
        }


    hide(){
        if(this.modalElement){
            document.body.removeChild(this.modalElement)
            document.body.removeChild(this.backdropElement)
            this.modalElement = null
            this.backdropElement = null
        }
    }
}