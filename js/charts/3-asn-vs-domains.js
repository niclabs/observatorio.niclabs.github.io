let chart3ASNvsDomID = "#chart-3"
let chart3ASNvsDom

function getDataChart3ASNvsDom(){
  let path = "./data/"+runid+"CountASNPerDomain"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    let cant_doms = allTextLines.map((l)=>{return l.split(',')[0]})
    let cantidad_asn = allTextLines.map((l)=>{return l.split(',')[1]})
    //console.log(cant_doms)
    //console.log(cantidad_asn)
    if(chart3ASNvsDom){
      load3ASNvsDomain(cant_doms, cantidad_asn)
    }else {
      render3ASNvsDomain(cant_doms, cantidad_asn)
    }
  }).catch(function(error){
    console.log(error)
  })
}

function render3ASNvsDomain(cant_doms, cantidad_asn) {
  //console.log("render3ASNvsDomain")
  let optionsChart3ASNvsDomain = {
    series: [
      {
        name:"cantidad de dominios",
        type: 'column',
        data: cant_doms
      },
    ],
    labels: cantidad_asn,
    colors : [color3asnvsdomains],
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
        formatter: function(val){return val + " ASNs"},
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
        foreColor: color3asnvsdomains,
      }
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      title: {
        text: "Cantidad de ASNs",
        style: {
          color:  color3asnvsdomains,
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
          color: color3asnvsdomains,
        }
      },
      labels:{
        formatter: numberFormatter,
      },
    }
  }
  chart3ASNvsDom = new ApexCharts(document.querySelector(chart3ASNvsDomID), optionsChart3ASNvsDomain);
  chart3ASNvsDom.render();
}

function load3ASNvsDomain(cant_doms, cantidad_asn){
  //console.log("load3ASNvsDomain")
  chart3ASNvsDom.updateOptions({labels:cantidad_asn,})
  chart3ASNvsDom.updateSeries([
    {
      name:"Cantidad de dominios",
      type: 'column',
      data: cant_doms
    },
  ])
}
