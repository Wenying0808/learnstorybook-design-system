import BaseSelect from "./Select";

export default {
    title: "Select",
    component: BaseSelect,
};

export const Default = {
    args:{
        width: "200px",
        options: [
            { value: 'banana', label: 'Banana' },
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'matcha', label: 'Matcha' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
            { value: 'vanillabananachocolatematcha', label: 'Vanilla Banana Chocolate Matcha' },
          ],

    }
}