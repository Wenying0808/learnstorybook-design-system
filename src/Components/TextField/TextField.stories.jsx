import TextField from "./TextField";

export default {
    title:"Text Field",
    component: TextField,
};

export const Basic = {
    args:{
        placeholder: 'Placeholder',
        isRequired: false,
        isDisabled: false,
        error: false,
    }
};

export const Disabled = {
    args:{
        placeholder: 'Placeholder',
        isRequired: false,
        isDisabled: true,
        error: false,
    }
};

export const DisabledWithValue = {
    args:{
        value: 'Value',
        isRequired: false,
        isDisabled: true,
        error: false,
    }
};

export const Errored = {
    args:{
        placeholder: 'Placeholder',
        isRequired: true,
        isDisabled: false,
        error: true,
    }
};