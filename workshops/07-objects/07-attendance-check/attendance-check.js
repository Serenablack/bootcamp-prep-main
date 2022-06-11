let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  let arr = [];
  for (i = 0; i < classRoom.length; i++) {
    let obj2 = classRoom[i];
    let objName = Object.keys(obj2)[0];
    let arr2 = obj2[objName];
    for (j = 0; j < arr2.length; j++) {
      let obj3 = arr2[j];
      let dayName = Object.keys(obj3)[0];
      let dayValue = obj3[dayName];
      if (day === dayName && dayValue) {
        arr.push(objName);
      }
    }
  }
  return arr;
}
attendanceCheck("Monday");
