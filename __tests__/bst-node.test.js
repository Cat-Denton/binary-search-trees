import BSTNode from '../src/bst-node.js';

describe('bstNode', () => {

  test('should correctly create a node', () => {
    const node = new BSTNode(36);
    expect(node.data).toEqual(36);
    expect(node.right).toEqual(null);
    expect(node.left).toEqual(null);
  });  
});