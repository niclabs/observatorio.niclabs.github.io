let table8DNSSECID = "#table-8"
let table8DNSSEC

//let color_negacion_existencia = "#e30707"
//let color_validacion_llaves = "#2eb3ec"
//let color_validacion_DS = "#c98c73"

function getDataTable8DNSSEC(){
  //46CountDomainsWithDNSSEC2020-12-31T09_12_58.122685Z
  let path = "/data/"+runid+"CountDomainsWithDNSSEC"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    //category,domains
    // no_dnssec,547861
    // dnssec_fail,2073
    // dnssec_ok,501

    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    let no_dnssec = 0
    let dnssec_fail = 0
    let dnssec_ok = 0
    allTextLines.map((l)=>{
      if (l.split(',')[0]=='no_dnssec'){
        no_dnssec = l.split(',')[1]
      }else if (l.split(',')[0]=='dnssec_fail'){
        dnssec_fail = l.split(',')[1]
      }else if (l.split(',')[0]=='dnssec_ok'){
        dnssec_ok = l.split(',')[1]
      }
    })
    render8DNSSEC(no_dnssec, dnssec_fail, dnssec_ok)
  }).catch(function(error){
    console.log(error)
  })
}

function render8DNSSEC(no_dnssec, dnssec_fail, dnssec_ok){
  let data = [no_dnssec, dnssec_fail, dnssec_ok]
  let headers = ["SIN DNSSEC", "DNSSEC FAIL", "DNSSEC OK"]
  let new_data = data.map(function(x,index){
    return [headers[index],x]
  })
  new DataTable(table8DNSSECID, {
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
        title: 'Nivel de implementación',
      },
      {
        data: function(row) {
          return row[1];
        },
        title: "Cantidad de dominios"
      },
    ]

  })





}
