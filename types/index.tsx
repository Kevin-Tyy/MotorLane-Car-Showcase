import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    btnType ?: "button" | "submit";
    containerStyles ?: string;
    handleClick ?: MouseEventHandler<HTMLButtonElement>
}
export interface ManufucturerProps {
    manufacturer : string;
    setManufacturer : ( manufacturer : string ) => void;
}