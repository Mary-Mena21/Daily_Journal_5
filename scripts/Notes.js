import { getNotes, AddNewNote } from "./database.js";

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

/* ---------- EVENTLISTENER------------------------- */
document.addEventListener("click", (e) => {
    //e.preventDefault();
    if (e.target.id === "submit") {
        console.log(addEventListener("click", e));
        const NewDate = document.getElementById("date")?.value;
        const newConcept = document.getElementById("concept")?.value;
        const newEntry = document.getElementById("learn")?.value;
        const newMood = document.getElementById("mood")?.value;
        //let NewDate = new Date(Date.now()).toLocaleDateString();

        const NewNote = {
            date: NewDate,
            concept: newConcept,
            entry: newEntry,
            mood: newMood,
        };
        AddNewNote(NewNote);
    }
});
