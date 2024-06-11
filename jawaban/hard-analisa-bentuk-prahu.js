const boatPattern = (n) => {
  let maxColumn = (n - 1) * 5 + (2 + n);
  const loopPattern = (numStar, numSpace) => {
    let pattern = "";

    for (let j = 0; j < numSpace; j++) {
      pattern += " ";
    }

    for (let j = 0; j < numStar; j++) {
      pattern += "*";
    }

    for (let j = 0; j < numSpace; j++) {
      pattern += " ";
    }
    console.log(pattern);
  };

  for (let i = 0; i < n; i++) {
    var numStar = i * 2 + 1;
    var numSpace = (maxColumn - numStar) / 2;
    loopPattern(numStar, numSpace);
  }

  for (let i = 0; i < n; i++) {
    let numSpace = i * 2;
    let numStar = maxColumn - numSpace * 2;
    loopPattern(numStar, numSpace);
  }
};

boatPattern(1);
