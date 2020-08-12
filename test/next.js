switch(currentQuestion) {
  case 0:
    currentQuestion = 1;
    $questions.get(currentQuestion).show()
    break;
  case 1:
    var age_group = document.getElementsByName('ageGroup');
    age_group_value = "";
    for(var i = 0; i < age_group.length; i++){
      if(age_group[i].checked){
        age_group_value = age_group[i].value;
      }
    }
    if (age_group_value = "parentInfant"){
      currentQuestion = 2;
    }
    else if(age_group_value = "preschool"){
      currentQuestion = 3;
    }
    else if(age_group_value = "schoolAge"){
      currentQuestion = 3;
    }
    else if(age_group_value = "juniorAdult"){
        currentQuestion = 4;
    }
    else{

    }
    break;
  case 2:
    currentQuestion = 3;
    break;
  case 3:
    currentQuestion = 4;
    break;
  default:
  currentQuestion = 1;
  // code block
}
