main()

async function main () {
  await sleep(60 * 1000)
  console.log("ok")
}

async function sleep(time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res()
    }, time)
  })
}
