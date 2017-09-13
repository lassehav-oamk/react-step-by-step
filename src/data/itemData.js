
let moment = require('moment');



let data = [
    {
        id: Math.floor(Math.random() * 1000),
        description: "Pick up milk",
        date: moment().add(7, 'days'),
        type: "chore",
        isDone: false,
    }
];

export default {
    getItems: () => {
        return Promise.resolve(data);
    },
    addItem: (description, date, type) => {
        data = data.concat([
            {
                id: Math.floor(Math.random() * 1000),
                description,
                date,
                type
            }
        ])
    },
}
