// Parsing a Date

const date1 = new Date("Wed, 27 July 2016 13:30:00");
const date2 = new Date("Wed, 27 July 2016 07:45:00 UTC");

// Note that you do not need to include the day of week because JS can 
// determine the day of the week for any date.
const date3 = new Date("27 July 2016 13:30:00 UTC+05:45");

// You can also pass in the year, month, day, hours, minutes, 
// and seconds as separate arguments:
const date = new Date(2016,6,27,13, 30, 9);

// ISO Format
const date = new Date("2016-07-27T07:45:00Z");
// However, you can run into trouble when you do not
//  provide the time zone explicitly!

const date4 = new Date("25 July 2016")
// Is the same as:
const date5 = new Date("July 25, 2016");


// If you use ISO Format, even if you give only the date
// and not the time and time zone, it will
// automatically accept the time zone as UTC

/*
This means:

new Date("25 July 2016").getTime() !== new Date("2016-07-25").getTime()

new Date("2016-07-25").getTime() === new Date("2016-07-25T00:00:00Z").getTime()

new Date(“25 July 2016”).getTime()
Will give you local time (same date but local time offset)

new Date(“2016-07-25”).getTime()
Will give you UTC time.

It is an implementation-specific issue (different browsers may do different things). 

In all current implementations it will, as of now (2020), always parse the second one as expected (UTC time), first one :man_shrugging:t3: 

– it should be consistent across all contemporary implementations, but I don’t know that for sure.

If you want the second to be local, it needs to be longform, ie you need to specify the time and timezone offset (for example,

to use local system time, as the first one does automatically, 2016-07-25T00:00:00Z)

JS’ Date is not good, there are a lot of little issues like this that have built up over the years. 

It works for the most part, and is normally more than usable, but you need to be careful with it.

There is a new API (Temporal) that hopefully should remove the need to use Date in most cases,

but even if its API gets finalised it’s a year or two off being finished and in browsers I think.

*/



