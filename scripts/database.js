/* ------------------------------Export Quotes------------------------ */
const dataList = [
    {
        quote: "Code can't lie comments can.",
    },
];

export const getQuotes = () => {
    const copyDataList = dataList.map((quote) => ({ ...quote }));
    console.log("copyDataList : ", copyDataList);
    return copyDataList;
};

export const AddNewQuote = (quote) => {
    dataList.push(quote);
    document.dispatchEvent(new CustomEvent("quote")); 
};

/* ------------------------------Export Notes------------------------ */
const notes = [
    {
        date: "07/24/2022",
        concept: " GitHub ",
        entry: "Finally, I submit my first pull request to GitHub.",
        mood: "Passion",
    },
];

export const getNotes = () => {
    const notesCopy = notes.map((note) => ({ ...note }));
    return notesCopy;
};

/* ------------------------------Export Moods------------------------ */
const moodOptions = ["", "Happy", "Passion", "Curious", "Ok", "Unhappy"];

export const getMoods = () => {
    const moodsCopy = [...moodOptions];
    //copy the array Deep clone
    return moodsCopy;
};

export const AddNewNote = (note) => {
        notes.push(note);
    /* const newId = getNewId(); */
    /*  note.id = newId; */
    document.dispatchEvent(new CustomEvent("note"));
};

/* ------------------------------ID in Order------------------------ */

/* const getNewId = () => {
    const notesCopy = getNotes();
    let highestId = notesCopy.sort((a, b) => b.id - a.id)[0].id;
    return highestId + 1;
}; */
