
Apex.chart = {
  locales: [{
    "name": "es",
    "options": {
      "months": [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      "shortMonths": [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ],
      "days": [
        "Domingo",
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado"
      ],
      "shortDays": ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      "toolbar": {
        "exportToSVG": "Descargar SVG",
        "exportToPNG": "Descargar PNG",
        "exportToCSV": "Descargar CSV",
        "menu": "Menu",
        "selection": "Seleccionar",
        "selectionZoom": "Seleccionar Zoom",
        "zoomIn": "Aumentar",
        "zoomOut": "Disminuir",
        "pan": "Navegación",
        "reset": "Reiniciar Zoom"
      }
    }
  }],
  defaultLocale: 'es',
}


function decFormatter(val){
  return percentFormatter(parseFloat(val).toFixed(2));
}

function numberFormatter(amount){
  try{
    return amount.toLocaleString("es-CL");
  }catch (error){
    return ""
  }
}

function percentFormatter(amount){
  let num = numberFormatter(amount)
  if (num!=""){
    return numberFormatter(amount)+"%"
  }else{
    return ""
  }
}

function intCeilFormatter(amount){
  let num = numberFormatter(Math.ceil(amount))
  if (amount){
    return num
  }else{
    return ""
  }
}

function moneyFormatter(amount){
  let num = numberFormatter(amount)
  if (num!=""){
    return "$"+ numberFormatter(amount)
  }else{
    return ""
  }
}


function dateFormatter(date){

  date = new Date(date)
  let new_date;
  if(groupBy == GROUP_BY_PERIOD.DIA || groupBy== GROUP_BY_PERIOD.SEMANA){
    new_date = date.getDate() + " " + months[date.getMonth()] + ', ' + date.getFullYear()
  }else if(groupBy == GROUP_BY_PERIOD.MES){
    new_date = months[date.getMonth()] + ', ' + date.getFullYear()
  }else{
    new_date = date.getFullYear()
  }
  return new_date
}

function dateFormatterUTC(date){

  date = new Date(date)
  let new_date;
  if(groupBy == GROUP_BY_PERIOD.DIA || groupBy== GROUP_BY_PERIOD.SEMANA){
    new_date = date.getUTCDate() + " " + months[date.getUTCMonth()] + ', ' + date.getUTCFullYear()
  }else if(groupBy == GROUP_BY_PERIOD.MES){
    new_date = monthsShort[date.getUTCMonth()] + ' ' + date.getUTCFullYear()
  }else if(groupBy == GROUP_BY_PERIOD.SEMESTRE){
    new_date =  (date.getUTCMonth()==0)?date.getUTCFullYear() + " - S1":date.getUTCFullYear() + " - S2"
  }
  else {
    new_date = date.getUTCFullYear()
  }
  return new_date
}
