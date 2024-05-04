let chart9fallasDNSSECID = "#chart-9"
let chart9fallasDNSSEC

function getDataChart9fallasDNSSEC(){
  //63CountDomainsWithDNSSECErrors2021-03-30T09-38-15.481549Z

  //failiure,domains
  // Negación de Existencia,1243
  // Validación de llaves,59
  // Validación de DS,1969
  let fechas = []
  let negacion_existencia = []
  let validacion_llaves = []
  let validacion_DS = []


  for(let i=0; i< CONFIG.runs.length;i++){
    let cur_runid = CONFIG.runs[i].id
    let cur_date = CONFIG.runs[i].date
    let cur_ts = CONFIG.runs[i].timestamp

    let path = "./data/"+cur_runid+"CountDomainsWithDNSSECErrors"+cur_date+cur_ts+".csv"
    fetch(path, {
      method: 'GET',
      headers: {
        Accept: 'text',
      }
    }).then(response => response.text()).then(text=> {
        //category,fail,fulfill
        // Permite Recursividad,3506,1231456
        // EDNS activado,12203,1222759
        // comunicacion TCP,14549,1220413
        // Transferencia de zona TCP,0,1234962
        // Respuesta a consultas LOC,44,1234918

        let allTextLines = text.split(/\r\n|\n/).splice(1);
        allTextLines = allTextLines.slice(0, allTextLines.length - 1)
        let ne = 0
        let vk = 0
        let vds = 0
        allTextLines.map((l) => {
          let r = l.split(',')[1]
          if (l.split(',')[0] == 'Negación de Existencia') {
            ne = r
          } else if (l.split(',')[0] == 'Validación de llaves') {
            vk = r
          } else if (l.split(',')[0] == 'Validación de DS') {
            vds = r
          }
        })
        fechas[i] = cur_date
        negacion_existencia[i] = ne
        validacion_llaves[i] = vk
        validacion_DS[i] = vds
      if(i== CONFIG.runs.length-1) {
        if (chart9fallasDNSSEC) {
          load9fallasDNSSEC(fechas, negacion_existencia, validacion_llaves, validacion_DS)
        } else {
          render9fallasDNSSEC(fechas, negacion_existencia, validacion_llaves, validacion_DS)
        }
      }
    }).catch(function(error){
      console.log(error)
    })
  }

}

function render9fallasDNSSEC(fechas, negacion_existencia, validacion_llaves, validacion_DS) {
  //console.log("render9fallasDNSSEC")
  let optionsChart9fallasDNSSEC = {
    series: [
      {
        name:"Negación de existencia",
        type: 'line',
        data: negacion_existencia
      },
      {
        name:"Validación de llaves",
        type: 'line',
        data: validacion_llaves
      },
      {
        name:"Validación del DS",
        type: 'line',
        data: validacion_DS
      },
    ],
    labels: fechas,
    colors : [color9fallasDNSSECne, color9fallasDNSSECvk, color9fallasDNSSECvds],
    chart: {
      height: 250,
      type: 'line',
      toolbar: {
        //    show: false,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
          customIcons: [],
        },
      },
      dataLabels: {
        position: 'top',
      },
      animations: {
        enabled: true,
      },
    },
    markers: {
      size: 1,
      color: "#c00e0e",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        //columnWidth: '55%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetY: -5,
      //textAnchor: 'top',
      style: {
        fontSize: '12px',
        colors: ["#adadad"],
      },
      formatter: numberFormatter,
      background:{
        enabled: false,
      }

    },
    xaxis: {
      labels: {
      },
      tooltip: {
        enabled: false,
      },
      title: {
        //text: "fecha",
        style: {
          color:  "#adadad",
        }
      },
    },
    yaxis: {
      title: {
        text: "cantidad de dominios",
        style: {
          color: "#adadad",
        }
      },
    }
  }
  chart9fallasDNSSEC = new ApexCharts(document.querySelector(chart9fallasDNSSECID), optionsChart9fallasDNSSEC);
  chart9fallasDNSSEC.render();
}

function load9fallasDNSSEC(fechas, negacion_existencia, validacion_llaves, validacion_DS){
  //console.log("loadchartInvitacionesClinicasPeriodo")
  chart9fallasDNSSEC.updateOptions({labels:fechas,})
  chart9fallasDNSSEC.updateSeries([
    {
      name:"Negación de existencia",
      type: 'line',
      data: negacion_existencia
    },
    {
      name:"Validación de llaves",
      type: 'line',
      data: validacion_llaves
    },
    {
      name:"Validación del DS",
      type: 'line',
      data: validacion_DS
    },
  ])


}
