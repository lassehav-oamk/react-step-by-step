import moment from 'moment';
import axios from 'axios';
const config = require ('../config.json');

function isDoneToggle(itemId)
{
    return new Promise((resolve, reject) => {
        console.log("delete item id ", itemId);
        axios.post(config.serverAddress + '/todos/' + itemId + '/toggleDone', 
                   {},
                   {
                        headers: {'Content-Type': 'application/json'},
                   })        
        .then(response => {
            resolve();
        })
        .catch(error => {
            console.log(error);
            reject(error)
        });
    });
}

function getItems()
{
    return new Promise((resolve, reject) => {
        axios.get(config.serverAddress + '/todos').then((response) => {
            let items = response.data.map(item => {
                item.dueDate = moment(item.dueDate).clone();
                return item;
            })
            console.log(items);
            resolve(items);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        });
    });
}

function addItem(description, date, type)
{
    return new Promise((resolve, reject) => {

        axios.post(config.serverAddress + '/todos',
            { description,
              dueDate: moment(date).toJSON(),
              type,
              isDone: false
            }).then(response => {
                return getItems();
            }).then(items => {
                resolve(items);
            });
    });
}

export default {
    getItems,
    addItem,
    isDoneToggle
}
