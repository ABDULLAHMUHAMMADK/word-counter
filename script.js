let inpt = document.getElementById("inpt");
inpt.addEventListener("input", function () {
  let wrd = document.getElementById("wrd");
  let chrt = document.getElementById("chrt");
  let sent = document.getElementById("sent");
  let paragrapgh = document.getElementById("para");
  let text = inpt.value;

  let words_count = text.split(" ").length - 1;
  let chrt_count = inpt.value.length;
  chrt.innerHTML = chrt_count;
  wrd.innerHTML = words_count;

  let sent_count = text.split("." ).length - 1;
  sent.innerHTML = sent_count;

  let para = inpt.value;
  let para_count = para.split("\n").length - 1;
  paragrapgh.innerHTML = para_count;
});
