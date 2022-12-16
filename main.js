const parallax = document.getElementById("home");
window.addEventListener("scroll", function()
{
    let value = window.pageYOffset;
    home.style.backgroundPositionY = value * 0.5 + "px";    
})

function showSections(){

  let checkboxes={
      Reading: document.getElementById("reading"),
      Swimming: document.getElementById("swimming"),
      Cricket: document.getElementById("cricket"),
      Movies: document.getElementById("movies"),
  };

  let msg="Selected hobbies: ";
  let selected_hobbies_count =0;

  for(let i=0;i<4;i++){
      if(checkboxes[Object.keys(checkboxes)[i]].checked){
          msg += Object.keys(checkboxes)[i] + ", ";
          selected_hobbies_count++;
      }
  }

  if(selected_hobbies_count === 0){
      alert("Please select atleast one hobby!");
      return;
  }


  if(confirm(msg)){
      var heading = document.getElementById("section_heading");
      heading.style.display='block';

      for(let i=0;i<4;i++){
          var x = document.getElementById("section_"+Object.keys(checkboxes)[i]);

          if(checkboxes[Object.keys(checkboxes)[i]].checked){ 
              x.style.display="block";
          } else{
              x.style.display="none";
          }
      }
  }
}









