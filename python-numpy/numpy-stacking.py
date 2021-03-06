# 載入 numpy 套件
import numpy as np
# 準備測試資料
arr1 = np.array([
    [1, 2, 3],
    [4, 5, 6]
]) # (2, 3)
arr2 = np.array([
    [7, 8, 9],
    [10, 11, 12]
]) # (2, 3)
arr3 = np.array([
    [13, 14],
    [15, 16]
]) # (2, 2)
# 合併第一個維度
result1 = np.vstack((arr1, arr2))
# print(result1)
"""
((2 + 2) , 3) => (4, 3)
"""
                # [[ 1  2  3]
                #  [ 4  5  6]
                #  [ 7  8  9]
                #  [10 11 12]] # (4, 3)
# 合併第二個維度
result2 = np.hstack((arr1, arr2))
"""
(2, (3 + 3)) => (2, 6)
"""
# print(result2)
                # [[ 1  2  3  7  8  9]
                #  [ 4  5  6 10 11 12]]
# 合併三個陣列
result3 = np.hstack((arr1, arr2, arr3))
"""
(2, (3 + 3 + 2)) => (2, 8)
"""
print(result3)
                # [[ 1  2  3  7  8  9 13 14]
                #  [ 4  5  6 10 11 12 15 16]]
