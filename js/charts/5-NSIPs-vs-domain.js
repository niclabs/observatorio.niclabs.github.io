let chart5IPsvsDomID = "#chart-5"
let chart5IPsvsDom

function getDataChart5IPsvsDom(){
  let path = "/data/"+runid+"CountDomainsWithCountNSIps"+date+ts+".csv"
  fetch(path, {
    method: 'GET',
    headers: {
      Accept: 'text',
    }
  }).then(response => response.text()).then(text=>{
    //console.log(text)
    var allTextLines = text.split(/\r\n|\n/).splice(1);
    allTextLines = allTextLines.slice(0,allTextLines.length-1)
    //numdomains,ipscount,ipsv4count,ipsv6count
    let cant_dom1 = allTextLines.map((l)=>{return l.split(',')[0]})
    let cant_ip = allTextLines.map((l)=>{return l.split(',')[1]})
    //let cant_ipv4 = allTextLines.map((l)=>{return l.split(',')[2]})
    //let cant_ipv6 = allTextLines.map((l)=>{return l.split(',')[3]})
    let cant_doms = []
    let cant_ips = []
    let last_cant_ip = -1
    let acum=0
    //let j=0
    for(let i=0; i<cant_dom1.length; i++){
      if(cant_ip[i]!=last_cant_ip){
        if(last_cant_ip!=-1){
          cant_doms.push(acum)
          cant_ips.push(last_cant_ip)
        }
        acum = Number(cant_dom1[i])
        last_cant_ip = cant_ip[i]
      }else{
        acum = acum + Number(cant_dom1[i])
      }
    }
    cant_doms.push(acum)
    cant_ips.push(last_cant_ip)
    //console.log(cant_doms)
    //console.log(cant_ips)
    if(chart5IPsvsDom){
      loadchart5IPsvsDomain(cant_doms, cant_ips)
    }else {
      render5IPsvsDomain(cant_doms, cant_ips)
    }
  }).catch(function(error){
    console.log(error)
  })
}

function render5IPsvsDomain(cant_doms, cantidad_ips) {
  //console.log("render5IPsvsDomain")
  let optionsChart5IPsvsDomain = {
    series: [
      {
        name:"cantidad de dominios",
        type: 'column',
        data: cant_doms
      },
    ],
    labels: cantidad_ips,
    colors : [color5IPsvsdomains],
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
        formatter: function(val){return val + " IPs"},
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
        foreColor: color5IPsvsdomains,
      }
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      title: {
        text: "Cantidad de IPs",
        style: {
          color:  color5IPsvsdomains,
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
          color: color5IPsvsdomains,
        }
      },
      labels:{
        formatter: numberFormatter,
      },
    }
  }
  chart5IPsvsDom = new ApexCharts(document.querySelector(chart5IPsvsDomID), optionsChart5IPsvsDomain);
  chart5IPsvsDom.render();
}

function loadchart5IPsvsDomain(cant_doms, cant_ips){
  //console.log("loadchart5IPsvsDomain")
  chart5IPsvsDom.updateOptions({labels:cant_ips})
  chart5IPsvsDom.updateSeries([
    {
      name:"Cantidad de dominios",
      type: 'column',
      data: cant_doms
    },
  ])

}
