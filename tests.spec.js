const encryptPartitionKey = require('./encrypt-partition-key');

test('Should encrypt partition key 1 (string) and get same result', () => {
  expect(encryptPartitionKey("1")).toBe("ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa");
});

test('Should encrypt partition key 2 (string) and get same result', () => {
  expect(encryptPartitionKey("2")).toBe("564e1971233e098c26d412f2d4e652742355e616fed8ba88fc9750f869aac1c29cb944175c374a7b6769989aa7a4216198ee12f53bf7827850dfe28540587a97");
});

test('Should encrypt partition key 3 (int) and get same result', () => {
  expect(encryptPartitionKey(3)).toBe("73fb266a903f956a9034d52c2d2793c37fddc32077898f5d871173da1d646fb80bbc21a0522390b75d3bcc88bd78960bdb73be323ad5fc5b3a16089992957d3a");
});

test('Should encrypt partition key 4 (int) and get same result', () => {
  expect(encryptPartitionKey(4)).toBe("37f558134baa535903c6a88931c8122e334368bf951f2cada569b11774ef9795ef6d2ac961d13ee44a0c837db3817bb9db68ac3bdfb8b19a1308618484a9da8f");
});