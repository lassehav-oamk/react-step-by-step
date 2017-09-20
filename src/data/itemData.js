
let moment = require('moment');



let data = [
    {
        id: Math.floor(Math.random() * 1000),
        description: "Pick up milk",
        date: moment().add(7, 'days'),
        type: "chore",
        isDone: false,
    },
    {
        id: Math.floor(Math.random() * 1000),
        description: "Learn React",
        date: moment().add(1, 'month'),
        type: "learning",
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
