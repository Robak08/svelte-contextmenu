import { createStyleString } from "./utilities";
/** Generate context menu style including positioning */
export function computeMenuStyle(position) {
    if (!position)
        return "";
    const [posX, posY] = position;
    return createStyleString({
        "position": "absolute",
        "left": `${posX}px`,
        "top": `${posY}px`,
        "z-index": 9999
    });
}
/** Generate the context menu CSS class name */
export function getMenuClass(position, settings) {
    let classes = [...settings.Menu.Class];
    if (position) {
        return classes.concat(settings.Menu.VisibleClass).join(' ');
    }
    return classes.join(' ');
}
