import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import CreateEvent from '../components/CreateEvent';
import CheckEvents from '../components/CheckEvents';
import TradeMailingLists from '../components/TradeMailingLists';

import { getAllEvents } from '../services/events.service';

function Home() {
    const [isCreateEvent, setIsCreateEvent] = useState(false);
    const [isCheckEvents, setIsCheckEvents] = useState(false)
    const [isTradeMailingLists, setIsTradeMailingLists] = useState(false)
    const [isGetEvents, setGetEvents] = useState(true)
    const [eventsData, setEventsData] = useState([]);

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')

    useEffect(() => {
        if (isGetEvents) {
            getAllEvents().then(data => {
                setEventsData(data);
                setGetEvents(false)
            })
        }
    })

    const handleIsCreateEvent = () => {
        setIsCreateEvent(!isCreateEvent)
        setIsCheckEvents(false);
        setIsTradeMailingLists(false)
    }

    const handleIsCheckEvents = () => {
        setIsCheckEvents(!isCheckEvents)
        setIsCreateEvent(false)
        setIsTradeMailingLists(false)
    }

    const handleIsTradeMailingLists = () => {
        setIsTradeMailingLists(!isTradeMailingLists)
        setIsCheckEvents(false)
        setIsCreateEvent(false)
    }

    return (
        <div className='container'>
            <h1>Hello we are home</h1>
            <Button onClick={handleIsCreateEvent} variant="contained">Create Event</Button>
            <br />
            {isCreateEvent && CreateEvent({title, setTitle, date, setDate, address, setAddress, setGetEvents})}
            <br />
            <Button onClick={handleIsCheckEvents} variant="contained">Check Events</Button>
            <br />
            {isCheckEvents && CheckEvents(eventsData)}
            <br />
            <Button onClick={handleIsTradeMailingLists} variant="contained">Sell/Buy</Button>
            <br />
            {isTradeMailingLists && TradeMailingLists()}

        </div>
    )
}

export default Home
