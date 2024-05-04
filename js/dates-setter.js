var CONFIG = {
  "runs":[
    {"id":"46",
      "date":"2020-12-31",
      "timestamp":"T09_12_58.122685Z"},
    {"id":"45",
      "date":"2020-10-01",
      "timestamp":"T10_50_54.736365Z"},
    {"id":"44",
      "date":"2020-07-02",
      "timestamp":"T19_20_49.151674Z"},
    {"id":"42",
      "date":"2020-03-26",
      "timestamp":"T12_59_36.848902Z"},
    {"id":"41",
      "date":"2019-12-26",
      "timestamp":"T11_19_14.279113Z"},
    {"id":"39",
      "date":"2019-09-26",
      "timestamp":"T15_01_32.041046Z"},
    {"id":"38",
      "date":"2019-06-27",
      "timestamp":"T10_12_08.150437Z"},
    {"id":"37",
      "date":"2019-03-25",
      "timestamp":"T10_38_19.360838Z"},
    {"id":"36",
      "date":"2018-12-27",
      "timestamp":"T11_19_15.425812Z"},
    {"id":"34",
      "date":"2018-09-28",
      "timestamp":"T11_14_19.903681Z"},
    {"id":"32",
      "date":"2018-07-05",
      "timestamp":"T14_29_28.592044Z"},
    {"id":"28",
      "date":"2018-04-04",
      "timestamp":"T10_16_00.805912Z"},
    {"id":"24",
      "date":"2017-12-28",
      "timestamp":"T12_40_35.687005Z"},
    {"id":"23",
      "date":"2017-09-28",
      "timestamp":"T12_55_14.518669Z"},
    {"id":"19",
      "date":"2017-06-27",
      "timestamp":"T11_08_58.885414Z"}
  ],
}

let runid,ts,date

function changeDate(selectedIndex){
  runid = CONFIG.runs[selectedIndex].id;
  ts = CONFIG.runs[selectedIndex].timestamp
  date = CONFIG.runs[selectedIndex].date;
  //console.log("changeDate: ",selectedIndex, runid, ts, date)
  onDateChange()
}

function setConfig(config){
  var dates = new Array(config.runs.length);
  var run_ids = new Array(config.runs.length);
  var timestamp = new Array(config.runs.length);
  for(var i =0; i< config.runs.length;i++){
    dates[i] = config.runs[i].date;
    run_ids[i] = config.runs[i].id;
    timestamp[i] = config.runs[i].timestamp;
  }

  var dropDown = document.getElementById("date-selector")
  for (var i = 0; i<config.runs.length; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.runid = run_ids[i];
    opt.timestamp = timestamp[i];
    opt.text = dates[i]
    dropDown.appendChild(opt);
  }

  dropDown.onchange = function(){
    //myDiv.style.display =
    // (this.selectedIndex == 0) ? "block" : "none";
    changeDate(this.selectedIndex);
  }

  //changeDate(0)
}

$( document ).ready(function() {
  console.log( "ready!" );
  changeDate(0)
});


setConfig(CONFIG)

