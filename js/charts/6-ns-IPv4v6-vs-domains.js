let chart6IPv4v6vsDomID = "#chart-6"
let chart6IPv4v6vsDom

function getDataChart6IPv4v6vsDom(){
  let path = "./data/"+runid+"CountDomainsWithCountNSIps"+date+ts+".csv"
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
    let cant_doms = allTextLines.map((l)=>{return l.split(',')[0]})
    //let cant_ip = allTextLines.map((l)=>{return l.split(',')[1]})
    let cant_ipv4 = allTextLines.map((l)=>{return l.split(',')[2]})
    let cant_ipv6 = allTextLines.map((l)=>{return l.split(',')[3]})

    //let cant_ipv4s = {}
    //let cant_ipv6s = {}
    let cant_ips = {}
    for(let i=0 ; i<cant_doms.length; i++){
      let cur_ipv4 = cant_ipv4[i];
      let get_cur = cant_ips[cur_ipv4]
      if(typeof get_cur == "undefined"){
        cant_ips[cur_ipv4]={'doms':cur_ipv4}
        cant_ips[cur_ipv4]["ipv6"] = 0
      }
      get_cur = cant_ips[cur_ipv4]["ipv4"]
      //console.log("asd"+ get_cur)
      if(typeof get_cur !== "undefined"){
        cant_ips[cur_ipv4]["ipv4"] = get_cur + Number(cant_doms[i])
      }else{
        cant_ips[cur_ipv4]["ipv4"] = Number(cant_doms[i])
      }
      let cur_ipv6 = cant_ipv6[i];
      get_cur = cant_ips[cur_ipv6]
      if(typeof get_cur == "undefined"){
        cant_ips[cur_ipv6]={'doms':cur_ipv6}
        cant_ips[cur_ipv6]["ipv4"] = 0
      }
      get_cur = cant_ips[cur_ipv6]["ipv6"]
      if(typeof get_cur !== "undefined") {
        cant_ips[cur_ipv6]["ipv6"] = get_cur + Number(cant_doms[i])
      }else{
        cant_ips[cur_ipv6]["ipv6"] = Number(cant_doms[i])
      }
    }
    //console.log(cant_ipv6s)
    //console.log(cant_ips)

    cant_ips = Object.values(cant_ips)
    //cant_ipv6 = Object.values(cant_ipv6s)

    //console.log(cant_ips)
    //console.log(cant_ipv4)

    let cantidad_doms = []
    let cantidad_ipv4 = []
    let cantidad_ipv6 = []
    for(let i = 0;i<cant_ips.length;i++){
      cantidad_doms[i]=cant_ips[i]["doms"]
      cantidad_ipv4[i]=cant_ips[i]["ipv4"]
      cantidad_ipv6[i]=cant_ips[i]["ipv6"]
    }
    //console.log(cantidad_doms)
    //console.log(cantidad_ipv4)
    //console.log(cantidad_ipv6)



    if(chart6IPv4v6vsDom){
      load6IPv4v6vsDom(cantidad_doms, cantidad_ipv4, cantidad_ipv6)
    }else {
      render6IPv4v6vsDom(cantidad_doms, cantidad_ipv4, cantidad_ipv6)
    }
  }).catch(function(error){
    console.log(error)
  })
}

function render6IPv4v6vsDom(cant_doms, cant_ipv4, cant_ipv6) {
  //console.log("render6IPv4v6vsDom")
  let optionsChart6IPv4v6vsDom = {
    series: [
      {
        name:"IPv4",
        type: 'column',
        data: cant_ipv4
      },
      {
        name:"IPv6",
        type: 'column',
        data: cant_ipv6
      },
    ],
    labels: cant_doms,
    colors : [color6IPV4svsdomains,color6IPV6svsdomains],
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
  chart6IPv4v6vsDom = new ApexCharts(document.querySelector(chart6IPv4v6vsDomID), optionsChart6IPv4v6vsDom);
  chart6IPv4v6vsDom.render();
}

function load6IPv4v6vsDom(cant_doms, cant_ipv4, cant_ipv6){
  //console.log("loadchartInvitacionesClinicasPeriodo")
  chart6IPv4v6vsDom.updateOptions({labels:cant_doms,})
  chart6IPv4v6vsDom.updateSeries([
    {
      name:"IPv4",
      type: 'column',
      cant_ipv4    },
    {
      name:"IPv6",
      type: 'column',
      data: cant_ipv6
    },
  ])


}
