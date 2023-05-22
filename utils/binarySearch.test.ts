import { json } from 'stream/consumers';
import binarySearch from './binarySearch';
describe('binarySearch', () => {
    const users = [
        { id: 1, name: 'User 1', username: 'user1', email: 'user1@example.com' },
        { id: 2, name: 'User 2', username: 'user2', email: 'user2@example.com' },
        { id: 3, name: 'User 3', username: 'user3', email: 'user3@example.com' },
        { id: 4, name: 'User 4', username: 'user4', email: 'user4@example.com' },
        { id: 5, name: 'User 5', username: 'user5', email: 'user5@example.com' },
        { id: 6, name: 'User 6', username: 'user6', email: 'user6@example.com' },
        { id: 7, name: 'User 7', username: 'user7', email: 'user7@example.com' },
      ];

  it('should return the user if found in the array', () => {
    expect(JSON.stringify(binarySearch(users, 3, 0, users.length - 1))).toEqual( JSON.stringify(users[2]));
  });
  it('should return null if the user is not found in the array', () => {
    expect(binarySearch(users, 8, 0, users.length - 1)).toBeNull();
  });

  it('should return null if the start is greater than the end', () => {
    expect(binarySearch(users, 5, 4, 2)).toBeNull();
  });
});