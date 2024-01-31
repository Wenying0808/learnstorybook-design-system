import Tooltip from "./Tooltip";
import HelpIcon from '@mui/icons-material/Help';


export default {
    title:"Tooltip",
    component: Tooltip,
    parameters: {
        layout: 'centered',
      },
};


export const Default = {
    args:{
        tooltipText: "Tooltip content...",
        children: <HelpIcon sx={{ color: "#4758DC" }}/>
    }
}