var one_or_more_goals = [
  {"Name":"Aaron Black","Team":"West Coast","Matches Played":1,"Minimum Goals":1},
  {"Name":"Ash Johnson","Team":"Collingwood","Matches Played":2,"Minimum Goals":2},
  {"Name":"Bayley Fritsch","Team":"Melbourne","Matches Played":18,"Minimum Goals":1},
  {"Name":"Carter Michael","Team":"Brisbane Lions","Matches Played":1,"Minimum Goals":1},
  {"Name":"Chad Wingard","Team":"Hawthorn","Matches Played":10,"Minimum Goals":1},
  {"Name":"Charlie Dixon","Team":"Port Adelaide","Matches Played":8,"Minimum Goals":1},
  {"Name":"Dean Kent","Team":"St Kilda","Matches Played":1,"Minimum Goals":1},
  {"Name":"Elijah Hollands","Team":"Gold Coast","Matches Played":1,"Minimum Goals":2},
  {"Name":"Jye Amiss","Team":"Fremantle","Matches Played":1,"Minimum Goals":2},
  {"Name":"Kieren Briggs","Team":"Greater Western Sydney","Matches Played":1,"Minimum Goals":1},
  {"Name":"Lance Franklin","Team":"Sydney","Matches Played":16,"Minimum Goals":1},
  {"Name":"Luke Breust","Team":"Hawthorn","Matches Played":17,"Minimum Goals":1},
  {"Name":"Mabior Chol","Team":"Gold Coast","Matches Played":18,"Minimum Goals":1},
  {"Name":"Sam Day","Team":"Gold Coast","Matches Played":3,"Minimum Goals":1},
  {"Name":"Taylor Walker","Team":"Adelaide","Matches Played":14,"Minimum Goals":1},
];
var table = new Tabulator("#one_or_more_goals", {
  data:one_or_more_goals,           //load row data from array
  layout:"fitColumns",      //fit columns to width of table
  responsiveLayout:"hide",  //hide columns that dont fit on the table
  tooltips:true,            //show tool tips on cells
  addRowPos:"top",          //when adding a new row, add it to the top of the table
  history:true,             //allow undo and redo actions on the table
  pagination:"local",       //paginate the data
  paginationSize:15,         //allow 7 rows per page of data
  paginationCounter:"rows", //display count of paginated rows in footer
  movableColumns:false,      //allow column order to be changed
  initialSort:[             //set the initial sort order of the data
    {column:"name", dir:"asc"},
  ],
  columns:[                 //define the table columns
    {title:"Name", field:"Name"},
    {title:"Team", field:"Team"},
    {title:"Matches Played", field:"Matches Played", sorter:"number"},
    {title:"Minimum Goals", field:"Minimum Goals", sorter:"number"}
  ],
  initialSort:[
    {column:"Minimum Goals", dir:"desc"}, //sort by this first
    {column:"Matches Played", dir:"desc"}, //then sort by this second
  ]
});