import Checkbox from "./Checkbox";

export default {
    title:"Checkbox",
    component: Checkbox,
};

export const Default = {
    args:{
        disabled: false,
    }
}
export const Disabled = {
    args:{
        disabled: true,
    }
}