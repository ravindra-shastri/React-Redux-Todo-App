export function add(value) {
  return {
    type: 'add',
    value
  }
}
export function remove(value) {
  return {
    type: 'delete',
    value
  }
}
export function isDone(value) {
  return {
    type: 'isDone',
    value
  }
}
