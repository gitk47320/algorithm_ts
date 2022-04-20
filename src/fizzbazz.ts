// fizzbazz

const fizzbazz = () : void => {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log('fizzbazz')
    } else if (i % 3 === 0) {
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('bazz')
    } else {
      console.log(i)
    }
  }
}

fizzbazz()
