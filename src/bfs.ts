const bfs = ():void => {
  let tree: number[][] = [[1, 2], [3, 4], [5, 6], [7, 8], [9 ,10], [11, 12], [13, 14], [], [], [], [], [], [], [], []]
  let data: number[] = [0]
  while(data.length > 0) {
    let idx = Number(data.shift())
    console.log(idx)
    for(const el of tree[idx]) {
      data.push(Number(el))
    }
  }
}

bfs()