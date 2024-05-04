let chart2NSvsDomID = "#chart-2"
let chart2NSvsDom

function getDataChart2NSvsDom(){
  let path = "./data/"+runid+"CountNSPerDomain"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
      var allTextLines = text.split(/\r\n|\n/).splice(1);
      allTextLines = allTextLines.slice(0,allTextLines.length-1)
      let cantidad_ns = allTextLines.map((l)=>{return l.split(',')[0]})
      let cant_doms = allTextLines.map((l)=>{return l.split(',')[1]})
      //console.log(cant_doms)
      //console.log(cantidad_ns)
      if(chart2NSvsDom){
        loadchart2NSvsDomain(cant_doms, cantidad_ns)
      }else {
        render2NSvsDomain(cant_doms, cantidad_ns)
      }
    }).catch(function(error){
      console.log(error)
    })
  }

function render2NSvsDomain(cant_doms, cantidad_ns) {
  //console.log("render2NSvsDomain")
  let optionsChart2NSvsDomain = {
    series: [
      {
        name:"cantidad de dominios",
        type: 'column',
        data: cant_doms
      },
    ],
    labels: cantidad_ns,
    colors : [color2nsvsdomains],
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
        formatter: function(val){return val + " NSs"},
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
        foreColor: color2nsvsdomains,
      }
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      title: {
        text: "Cantidad de Ns",
        style: {
          color:  color2nsvsdomains,
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
          color: color2nsvsdomains,
        }
      },
      labels:{
        formatter: numberFormatter,
      },
    }
  }
  chart2NSvsDom = new ApexCharts(document.querySelector(chart2NSvsDomID), optionsChart2NSvsDomain);
  chart2NSvsDom.render();
}

function loadchart2NSvsDomain(cant_doms, cantidad_ns){
  //console.log("loadchart2NSvsDomain")
  chart2NSvsDom.updateOptions({labels:cantidad_ns})
  chart2NSvsDom.updateSeries([
    {
      name:"Cantidad de dominios",
      type: 'column',
      data: cant_doms
    },
  ])

}
