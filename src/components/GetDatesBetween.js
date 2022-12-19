function getDatesBtween(from, to, day){

    var from  = new Date(from),
        to    = new Date(to),
        dates = [];

    from.setDate(day);
    to.setDate(day); 

    while(from <= to){

        dates.push(new Date(from));

        from.setMonth( from.getMonth() + 1 );

    }

    return dates;

}

var dates = getDatesBtween("2015/01/15", "2016/12/15", 15);

console.log(dates);