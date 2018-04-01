//document.addEventListener("DOMContentLoaded", () => {
//  console.log("DOM fully loaded and parsed");
//});

'use strict';

(() => {

  const tematicke = ["0.90", "0.75", "0.50", "0.30"];
  const priebezne = ["0.90", "0.75", "0.60", "0.46"];

  let tematicPointsFull, continuPointsFull = 0;

  let tematicPoints = ["tematicPoints0", "tematicPoints1", "tematicPoints2", "tematicPoints3"];
  let continuPoints = ["continuPoints0", "continuPoints1", "continuPoints2", "continuPoints3"];

  function tematicCalculate() {  
    tematicPointsFull = document.getElementById('tematic').value;
    //console.log('Loeaded tematic points: '+tematicPointsFull);

    for (var i=0; i <4 ; i++) {
      tematicPoints[i] = tematicPointsFull * tematicke[i];
      document.getElementById('tematic'+i).value = Math.round(tematicPoints[i]);
      //console.log('Tematic '+i+': '+tematicPoints[i]);
    }
  }

  function continuCalculate() {  
    continuPointsFull = document.getElementById('continu').value;
    //console.log('Loeaded continu points: '+continuPointsFull);

    for (var i=0; i <4 ; i++) {
      continuPoints[i] = continuPointsFull * priebezne[i];
      document.getElementById('continu'+i).value = Math.round(continuPoints[i]);
      //console.log('Tematic '+i+': '+continuPoints[i]);
    }
  }

  document.getElementById('tematicCalculate').addEventListener('click', () => {
    tematicCalculate();
  });

  document.getElementById('continuCalculate').addEventListener('click', () => {
    continuCalculate();
  });

}) ();
