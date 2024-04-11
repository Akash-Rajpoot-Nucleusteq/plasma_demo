import React from "react";
import CommonTable from './CommonTable'

const Holiday = ({ upcomingCount }) => {
    const data = [
        { Date: '01 Jan 2024', HolidayName: 'New Year' },
        { Date: '26 Jan 2024', HolidayName: 'Republic Day' },
        { Date: '21 Feb 2024', HolidayName: 'Maha Shivaratri' },
        { Date: '08 Mar 2024', HolidayName: 'Holi' },
        { Date: '02 Apr 2024', HolidayName: 'Good Friday' },
        { Date: '14 Apr 2024', HolidayName: 'Ambedkar Jayanti' },
        { Date: '06 May 2024', HolidayName: 'Buddha Purnima' },
        { Date: '05 Jun 2024', HolidayName: 'Eid ul-Fitr' },
        { Date: '15 Aug 2024', HolidayName: 'Independence Day' },
        { Date: '19 Aug 2024', HolidayName: 'Raksha Bandhan' },
        { Date: '02 Oct 2024', HolidayName: 'Gandhi Jayanti' },
        { Date: '08 Oct 2024', HolidayName: 'Dussehra' },
        { Date: '27 Oct 2024', HolidayName: 'Diwali' },
        { Date: '10 Nov 2024', HolidayName: 'Eid ul-Milad' },
        { Date: '25 Dec 2024', HolidayName: 'Christmas' },
    ];

    const columns = [
        {
            title: 'Date',
            dataIndex: 'Date'
        },
        {
            title: 'Holiday Name',
            dataIndex: 'HolidayName'
        },
    ];


    const currentDate = new Date();
    const upcomingHolidays = data
        .filter(holiday => new Date(holiday.Date) >= currentDate)
        .slice(0, upcomingCount);



    return (
        <CommonTable
            columns={columns}
            data={upcomingCount ? upcomingHolidays : data}
        />
    );
}

export default Holiday;
