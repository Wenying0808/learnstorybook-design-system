import Modal from "./Modal";

export default {
    title:"Modal",
    component: Modal,
};


export const Default = {
    args:{
        title:"Title", 
        description:"Here is the placeholder for the content.", 
        note:"Note: Here is the placeholder for note", 
        singleButton: false,
        dangerAction: false,
        buttonLabel1: "Cancel", 
        buttonLabel2: "Confirm", 
    }
}