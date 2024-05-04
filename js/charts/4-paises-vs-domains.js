let chart4PaisesvsDomID = "#chart-4"
let chart4PaisesvsDom

function getDataChart4PaisesvsDom(){
  let path = "/data/"+runid+"CountCountryPerDomain"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    let cant_doms = allTextLines.map((l)=>{return l.split(',')[0]})
    let cantidad_paises = allTextLines.map((l)=>{return l.split(',')[1]})
    //console.log(cant_doms)
    //console.log(cantidad_paises)
    if(chart4PaisesvsDom){
      loadchart4paisesvsDomain(cant_doms, cantidad_paises)
    }else {
      render4paisesvsDomain(cant_doms, cantidad_paises)
    }
  }).catch(function(error){
    console.log(error)
  })
}

function render4paisesvsDomain(cant_doms, cantidad_paises) {
  //console.log("render4paisesvsDomain")
  let optionsChart4PaisesvsDomain = {
    series: [
      {
        name:"cantidad de dominios",
        type: 'column',
        data: cant_doms
      },
    ],
    labels: cantidad_paises,
    colors : [color4paisesvsdomains],
    chart: {
      height: 250,
      type: 'bar',
      stacked: false,
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
      animations: {
        enabled: true,
      },
    },
    tooltip: {
      shared:true,
      intersect:false,
      x: {
        show: true,
        formatter: function(val){return val + " países"},
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        }
      },

    },
    dataLabels: {
      enabled:false,
      formatter: numberFormatter,
      background:{
        enabled: true,
        foreColor: color4paisesvsdomains,
      }
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      title: {
        text: "Cantidad de países",
        style: {
          color:  color4paisesvsdomains,
        }
      },
      labels:{
        formatter: numberFormatter,
      },
    },
    yaxis: {
      title: {
        text: "Dominios",
        style: {
          color: color4paisesvsdomains,
        }
      },
      labels:{
        formatter: numberFormatter,
      },
    }
  }
  chart4PaisesvsDom = new ApexCharts(document.querySelector(chart4PaisesvsDomID), optionsChart4PaisesvsDomain);
  chart4PaisesvsDom.render();
}

function loadchart4paisesvsDomain(cant_doms, cantidad_paises){
  chart4PaisesvsDom.updateOptions({labels:cantidad_paises})
  chart4PaisesvsDom.updateSeries([
    {
      name:"Cantidad de dominios",
      type: 'column',
      data: cant_doms
    },
  ])

}
