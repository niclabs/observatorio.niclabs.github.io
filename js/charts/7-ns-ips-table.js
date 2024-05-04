let table7NSipsID = "#table-7"
let table7NSips

//let color_negacion_existencia = "#e30707"
//let color_validacion_llaves = "#2eb3ec"
//let color_validacion_DS = "#c98c73"

function getDataTable7NSips(){
  //78CountDomainsWithCountNSIPExclusive2023-12-29T08-16-55.288706Z
  let path = "./data/"+runid+"CountDomainsWithCountNSIPExclusive"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    //numdomains,family
    // 10349,0
    // 168266,10
    // 2,6
    // 339425,4

    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    let none = 0
    let ipv4 = 0
    let ipv6 = 0
    let ipv4v6 = 0
    allTextLines.map((l)=>{
      if (l.split(',')[1]=='0'){
        none = l.split(',')[0]
      }else if (l.split(',')[1]=='4'){
        ipv4 = l.split(',')[0]
      }else if (l.split(',')[1]=='6'){
        ipv6 = l.split(',')[0]
      }else if (l.split(',')[1]=="10"){
        ipv4v6 = l.split(',')[0]
      }
    })
    render7NSips(none, ipv4, ipv6, ipv4v6)
  }).catch(function(error){
    console.log(error)
  })
}

function render7NSips(none, ipv4, ipv6, ipv4v6){
  let data = [none, ipv4, ipv6, ipv4v6]
  let headers = ["Ninguno", "Sólo IPv4", "Sólo IPv6", "IPv4 e IPv6"]
  let new_data = data.map(function(x,index){
    return [headers[index],x]
  })
  new DataTable(table7NSipsID, {
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
        targets: [1]
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
        title: 'Versión',
      },
      {
        data: function(row) {
          return row[1];
        },
        title: "Cantidad de NS"
      },
    ]

  })





}
