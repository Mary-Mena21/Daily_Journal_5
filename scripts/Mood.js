
import { getMoods } from "./database.js";

/* ------------------Entries-----Mood---------------------*/
export const displayMoods = () => {
        const moodOptions = getMoods();
        let Options = ` `;
        for (let mood of moodOptions) {
            Options += `
                <option value="${mood}">${mood}</option>`;
        }
        return Options;
    };