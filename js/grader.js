 (function($) {
  "use strict";
  
  /**************************************************
   * Set default grade cut-offs, scaling factors, and max points
   *************************************************/
  
  // Default grade cut-offs
  var gApoint = 90.0;
  var gBpoint = 80.0;
  var gCpoint = 70.0;
  var gDpoint = 60.0;
  // Default scaling factors
  var homeworkSF = 10;
  var labSF = 40;
  var projectSF = 20;
  var presentationSF = 10;
  var midtermSF = 10;
  var finalSF = 10;
  // Default maximum points
  var homeworkM = 0;
  var labM = 0;
  var projectM = 0;
  var presentationM = 0;
  var midtermM = 0;
  var finalM = 0;
  
  
/**************************************************
 * Compute grade
 *************************************************/
  
  var computeGrade = function(){
  var homeworkPoints = Number($('#homework').val());
  var labPoints = Number($('#lab').val());
  var projectPoints = Number($('#project').val());
  var presentationPoints = Number($('#presentation').val());
  var midtermPoints = Number($('#midterm').val());
  var finalPoints = Number($('#final').val());

  if(homeworkPoints > homeworkM){alert("Homework points " + homeworkPoints + " is larger than maximum points " + homeworkM); return;}
  if(labPoints > labM){alert("Lab points " + labPoints + " is larger than maximum points " + labM); return;}
  if(projectPoints > projectM){alert("Project points " + projectPoints + " is larger than maximum points " + projectM); return;}
  if(presentationPoints > presentationM){alert("Presentation points " + presentationPoints + " is larger than maximum points " + presetationM); return;}
  if(midtermPoints > midtermM){alert("Midterm points " + midtermPoints + " is larger than maximum points " + midtermM); return;}
  if(finalPoints > finalM){alert("Final points " + finalPoints + " is larger than maximum points " + finalM); return;}


  var assignments = [];
  assignments.push(homeworkPoints);
  assignments.push(labPoints);
  assignments.push(projectPoints);
  assignments.push(presentationPoints);
  assignments.push(midtermPoints);
  assignments.push(finalPoints);
  
  var scalingFactors = [];
  scalingFactors.push(homeworkSF);
  scalingFactors.push(labSF);
  scalingFactors.push(projectSF);
  scalingFactors.push(presentationSF);
  scalingFactors.push(midtermSF);
  scalingFactors.push(finalSF);
  
  var maxPoints = [];
  maxPoints.push(homeworkM);
  maxPoints.push(labM);
  maxPoints.push(projectM);
  maxPoints.push(presentationM);
  maxPoints.push(midtermM);
  maxPoints.push(finalM);
  
  // Calculate points
  var currentPoints = 0;
  for(var i = 0; i < assignments.length; i++){
  if(maxPoints[i]!==0){
  currentPoints += scalingFactors[i] * assignments[i] / maxPoints[i];
  }
  }
  
  /*
   var currentPoints = homeworkPoints * homeworkSF + labPoints * labSF + projectPoints * projectSF + presentationPoints * presentationSF + midtermPoints * midtermSF + finalPoints * finalSF;*/
  
  // Calculate grade based on the calculated points
  // var currentPoints = Number($('#points').val());
  var currentGrade = 'NA';
  
  if(currentPoints >= gApoint){
  currentGrade = 'A';
  } else if(currentPoints >= gBpoint){
  currentGrade = 'B';
  } else if(currentPoints >= gCpoint){
  currentGrade = 'C';
  } else if(currentPoints >= gDpoint){
  currentGrade = 'D';
  } else{
  currentGrade = 'F';
  }
  
  $('#finalgrade').text(currentGrade);
  
  };
  
  
/**************************************************
 * Save settings
 *************************************************/
  
  // Save grade cut-offs
  var saveGradeCutOffs = function()
  {
  try {
  var aPoint = parseFloat( $('#gradeACutOff').val() );
  localStorage.setItem('gradeACutOff', aPoint);
  gApoint = aPoint;
  // window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  
  try {
  var bPoint = parseFloat( $('#gradeBCutOff').val() );
  localStorage.setItem('gradeBCutOff', bPoint);
  gBpoint = bPoint;
  // window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  
  try {
  var cPoint = parseFloat( $('#gradeCCutOff').val() );
  localStorage.setItem('gradeCCutOff', cPoint);
  gCpoint = cPoint;
  //  window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  
  try {
  var dPoint = parseFloat( $('#gradeDCutOff').val() );
  localStorage.setItem('gradeDCutOff', dPoint);
  gDpoint = dPoint;
  //  window.history.back();
  } catch (ex)
  {
  alert('Points must be a decimal value');
  }
  
  window.history.back();
  };
  
  
  // Check and save scaling factors
  var checkSaveScalingFactor = function(){
  // Check if total ratio is added to 100%
  var totalRatios = (parseFloat($('#homeworkScalingFactor').val()) +
                     parseFloat($('#labScalingFactor').val()) +
                     parseFloat($('#projectScalingFactor').val()) +
                     parseFloat($('#presentationScalingFactor').val()) +
                     parseFloat($('#midtermScalingFactor').val()) +
                     parseFloat($('#finalScalingFactor').val())) * 0.01;
  // If not 100% pop an error message
  // If yes save scaling factors to local storage
  if(totalRatios !== 1){
  alert("Your total ratio is " + totalRatios * 100 + "%!");
  $("#checkRatios").attr("href", "#setScalingFactorsPage");
  }
  else{
  var hwSF = parseFloat($('#homeworkScalingFactor').val());
  var lSF = parseFloat($('#labScalingFactor').val());
  var prjSF = parseFloat($('#projectScalingFactor').val());
  var prsttSF = parseFloat($('#presentationScalingFactor').val());
  var mtSF = parseFloat($('#midtermScalingFactor').val());
  var fnSF = parseFloat($('#finalScalingFactor').val());
  
  localStorage.setItem('homeworkScalingFactor', hwSF);
  localStorage.setItem('labScalingFactor', lSF);
  localStorage.setItem('projectScalingFactor', prjSF);
  localStorage.setItem('presentationScalingFactor', prsttSF);
  localStorage.setItem('midtermScalingFactor', mtSF);
  localStorage.setItem('finalScalingFactor', fnSF);
  
  homeworkSF = hwSF;
  labSF = lSF;
  projectSF = prjSF;
  presentationSF = prsttSF;
  midtermSF = mtSF;
  finalSF = fnSF;
  $("#checkRatios").attr("href", "#setMaxPointsPage");
  }
  };
  
  
  // Save max-points
  var saveMaxSettings = function(){
  var hwMax = Number($('#homeworkMax').val());
  var lMax = Number($('#labMax').val());
  var prjMax = Number($('#projectMax').val());
  var prsttMax = Number($('#presentationMax').val());
  var mtMax = Number($('#midtermMax').val());
  var fnMax = Number($('#finalMax').val());
  
  localStorage.setItem('homeworkMax', hwMax);
  localStorage.setItem('labMax', lMax);
  localStorage.setItem('projectMax', prjMax);
  localStorage.setItem('presentationMax', prsttMax);
  localStorage.setItem('midtermMax', mtMax);
  localStorage.setItem('finalMax', fnMax);
  
  homeworkM = hwMax;
  labM = lMax;
  projectM = prjMax;
  presentationM = prsttMax;
  midtermM = mtMax;
  finalM = fnMax;
  };
  
  
  /**************************************************
   * Clear locally saved settings
   *************************************************/
  
  var cancelSettings = function()
  {
  localStorage.clear();
  
  };
  
  
  
  /**************************************************
   * Show previously saved settings
   *************************************************/
  
  var showSavedGradeCutOffs = function(){
  // When there is no data in local storage it uses default grade cut-offs
  // Case 1: when first time use the app
  // Case 2: when local storage has been cleared in the last use
  // When there is data saved in local storage, it uses the previously set grade-cut-off
  var gradeACutOffSetting = localStorage.getItem('gradeACutOff');
  var gradeBCutOffSetting = localStorage.getItem('gradeBCutOff');
  var gradeCCutOffSetting = localStorage.getItem('gradeCCutOff');
  var gradeDCutOffSetting = localStorage.getItem('gradeDCutOff');
  
  if (gradeACutOffSetting)
  {
  gApoint = parseFloat(gradeACutOffSetting);
  }
  if (gradeBCutOffSetting)
  {
  gBpoint = parseFloat(gradeBCutOffSetting);
  }
  if (gradeCCutOffSetting)
  {
  gCpoint = parseFloat(gradeCCutOffSetting);
  }
  if (gradeDCutOffSetting)
  {
  gDpoint = parseFloat(gradeDCutOffSetting);
  }
  
  // Grade-cut-off values which are previously set (or default) display in the Setting page.
  $('#gradeACutOff').val(gApoint);
  $('#gradeBCutOff').val(gBpoint);
  $('#gradeCCutOff').val(gCpoint);
  $('#gradeDCutOff').val(gDpoint);
  
  };
  
  
  /**************************************************
   * Set up event handler
   *************************************************/
  
  $( document ).on( "ready", function()
                   {
                   $('#saveMaxSettings').on('click', saveMaxSettings);
                   $('#computeGrade').on('click', computeGrade);
                   $('#saveGradeCutOffs').on('click', saveGradeCutOffs);
                   $('#cancelSettings').on('click', cancelSettings);
                   $('#checkRatios').on('click', checkSaveScalingFactor);
                   $('#settingsButton').on('click', showSavedGradeCutOffs);
                   
                   
                   });
  
  // Load plugin
  $( document ).on( "deviceready", function(){
                   StatusBar.overlaysWebView( false );
                   StatusBar.backgroundColorByName("gray");
                   });
  }
  
  
  )(jQuery);