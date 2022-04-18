function checkObj(obj, checkProp) {
  // Only change code below this line
  let check = obj.hasOwnProperty(checkProp)
  if (check === true) {
    return obj[checkProp]
  } else {
    return 'Not Found'
  }
  // Only change code above this line
}
