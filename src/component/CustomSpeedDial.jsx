import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
} from "@material-tailwind/react";
import {FaPlus, FaSquare} from "react-icons/fa6";
import {FaCog, FaHome} from "react-icons/fa";

export function CustomSpeedDial() {
    return (
        <>
            <SpeedDial placement="top">
                <SpeedDialHandler>
                    <IconButton size="lg" className="rounded-full">
                        <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45"/>
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent>
                    <SpeedDialAction >
                        <FaHome className="h-5 w-5 cursor-pointer text-black" size={20}/>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <FaCog className="h-5 w-5 cursor-pointer text-black" size={20}/>
                    </SpeedDialAction>
                    <SpeedDialAction>
                        <FaSquare className="h-5 w-5 cursor-pointer text-black" size={20}/>
                    </SpeedDialAction>
                </SpeedDialContent>
            </SpeedDial>
        </>
    );
}
