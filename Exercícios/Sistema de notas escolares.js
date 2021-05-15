let note;

function getnote(note) {
  if (note >= 90 && note <= 100) {
    note = "A";
  } else if (note >= 80 && note <= 89) {
    note = "B";
  } else if (note >= 70 && note <= 79) {
    note = "C";
  } else if (note >= 60 && note <= 69) {
    note = "D";
  } else if (note < 60 && note >= 0) {
    note = "F";
  } else {
    note = "Note Invalid";
  }

  console.log("Your grade is: ", note);
  if (note == "A") {
    console.log("Congratulations");
  }
  if (note == "F") {
    console.log("See you in recovery");
  }
  return note;
}

getnote(95);
getnote(80);
getnote(74);
getnote(67);
getnote(59);
getnote(101);
getnote(0);
getnote(-1);
