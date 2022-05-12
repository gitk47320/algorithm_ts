const dfsPreOrder = (idx: number): void => {
  const tree: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  console.log(idx);
  for (const el of tree[idx]) {
    dfsPreOrder(el);
  }
};

const dfsPostOrder = (idx: number): void => {
  const tree: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  for (const el of tree[idx]) {
    dfsPostOrder(el);
  }
  console.log(idx);
};

const dfsInOrder = (idx: number): void => {
  const tree: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
    [11, 12],
    [13, 14],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];
  if (tree[idx].length === 2) {
    dfsInOrder(tree[idx][0]);
    console.log(idx);
    dfsInOrder(tree[idx][1]);
  }
  if (tree[idx].length === 1) {
    dfsInOrder(tree[idx][0]);
    console.log(idx);
  }
  if (tree[idx].length === 0) {
    console.log(idx);
  }
};

// 行きがけ
dfsPreOrder(0);

// 帰りがけ
dfsPostOrder(0);

// 通りがけ
dfsInOrder(0);
