# 載入 numpy 物件
import numpy as np

# 逐元運算 (elementwise)(Shapes必須相同)
# data1 = np.array([3, 2, 10])
# data2 = np.array([1, 3, 6])
# result = data1 + data2
# print("加法", result) # 加法 [ 4  5 16]
# result = data1 * data2
# print("乘法", result) # 乘法 [ 3  6 60]
# result = data1 > data2
# print("大於", result) # 大於 [ True False  True]
# result = data1 == data2
# print("等於", result) # 等於 [False False False]

# 矩陣運算 (matrix)
# data1 = np.array(
#     [1, 3]
# ) # 1 x 2
# data2 = np.array([
#     [2, -1, 3],
#     [-2, 4, 1]
# ]) # 2 x 3
# result = data1.dot(data2) # 1 x 3
# result = data1@data2 # 1 x 3, only for python version 3.5~
# print("內積", result) # 內積 [-4 11  6]
# 外積 A x B = [A-11 x B-all A-12 x B-all ...
#                   ...         ...       ...  ]
# result = np.outer(data1, data2) # 2 x 6
# print("外積", result)
                    # 外積 [[ 2 -1  3 -2  4  1] => A-11 x B-all
                    #       [ 6 -3  9 -6 12  3]] => A-12 x B-all

# 統計運算 (statistics)
# ndarray：多維陣列，簡稱「陣列」
data = np.array([
    [2, 1, 7],
    [-5, 3, 8]
]) # 2 x 3
# result = data.sum()
# print("總和", result) # 總和 16
# result = data.sum(axis = 0) # 針對欄(直向)做總和 column (針對第一個維度做總和)
# print(result) # [-3  4 15]
# result = data.sum(axis = 1) # 針對列(橫向)做總和 row (針對第二個維度做總和)
# print(result) # [10  6]

# result = data.max()
# print("最大值", result) # 最大值 8
# result = data.max(axis = 0)
# print(result) # [2 3 8]

# result = data.mean()
# print("平均數", result) # 平均數 2.6666666666666665
# result = data.mean(axis = 1)
# print(result) # [3.33333333 2.        ]

# result = data.std()
# print("標準差", result) # 標準差 4.268749491621899

result = data.cumsum()
print("逐值累加", result) # [ 2  3 10  5  8 16]
result = data.cumsum(axis = 0)
print(result) # 針對欄做逐值累加 (針對第一個維度做逐值累加)
                # [[ 2  1  7]
                #  [-3  4 15]]

# axis 的指定不能超過最高維度的上限 (1st: 0, 2nd: 1, ...etc.)