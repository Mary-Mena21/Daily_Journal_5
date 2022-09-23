/* -----------API----------- */
const API = "http://localhost:4444";

const applicationState = {
    quotesData: [],
    notesData: [],
    moodOptionsData: [],
};

/* -----------------Export Quote--------------- */
export const fetchQuotes = async () => {
    const quotes = await fetch(`${API}/quotesData`);
    const quotesJS = await quotes.json();
    applicationState.quotesData = quotesJS;
};

export const getQuotes = () => {
    const copyQuotes = applicationState.quotesData.map((quote) => ({
        ...quote,
    }));
    return copyQuotes;
};

export const AddNewQuote = async (newQuote) => {
    //applicationState.quotesData.push(newQuote);
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuote),
    };
    const response = await fetch(`${API}/quotesData`, fetchOptions);
    const responseJSON = await response.json(response);

    document.dispatchEvent(new CustomEvent("quote"));
};

/* ---------------Export Notes------------- */
export const fetchNotes = async () => {
    const notes = await fetch(`${API}/notesData`);
    const notesJS = await notes.json();
    applicationState.notesData = notesJS;
};

export const getNotes = () => {
    const notesCopy = applicationState.notesData.map((note) => ({ ...note }));
    return notesCopy;
};

export const AddNewNote = async (newNote) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
    };
    const response = await fetch(`${API}/notesData`, fetchOptions);
    const responseJS = await response.json(response);

    document.dispatchEvent(new CustomEvent("note"));
};

/* --------------Export Moods----------- */
export const fetchMoods = async () => {
    const moods = await fetch(`${API}/moodOptionsData`);
    const moodsJS = await moods.json();
    applicationState.moodOptionsData = moodsJS;
};

export const getMoods = () => {
    const moodsCopy = [...applicationState.moodOptionsData];
    return moodsCopy;
};
