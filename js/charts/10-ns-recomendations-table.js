let table10RecomendacionesNSID = "#table-10"
let table10RecomendacionesNS

//let color_negacion_existencia = "#e30707"
//let color_validacion_llaves = "#2eb3ec"
//let color_validacion_DS = "#c98c73"

function getDataTable10RecomendacionesNS(){
  //63CountNameserverCharacteristics2021-03-30T09-38-15.481549Z
  let path = "/data/"+runid+"CountNameserverCharacteristics"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    //category,fail,fulfill
    // Permite Recursividad,3506,1231456
    // EDNS activado,12203,1222759
    // comunicacion TCP,14549,1220413
    // Transferencia de zona TCP,0,1234962
    // Respuesta a consultas LOC,44,1234918

    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    let recursivity_prohibited = [0,0]
    let edns_activated = [0,0]
    let tcp_allowed = [0,0]
    let zone_transfer_forbiden = [0,0]
    let loc_allowed = [0,0]
    allTextLines.map((l)=>{
      let r = [l.split(',')[2],l.split(',')[1]]
      if (l.split(',')[0]=='Permite Recursividad'){
        recursivity_prohibited = r
      }else if (l.split(',')[0]=='EDNS activado'){
        edns_activated = r
      }else if (l.split(',')[0]=='comunicacion TCP'){
        tcp_allowed = r
      }else if (l.split(',')[0]=="Transferencia de zona TCP"){
        zone_transfer_forbiden =r
      }else if (l.split(',')[0]=="Respuesta a consultas LOC"){
        loc_allowed = r
      }
    })
    render10RecomendacionesNS(recursivity_prohibited, edns_activated, tcp_allowed, zone_transfer_forbiden, loc_allowed)
  }).catch(function(error){
    console.log(error)
  })
}

function render10RecomendacionesNS(recursivity_prohibited, edns_activated, tcp_allowed, zone_transfer_forbiden, loc_allowed){
  let data = [recursivity_prohibited, edns_activated, tcp_allowed, zone_transfer_forbiden, loc_allowed]
  let recomendations = ["Prohibe recursividad", "EDNs activado", "Permite comunicación TCP", "Prohibe transferencia de zona", "Permite consultas LOC"]
  let new_data = data.map(function(x,index){
    return [recomendations[index],x[0],x[1]]
  })
  new DataTable(table10RecomendacionesNSID, {
    paging: false,
    destroy: true,
    data: new_data,
    searching: false,
    info: false,
    language: {
      url: 'https://cdn.datatables.net/plug-ins/1.12.0/i18n/es-ES.json'
    },
    columnDefs: [
      {
        className: "text-center",
        targets: [1,2]
      },
      {
        className: "text-left",
        targets: [0]
      },
    ],

    columns: [
      {
        data: function(row,i) {
          //console.log(row)
          return row[0];
        },//recomendations,
        title: 'Recomendación',
      },
      {
        data: function(row) {
          return row[1];
        },
        title: "Cumplen"
      },
      {
        data: function(row) {
          return row[2];
        },
        title: "No cumplen"
      },
      ]

  })





}
