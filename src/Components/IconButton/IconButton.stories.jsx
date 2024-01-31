import IconButton from "./IconButton";
import SettingsIcon from '@mui/icons-material/Settings';

export default {
    title:"Icon Button",
    component: IconButton,
    parameters: {
        layout: 'centered',
      },
};

export const Default = {
    args:{
        disabled: false,
        icon: <SettingsIcon sx={{ fontSize: 24 }}/>,
        tooltipText: "Settings",
        effectDelay: 100,
    }
};

export const Disabled = {
    args:{
        disabled: true,
        icon: <SettingsIcon sx={{ fontSize: 24 }}/>,
        tooltipText: "Settings",
        effectDelay: 100,
    }
};