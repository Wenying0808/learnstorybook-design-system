import Button from "./Button";
import cogwheel from "../Icons/ic_cogwheel.svg"
import SettingsIcon from '@mui/icons-material/Settings';

export default {
    title:"Button",
    component: Button,
};

export const PrimaryLarge = {
    args:{
        label: "Button",
        size: "large",
        filled: true,
        icon:false,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const PrimaryLargeWithIcon = {
    args:{
        label: "Button",
        size: "large",
        filled: true,
        icon: <SettingsIcon sx={{ fontSize: 24 }}/>,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const PrimaryLargeDisabled = {
    args:{
        label: "Button",
        size: "large",
        filled: true,
        icon:false,
        disabled: true,
        danger: false,
        loading: false,
    }
};

export const PrimaryLargeLoading = {
    args:{
        label: "Button",
        size: "large",
        filled: true,
        icon:false,
        disabled: false,
        danger: false,
        loading: true,
        
    }
};

export const DangerLarge = {
    args:{
        label: "Delete",
        size: "large",
        filled: true,
        icon:false,
        disabled: false,
        danger: true,
        loading: false,
    }
};

export const SecondaryLarge = {
    args:{
        label: "Button",
        size: "large",
        filled: false,
        icon:false,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const SecondaryLargeWithIcon = {
    args:{
        label: "Button",
        size: "large",
        filled: false,
        icon: <SettingsIcon sx={{ fontSize: 24 }}/>,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const SecondaryLargeLoading = {
    args:{
        label: "Button",
        size: "large",
        filled: false,
        icon:false,
        disabled: false,
        danger: false,
        loading: true,
    }
};

export const SecondaryLargeDisabled = {
    args:{
        label: "Button",
        size: "large",
        filled: false,
        icon:false,
        disabled: true,
        danger: false,
        loading: false,
    }
};

export const PrimaryRegular = {
    args:{
        label: "Button",
        size: "regular",
        filled: true,
        icon:false,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const PrimaryRegularWithIcon = {
    args:{
        label: "Button",
        size: "regular",
        filled: true,
        icon: <SettingsIcon sx={{ fontSize: 16 }}/>,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const PrimaryRegularLoading = {
    args:{
        label: "Button",
        size: "regular",
        filled: true,
        icon:false,
        disabled: false,
        danger: false,
        loading: true,
    }
};

export const SecondaryRegular = {
    args:{
        label: "Button",
        size: "regular",
        filled: false,
        icon:false,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const SecondaryRegularWithIcon = {
    args:{
        label: "Button",
        size: "regular",
        filled: false,
        icon: <SettingsIcon sx={{ fontSize: 16 }}/>,
        disabled: false,
        danger: false,
        loading: false,
    }
};

export const DangerRegular = {
    args:{
        label: "Delete",
        size: "regular",
        filled: true,
        icon:false,
        disabled: false,
        danger: true,
        loading: false,
    }
};