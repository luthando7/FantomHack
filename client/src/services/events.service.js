
export const getAllEvents = () => {
    return fetch('http://localhost:3000/api/v1/events')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response is not OK');
            }
            return response.json();
        })
        .then(data => {
            return data
        })
        .catch(error => {
            console.error(error)
        })
};

export const createEvent = (title, date, address) => {
    console.log('the event details -> ', title, date, address);
    return fetch('http://localhost:3000/api/v1/events/create', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, date, address })
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data
        })
        .catch(error => {
            console.error(error)
        })
}