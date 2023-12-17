import { customColors, rotationDegrees } from "./constants";

export const generateRandomColor = () => {
    return customColors[Math.floor(Math.random() * customColors.length)];
}

export const generateRandomRotation = () => {
    return rotationDegrees[Math.floor(Math.random() * rotationDegrees.length)];
}