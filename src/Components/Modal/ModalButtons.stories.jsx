import ModalButtons from "./ModalButtons";

export default {
    title:"ModalButtons",
    component: ModalButtons,
};

export const Default = {
    args:{
        singleButton: false,
        dangerAction: false,
        label1: "Cancel",
        label2: "Confirm",
    }
}

export const Danger = {
    args:{
        singleButton: false,
        dangerAction: true,
        label1: "Cancel",
        label2: "Delete",
    }
}