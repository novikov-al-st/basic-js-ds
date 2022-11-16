const { NotImplementedError, ListNode } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    if(!this._root) {
      this._root = new Node(data);
      return;
    } 
    
    let current = this._root;
    while(current) {
      if(data < current.data) {
        if(!current.left){
          current.left = new Node(data);
          break;
        } else {
          current = current.left;
        }
      } else if(data > current.data) {
        if(!current.right){
          current.right = new Node(data);
          break;
        } else {
          current = current.right;
        }
      }
    }
  }

  has(data) {
    let current = this._root;
    while(current) {
      if(current.data == data){
        return true;
      } else {
        current = data < current.data ? current.left : current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this._root;
    while(current && current.data){
      if(current.data == data){
        return current;
      } else {
        current = data < current.data ? current.left : current.right;
      }
    }
    return null;
  }

  remove(data) {
    let current = this._root;
    let parent;
    let left;
    let right;
    let parentRelation = '';
    while(current){
      if(current.data == data){
        left = current.left;
        right = current.right;
        if(!parent) {
          if(!left){
            this._root = current.right;
          } else if(!right){
            this._root = current.left;
          } else {
            this._root = current.right;
            current = right;
            while(current.left) {
              current = current.left;
            }
            current.left = left;
          }
          return;
        } else {
          if(!left){
            if(parentRelation == 'left'){
              parent.left = right;
            } else {
              parent.right = right;
            }
          } else if(!right) {
            if(parentRelation == 'left'){
              parent.left = left;
            } else {
              parent.right = left;
            }
          } else {
            if(parentRelation = 'left') {
              parent.left = right;
              current = right;
              while(current.left) {
                current = current.left;
              }
              current.left = left;
            } else {
              parent.right = left;
              current = left;
              while(current.right) {
                current = current.right;
              }
              current.right = right;
            }
          }
          return;
        }
      } else {
        parent = current;
        parentRelation = data < current.data ? 'left' : 'right';
        current = data < current.data ? current.left : current.right;
      }
    }
  }

  min() {
    let current = this._root;
    if(!current) {
      return null;
    }
    
    while(current.left){
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this._root;
    if(!current) {
      return null;
    }
    
    while(current.right){
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};