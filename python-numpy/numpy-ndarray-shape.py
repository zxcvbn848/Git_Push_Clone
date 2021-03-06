# 載入 numpy 套件
import numpy as np
# 多維陣列維度/形狀操作

# 觀察資料形狀
# data = np.ones(10) # [1, 1, ...] 共 10 個 1
# print(data) # [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
# data = np.array([
#     [3, 1, 5],
#     [1, 2, 3]
# ]) # 2 x 3
# print(data.shape) # (2, 3)

# 資料轉置：主要針對二維陣列(矩陣)
# data = np.array([
#     [2, 4, 1],
#     [1, 5, 0]
# ])
# print(data.shape) # (2, 3)
# print(data.T) 
#             # [[2 1]
#             #  [4 5]
#             #  [1 0]]
# print(data.T.shape) # (3, 2)

# 扁平化資料
# data = np.array([
#     [
#         [2, 1, 3], [1, 2, 3]
#     ],
#     [
#         [0, 2, 1], [8, 9, 10]
#     ]
# ]) 
# print(data.shape) # (2, 2, 3)
# newData = data.ravel() # 會回傳一筆新資料，本來的資料不受影響
# print(newData) # [ 2  1  3  1  2  3  0  2  1  8  9 10]
# print(newData.shape) # (12, 1)

# 重塑資料形狀
# data = np.array([
#     [
#         [2, 1, 3], [1, 2, 3]
#     ],
#     [
#         [0, 2, 1], [8, 9, 10]
#     ]
# ]) # 2 x 2 x 3 = 12
# newData = data.reshape(3, 4) # 3 x 4 = 12 # 會回傳一筆新資料，本來的資料不受影響
# print(newData)
                # [[ 2  1  3  1]
                #  [ 2  3  0  2]
                #  [ 1  8  9 10]]
# newData = data.reshape(3, 5) # ValueError: cannot reshape array of size 12 into shape (3,5)
# newData = data.reshape(1, 2, 6) 
# print(newData)
                # [[[ 2  1  3  1  2  3]
                #   [ 0  2  1  8  9 10]]]

# 初始化
# data = np.zeros(18).reshape(3, 6)
# print(data)
#             # [[0. 0. 0. 0. 0. 0.]
#             #  [0. 0. 0. 0. 0. 0.]
#             #  [0. 0. 0. 0. 0. 0.]]

# 連續整數的多維陣列
data = np.arange(9).reshape(3, 3) # 將一維陣列重塑成其他形狀的多維陣列
print(data)
            # [[0 1 2]
            #  [3 4 5]
            #  [6 7 8]]
print(data.T)
            # [[0 3 6]
            #  [1 4 7]
            #  [2 5 8]]
            