let chart1NSRecomendationSunburstID = "chart-1"

function getDataChart1NSRecomendationSunburst(){
  let path = "/data/"
  let selectedID = runid
  let fileName = 'CountRecomendations.json'
  let fullPath = path + selectedID + fileName
  fetch(fullPath, {
    method: 'GET',
    //referer: "http://observatoriolac.nic.cl/trimestral",
    //referrerPolicy: "unsafe-url",
    //mode: "no-cors",
    //credentials: "omit",
    headers: {
      Accept: 'application/json',
    }
  }).then(function (response){
    response.json().then(function (json){
      console.log(json)
      let ns1asn1pais1, ns1asn1pais2 ,ns1asn1pais3,
        ns1asn2pais1, ns1asn2pais2, ns1asn2pais3,
        ns1asn3pais1, ns1asn3pais2, ns1asn3pais3,
        ns2asn1pais1, ns2asn1pais2, ns2asn1pais3,
        ns2asn2pais1, ns2asn2pais2, ns2asn2pais3,
        ns2asn3pais1, ns2asn3pais2, ns2asn3pais3,
        ns3asn1pais1, ns3asn1pais2, ns3asn1pais3,
        ns3asn2pais1, ns3asn2pais2, ns3asn2pais3,
        ns3asn3pais1, ns3asn3pais2, ns3asn3pais3 = 0


      try{ns1asn1pais1 = json['children'][0]['children'][0]['children'][0].size}catch(e){ns1asn1pais1 = 0}
      try{ns1asn1pais2 = json['children'][0]['children'][0]['children'][1].size}catch(e){ns1asn1pais2 = 0}
      try{ns1asn1pais3 = json['children'][0]['children'][0]['children'][2].size}catch(e){ns1asn1pais3 = 0}
      try{ns1asn2pais1 = json['children'][0]['children'][1]['children'][0].size}catch(e){ns1asn2pais1 = 0}
      try{ns1asn2pais2 = json['children'][0]['children'][1]['children'][1].size}catch(e){ns1asn2pais2 = 0}
      try{ns1asn2pais3 = json['children'][0]['children'][1]['children'][2].size}catch(e){ns1asn2pais3 = 0}
      try{ns1asn3pais1 = json['children'][0]['children'][2]['children'][0].size}catch(e){ns1asn3pais1 = 0}
      try{ns1asn3pais2 = json['children'][0]['children'][2]['children'][1].size}catch(e){ns1asn3pais2 = 0}
      try{ns1asn3pais3 = json['children'][0]['children'][2]['children'][2].size}catch(e){ns1asn3pais3 = 0}
      try{ns2asn1pais1 = json['children'][1]['children'][0]['children'][0].size}catch(e){ns2asn1pais1 = 0}
      try{ns2asn1pais2 = json['children'][1]['children'][0]['children'][1].size}catch(e){ns2asn1pais2 = 0}
      try{ns2asn1pais3 = json['children'][1]['children'][0]['children'][2].size}catch(e){ns2asn1pais3 = 0}
      try{ns2asn2pais1 = json['children'][1]['children'][1]['children'][0].size}catch(e){ns2asn2pais1 = 0}
      try{ns2asn2pais2 = json['children'][1]['children'][1]['children'][1].size}catch(e){ns2asn2pais2 = 0}
      try{ns2asn2pais3 = json['children'][1]['children'][1]['children'][2].size}catch(e){ns2asn2pais3 = 0}
      try{ns2asn3pais1 = json['children'][1]['children'][2]['children'][0].size}catch(e){ns2asn3pais1 = 0}
      try{ns2asn3pais2 = json['children'][1]['children'][2]['children'][1].size}catch(e){ns2asn3pais2 = 0}
      try{ns2asn3pais3 = json['children'][1]['children'][2]['children'][2].size}catch(e){ns2asn3pais3 = 0}
      try{ns3asn1pais1 = json['children'][2]['children'][0]['children'][0].size}catch(e){ns3asn1pais1 = 0}
      try{ns3asn1pais2 = json['children'][2]['children'][0]['children'][1].size}catch(e){ns3asn1pais2 = 0}
      try{ns3asn1pais3 = json['children'][2]['children'][0]['children'][2].size}catch(e){ns3asn1pais3 = 0}
      try{ns3asn2pais1 = json['children'][2]['children'][1]['children'][0].size}catch(e){ns3asn2pais1 = 0}
      try{ns3asn2pais2 = json['children'][2]['children'][1]['children'][1].size}catch(e){ns3asn2pais2 = 0}
      try{ns3asn2pais3 = json['children'][2]['children'][1]['children'][2].size}catch(e){ns3asn2pais3 = 0}
      try{ns3asn3pais1 = json['children'][2]['children'][2]['children'][0].size}catch(e){ns3asn3pais1 = 0}
      try{ns3asn3pais2 = json['children'][2]['children'][2]['children'][1].size}catch(e){ns3asn3pais2 = 0}
      try{ns3asn3pais3 = json['children'][2]['children'][2]['children'][2].size}catch(e){ns3asn3pais3 = 0}


      console.log(ns1asn1pais1, ns1asn1pais2 ,ns1asn1pais3,
        ns1asn2pais1, ns1asn2pais2, ns1asn2pais3,
        ns1asn3pais1, ns1asn3pais2, ns1asn3pais3,
        ns2asn1pais1, ns2asn1pais2, ns2asn1pais3,
        ns2asn2pais1, ns2asn2pais2, ns2asn2pais3,
        ns2asn3pais1, ns2asn3pais2, ns2asn3pais3,
        ns3asn1pais1, ns3asn1pais2, ns3asn1pais3,
        ns3asn2pais1, ns3asn2pais2, ns3asn2pais3,
        ns3asn3pais1, ns3asn3pais2, ns3asn3pais3)


      let ids = ["all",
        "1NS",
        "2NS",
        "3+NS",
        "1NS, 1ASN", "1NS, 2ASN", "1NS, 3+ASN",
        "2NS, 1ASN", "2NS, 2ASN", "2NS, 3+ASN",
        "3+NS, 1ASN", "3+NS, 2ASN", "3+NS, 3+ASN",
        "1NS, 1ASN, 1País", "1NS, 1ASN, 2Países", "1NS, 1ASN, 3+Países",
        "1NS, 2ASN, 1País", "1NS, 2ASN, 2Países", "1NS, 2ASN, 3+Países",
        "1NS, 3+ASN, 1País", "1NS, 3+ASN, 2Países", "1NS, 3+ASN, 3+Países",
        "2NS, 1ASN, 1País", "2NS, 1ASN, 2Países", "2NS, 1ASN, 3+Países",
        "2NS, 2ASN, 1País", "2NS, 2ASN, 2Países", "2NS, 2ASN, 3+Países",
        "2NS, 3+ASN, 1País", "2NS, 3+ASN, 2Países", "2NS, 3+ASN, 3+Países",
        "3+NS, 1ASN, 1País", "3+NS, 1ASN, 2Países", "3+NS, 1ASN, 3+Países",
        "3+NS, 2ASN, 1País", "3+NS, 2ASN, 2Países", "3+NS, 2ASN, 3+Países",
        "3+NS, 3+ASN, 1País", "3+NS, 3+ASN, 2Países", "3+NS, 3+ASN, 3+Países",
      ]
      let labels = [
        "",
        "1NS",
        "2NS",
        "3+NS",
        "1NS, 1ASN", "1NS, 2ASN", "1NS, 3+ASN",
        "2NS, 1ASN", "2NS, 2ASN", "2NS, 3+ASN",
        "3+NS, 1ASN", "3+NS, 2ASN", "3+NS, 3+ASN",
        "1NS, 1ASN, 1País", "1NS, 1ASN, 2Países", "1NS, 1ASN, 3+Países",
        "1NS, 2ASN, 1País", "1NS, 2ASN, 2Países", "1NS, 2ASN, 3+Países",
        "1NS, 3+ASN, 1País", "1NS, 3+ASN, 2Países", "1NS, 3+ASN, 3+Países",
        "2NS, 1ASN, 1País", "2NS, 1ASN, 2Países", "2NS, 1ASN, 3+Países",
        "2NS, 2ASN, 1País", "2NS, 2ASN, 2Países", "2NS, 2ASN, 3+Países",
        "2NS, 3+ASN, 1País", "2NS, 3+ASN, 2Países", "2NS, 3+ASN, 3+Países",
        "3+NS, 1ASN, 1País", "3+NS, 1ASN, 2Países", "3+NS, 1ASN, 3+Países",
        "3+NS, 2ASN, 1País", "3+NS, 2ASN, 2Países", "3+NS, 2ASN, 3+Países",
        "3+NS, 3+ASN, 1País", "3+NS, 3+ASN, 2Países", "3+NS, 3+ASN, 3+Países",
        ]
      let parents = ["",
        "all", "all", "all",
        "1NS", "1NS", "1NS",
        "2NS", "2NS", "2NS",
        "3+NS", "3+NS", "3+NS",
        "1NS, 1ASN", "1NS, 1ASN", "1NS, 1ASN",
        "1NS, 2ASN", "1NS, 2ASN", "1NS, 2ASN",
        "1NS, 3+ASN", "1NS, 3+ASN", "1NS, 3+ASN",

        "2NS, 1ASN", "2NS, 1ASN", "2NS, 1ASN",
        "2NS, 2ASN", "2NS, 2ASN", "2NS, 2ASN",
        "2NS, 3+ASN", "2NS, 3+ASN", "2NS, 3+ASN",

        "3+NS, 1ASN", "3+NS, 1ASN", "3+NS, 1ASN",
        "3+NS, 2ASN", "3+NS, 2ASN", "3+NS, 2ASN",
        "3+NS, 3+ASN", "3+NS, 3+ASN", "3+NS, 3+ASN",

        ,
      ]
      let values = [

        ns1asn1pais1+
        ns1asn1pais2+
        ns1asn1pais3+
        ns1asn2pais1+
        ns1asn2pais2+
        ns1asn2pais3+
        ns1asn3pais1+
        ns1asn3pais2+
        ns1asn3pais3+
        ns2asn1pais1+
        ns2asn1pais2+
        ns2asn1pais3+
        ns2asn2pais1+
        ns2asn2pais2+
        ns2asn2pais3+
        ns2asn3pais1+
        ns2asn3pais2+
        ns2asn3pais3+
        ns3asn1pais1+
        ns3asn1pais2+
        ns3asn1pais3+
        ns3asn2pais1+
        ns3asn2pais2+
        ns3asn2pais3+
        ns3asn3pais1+
        ns3asn3pais2+
        ns3asn3pais3

        ,
        ns1asn1pais1+
        ns1asn1pais2+
        ns1asn1pais3+
        ns1asn2pais1+
        ns1asn2pais2+
        ns1asn2pais3+
        ns1asn3pais1+
        ns1asn3pais2+
        ns1asn3pais3,
        ns2asn1pais1+
        ns2asn1pais2+
        ns2asn1pais3+
        ns2asn2pais1+
        ns2asn2pais2+
        ns2asn2pais3+
        ns2asn3pais1+
        ns2asn3pais2+
        ns2asn3pais3,
        ns3asn1pais1+
        ns3asn1pais2+
        ns3asn1pais3+
        ns3asn2pais1+
        ns3asn2pais2+
        ns3asn2pais3+
        ns3asn3pais1+
        ns3asn3pais2+
        ns3asn3pais3,

        ns1asn1pais1+
        ns1asn1pais2+
        ns1asn1pais3,
        ns1asn2pais1+
        ns1asn2pais2+
        ns1asn2pais3,
        ns1asn3pais1+
        ns1asn3pais2+
        ns1asn3pais3,
        ns2asn1pais1+
        ns2asn1pais2+
        ns2asn1pais3,
        ns2asn2pais1+
        ns2asn2pais2+
        ns2asn2pais3,
        ns2asn3pais1+
        ns2asn3pais2+
        ns2asn3pais3,
        ns3asn1pais1+
        ns3asn1pais2+
        ns3asn1pais3,
        ns3asn2pais1+
        ns3asn2pais2+
        ns3asn2pais3,
        ns3asn3pais1+
        ns3asn3pais2+
        ns3asn3pais3,

        ns1asn1pais1,
        ns1asn1pais2,
        ns1asn1pais3,
        ns1asn2pais1,
        ns1asn2pais2,
        ns1asn2pais3,
        ns1asn3pais1,
        ns1asn3pais2,
        ns1asn3pais3,
        ns2asn1pais1,
        ns2asn1pais2,
        ns2asn1pais3,
        ns2asn2pais1,
        ns2asn2pais2,
        ns2asn2pais3,
        ns2asn3pais1,
        ns2asn3pais2,
        ns2asn3pais3,
        ns3asn1pais1,
        ns3asn1pais2,
        ns3asn1pais3,
        ns3asn2pais1,
        ns3asn2pais2,
        ns3asn2pais3,
        ns3asn3pais1,
        ns3asn3pais2,
        ns3asn3pais3,

      ]
      console.log(values)
      render1NSRecomendationSunburst(ids, labels, parents, values)
    }).catch(function(error){
      console.log(error)

    });
  });
}
let colorsASN = ["#029f9f","#45b9b9","#94ecec",]
let colorsPaises = ["#047598","#3c99b6","#92d0e5",]
let colorsNS = [ "#028f69","#43af7f","#9af6cd",]

function render1NSRecomendationSunburst(ids, labels, parents, values){
  var data = [{
    type: "sunburst",
    ids: ids,
    labels: labels,
    parents: parents,
    values:  values,
    leaf: {opacity: 1},
    marker: {
      line: {width: 2},
      colors:["#FFFFFF00",
        colorsNS[2],
        colorsNS[1],
        colorsNS[0],
        colorsASN[2], colorsASN[1], colorsASN[0],
        colorsASN[2], colorsASN[1], colorsASN[0],
        colorsASN[2], colorsASN[1], colorsASN[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
        colorsPaises[2], colorsPaises[1],colorsPaises[0],
      ],
    },
    branchvalues: 'total',
  }];

  var layout = {
    margin: {l: 0, r: 0, b: 0, t: 0},
    //width: auto,
    height: 350,
    showlegend:true,
  };

  Plotly.newPlot(chart1NSRecomendationSunburstID, data, layout);
}
