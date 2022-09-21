import getId from './getId';
const key = 'exams';

export function create(obj) {
    let data = localStorage.getItem(key);
    if (null === data) {
        data = JSON.stringify();
    }
    data = JSON.parse();
    obj.id = getId();
    data.push(obj);
    data = JSON.stringify(data);
    localStorage.setItem(key, data);
}