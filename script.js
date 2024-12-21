function nalikai_to_min(nalikai, vinaligai) {
  return ((nalikai * 60) + vinaligai);
}

function result() {
  let pnal = parseInt(document.getElementById("parama_nalikai").value) || 0;
  let pvin = parseInt(document.getElementById("pvinaligai").value) || 0;
  let cnal = parseInt(document.getElementById("cellu_nalikai").value) || 0;
  let cvin = parseInt(document.getElementById("cvinaligai").value) || 0;
  let dasa = parseFloat(document.getElementById("dasa_year").value) || 0;

  let output = document.getElementById("output");

  let total_pmin = 0;
  let total_cmin = 0;
  let dasa_year = 0;
  let month;
  let days;
  let nali;
  let vinadi;
  total_pmin = nalikai_to_min(pnal, pvin);
  total_cmin = nalikai_to_min(cnal, cvin);

  dasa_year = (total_cmin * dasa) ;

  month = ((dasa_year%total_pmin)*12);
  days = (month%total_pmin)*30;
  nali = (days%total_pmin)*60;
  vinadi = (nali%total_pmin)*60;
  
  output.innerText =
    "Total Parama min : " + total_pmin + "\n\n" +
    "Total Cellu min : " + total_cmin +"\n\n" +
    "DASA year : " + parseInt(dasa_year/ total_pmin) + "\n\n" + 
    "Month : " + parseInt(month/total_pmin) + " mon \n\n" +
    "Days : " + parseInt(days/total_pmin) + " days \n\n" +
    "Naligai : " + parseInt(nali/total_pmin) + " naligai \n\n" +
    "Vinadi : " + parseInt(vinadi/total_pmin) + " vinadi \n\n" ;
}
