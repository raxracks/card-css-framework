window.addEventListener("load", e => {
  let labelled_switches = document.getElementsByClassName("labelled-switch");
  
  for(let i = 0; i < labelled_switches.length; i++) {
    let el = labelled_switches[i];
    el.classList.add("w-full");
    el.classList.add("flex");
    el.classList.add("space-between");
    
    let span = document.createElement("span");
    span.innerText = el.dataset.text;
    
    let label = document.createElement("label");
    label.classList.add("switch");
    label.dataset.id = el.dataset.id;
    
    el.appendChild(span);
    el.appendChild(label);
  }
  
  let switches = document.getElementsByClassName("switch");
  
  for(let i = 0; i < switches.length; i++) {
    let el = switches[i];
    
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = el.dataset.id;
    input.checked = el.dataset.checked == "true";
    let span = document.createElement("span");
    span.classList.add("slider");
    span.classList.add("round");
    
    el.appendChild(input);
    el.appendChild(span);
  };
});
