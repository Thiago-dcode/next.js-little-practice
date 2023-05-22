export default function binarySearch(
  arr: Array<User>,
  userId: number,
  start: number,
  end: number
): User | null | void {
  if (start > end) return null;
  const middle = Math.floor((start + end) / 2);
  const user = arr[middle];
  if (user.id === userId) return user;

  if (user.id > userId) return binarySearch(arr, userId, start, middle - 1);
  if (user.id < userId) return binarySearch(arr, userId, middle+1, end);
}
