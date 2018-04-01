//document.addEventListener("DOMContentLoaded", () => {
//  console.log("DOM fully loaded and parsed");
//});

'use strict';

(() => {

  const tematicke1 = 0.90;
  const tematicke2 = 0.75;
  const tematicke3 = 0.50;
  const tematicke4 = 0.30;

  const priebezne1 = 0.90;
  const priebezne2 = 0.75;
  const priebezne3 = 0.60;
  const priebezne4 = 0.46;

  let tematicPoints, tematicPoints1, tematicPoints2, tematicPoints3, tematicPoints4 = 0;
  let continuPoints, continuPoints1, continuPoints2, continuPoints3, continuPoints4 = 0;

  function tematicCalculate() {  
    tematicPoints = document.getElementById('tematic').value;
    //console.log('Loeaded tematic points: '+tematicPoints);

    tematicPoints1 = tematicPoints * tematicke1;
    document.getElementById('tematic1').value = Math.round(tematicPoints1);
    tematicPoints2 = tematicPoints * tematicke2;
    document.getElementById('tematic2').value = Math.round(tematicPoints2);
    tematicPoints3 = tematicPoints * tematicke3;
    document.getElementById('tematic3').value = Math.round(tematicPoints3);
    tematicPoints4 = tematicPoints * tematicke4;
    document.getElementById('tematic4').value = Math.round(tematicPoints4);
  }

  function continuCalculate() {  
    continuPoints = document.getElementById('continu').value;
    //console.log('Loeaded continu points: '+continuPoints);

    continuPoints1 = continuPoints * priebezne1;
    document.getElementById('continu1').value = Math.round(continuPoints1);
    continuPoints2 = continuPoints * priebezne2;
    document.getElementById('continu2').value = Math.round(continuPoints2);
    continuPoints3 = continuPoints * priebezne3;
    document.getElementById('continu3').value = Math.round(continuPoints3);
    continuPoints4 = continuPoints * priebezne4;
    document.getElementById('continu4').value = Math.round(continuPoints4);
  }

  document.getElementById('tematicCalculate').addEventListener('click', () => {
    tematicCalculate();
  });

  document.getElementById('continuCalculate').addEventListener('click', () => {
    continuCalculate();
  });

}) ();
