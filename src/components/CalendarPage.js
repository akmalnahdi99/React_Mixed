import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
// TASK to Ayham: im stucked doing the event display for this calendar

export default class CalendarPage extends React.Component {

  render() {
    return (
        
        <FullCalendar defaultView="dayGridMonth" dateClick={this.handleDateClick} select={this.handleSelectClick} selectable='true' plugins={[ dayGridPlugin, interactionPlugin ]}  events={[
            { title: 'event 1', allDay: true, start: '2020-05-29', end: '2020-05-30' },
            { title: 'event 2', allDay: true, start: '2020-05-29', end: '2020-05-30'}
        ]}/>
    )
  }

  handleDateClick = (arg) => { 
}
}
