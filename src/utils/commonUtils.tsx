
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

//get the month of a date
export const getDateFormat = ( expDate : Date ) =>{

    const date =new Date( expDate) ;
    return monthNames[ date.getMonth() ] + "-" + date.getFullYear() ;
}
