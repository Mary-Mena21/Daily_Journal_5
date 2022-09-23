import { getNotes } from "./database.js";

/* ---Record-Entries----EventListener-----Record-Entries------ */
export const displayNotes = () => {
    const notes = getNotes();
    let notes_tables = ` `;
    for (const note of notes) {
        notes_tables += `  <fieldset><ul>`;
        for (let item in note) {
            notes_tables += `<li> ${note[item]} </li>`;
        }
        notes_tables += ` </ul> </fieldset> `;
    }
    return notes_tables;
};
