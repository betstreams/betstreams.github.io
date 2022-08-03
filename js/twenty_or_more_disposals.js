var twenty_or_more_disposals = [
  {"Name":"Adam Treloar","Team":"Western Bulldogs","Matches Played":18,"Minimum Disposals":22.0},
  {"Name":"Lachie Neale","Team":"Brisbane Lions","Matches Played":18,"Minimum Disposals":21.0},
  {"Name":"Brad Crouch","Team":"St Kilda","Matches Played":18,"Minimum Disposals":22.0},
  {"Name":"Rory Laird","Team":"Adelaide","Matches Played":16,"Minimum Disposals":24.0},
  {"Name":"Jack Macrae","Team":"Western Bulldogs","Matches Played":18,"Minimum Disposals":24.0},
  {"Name":"Sam Docherty","Team":"Carlton","Matches Played":18,"Minimum Disposals":21.0},
  {"Name":"Dom Sheed","Team":"West Coast","Matches Played":1,"Minimum Disposals":20.0},
  {"Name":"Matt Crouch","Team":"Adelaide","Matches Played":11,"Minimum Disposals":24.0},
  {"Name":"James Sicily","Team":"Hawthorn","Matches Played":18,"Minimum Disposals":20.0},
  {"Name":"Jack Steele","Team":"St Kilda","Matches Played":14,"Minimum Disposals":22.0},
  {"Name":"George Hewett","Team":"Carlton","Matches Played":15,"Minimum Disposals":22.0},
  {"Name":"Ben Keays","Team":"Adelaide","Matches Played":18,"Minimum Disposals":22.0},
  {"Name":"Andrew Brayshaw","Team":"Fremantle","Matches Played":18,"Minimum Disposals":20.0},
  {"Name":"Sam Walsh","Team":"Carlton","Matches Played":17,"Minimum Disposals":25.0},
  {"Name":"Caleb Serong","Team":"Fremantle","Matches Played":16,"Minimum Disposals":20.0},
];

var table = new Tabulator("#twenty_or_more_disposals", {
  data:twenty_or_more_disposals,           //load row data from array
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
    {title:"Matches Played", field:"Matches Played"},
    {title:"Minimum Disposals", field:"Minimum Disposals"}
  ],
  initialSort:[
    {column:"Minimum Disposals", dir:"desc"}, //sort by this first
    {column:"Matches Played", dir:"desc"}, //then sort by this second
  ]
});
table.extendModule("filter", "filters", {
    "===":function(headerValue, rowValue, rowData, filterParams){
        //headerValue - the value of the header filter element
        //rowValue - the value of the column in this row
        //rowData - the data for the row being filtered
        //filterParams - params object passed to the headerFilterFuncParams property

        return rowVal === headerValue ? true : false;
    }
});