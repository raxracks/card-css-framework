if(!window.matchMedia("only screen and (max-width: 760px)").matches) {
  document.location.href = "/widescreen.html";
}

window.addEventListener("load", e => {
  let test_switch = document.getElementById("test-switch");
  
  test_switch.addEventListener("change", () => {
    document.getElementById("switch-state").innerText = "switch is " + (test_switch.checked ? "on" : "off");
  });
});
