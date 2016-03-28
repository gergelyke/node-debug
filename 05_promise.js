new Promise((resolve, reject) => {
  console.log(1)
  resolve()
}).then(() => 2)
  .then(() => {
    console.log(2)
    a;
    console.log(2.5)
  })
  .catch((e) => {
    console.log(3)
  })
  .then(() => {
    console.log(4)
  })
  .catch(() => {
    console.log(5)
  })
