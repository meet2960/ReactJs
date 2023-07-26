function outer() {
  let name = "Lexical Scope";

  function inner() {
    let innerVariable = "innerfunction Variable";
    console.log("Inner Function", name);
  }

  function innerTwo() {
    console.log("Inner Two Function", name);
    // console.log("Inner One Variable", innerVariable); // Not Accessible
  }
  //   console.log("Inner Function Variable", innerVariable); // Not Accessible
  inner();
  innerTwo();
}
outer();
