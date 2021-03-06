# 1-Python NumPy 入門教學、快速開始 By 彭彭
# In numpy-start.py:
# Numpy: 用陣列(array)代替列表(list)處理資料
#        適合處理多維度的資料
# Why to learn: 陣列運算速度高於列表
#               Pandas & TensorFlow 的基礎
# pip install numpy
# ===============
# 載入 numpy
import numpy as np
# 根據列表建立 ndarray 物件
ndarr = np.array([3, 4, -5])
# 觀察 ndarray 物件資料
print(ndarr) # [ 3  4 -5]
print(ndarr.size) # 3
# =============================================
# 2-Python NumPy 多維陣列 ndarray 基礎 By 彭彭
# In numpy-ndarray.py:
# 多維陣列 N-Dimensional Array(簡稱ndarray)
# 建立陣列:
# 一維陣列：
# 1.根據列表建立： 
np.array([3, 5, 4])
# 2.建立資料未指定的一維陣列： 
np.empty(3)
# 3.建立資料都是 0 的一維陣列： 
np.zeros(3)
# 4.建立資料都是 1 的一維陣列： 
np.ones(3)
# 5.建立連續資料的一維陣列： 
np.arrange(10)

# 二維陣列:
# 1.根據列表建立(3x2)(各層有幾筆資料): 
np.array([
    [1,2], 
    [3,2], 
    [5,0]
])
# 2.建立資料未指定的二維陣列: 
np.empty([3,2])
# 3.建立資料都是 0 的二維陣列: 
np.zeros([3,2])
# 4.建立資料都是 1 的二維陣列: 
np.ones([3,2])

# 三維陣列:
# 1.根據列表建立(2x2x3)(各層有幾筆資料): 
np.array([
    [
        [5,2,4], [1,2,8]
    ], [
        [3,8,2], [4,1,3]
    ]
])
# 2.建立資料未指定的三維陣列: 
np.empty([2, 2, 3])
# 3.建立資料都是 0 的三維陣列: 
np.zeros([2, 2, 3])
# 4.建立資料都是 1 的三維陣列: 
np.ones([2, 2, 3])

# 高維陣列: 需要完全以邏輯來推演
# 1x1x2x2:
np.array([
    [
        [
            [3,2],
            [5,4]
        ]
    ]
])

# 練習:多維陣列的各種方式
# 載入 numpy 套件
import numpy as np
# # 建立一維陣列
data = np.array([3, 2, 6, 4])
print(data) # [3 2 6 4]
data = np.empty(4) # 創造一個有四筆資料的一維陣列，資料未指定
print(data) # [5.e-324 4.e-323 2.e-323 2.e-323]
data = np.zeros(3)
print(data) # [0. 0. 0.]浮點數 float
data = np.ones(3)
print(data) # [1. 1. 1.]浮點數 float
data = np.arange(5) # 從 0 ~ 4 的連續整數
print(data) # [0 1 2 3 4]

# 建立二維陣列
data = np.array([ # 3x3
    [2,3,2], 
    [1,5,2],
    [4,2,1]
])
print(data) # [[2 3 2]
            #  [1 5 2]
            #  [4 2 1]]
data = np.empty([3,3])
print(data) # [[0.00e+000 0.00e+000 0.00e+000]
            #  [0.00e+000 0.00e+000 3.32e-321]
            #  [0.00e+000 0.00e+000 0.00e+000]]
data = np.ones([2,3])
print(data) # [[1. 1. 1.]
            #  [1. 1. 1.]]

# 建立三維陣列
data = np.array([ # 2x2x2
    [
        [3,1],[1,2]
    ],
    [
        [2,5],[10,2]
    ]
])
print(data)
            # [[[ 3  1]
            #   [ 1  2]]

            #  [[ 2  5]
            #   [10  2]]]
data = np.zeros([3,1,3])
print(data)
            # [[[0. 0. 0.]]

            #  [[0. 0. 0.]]

            #  [[0. 0. 0.]]]

# 建立高維陣列
data = np.array([ # 1x1x2x3
    [
        [
            [3,2,1],
            [5,5,10]
        ]
    ]
])
print(data)
            # [[[[ 3  2  1]
            #    [ 5  5 10]]]]
data = np.ones([2,1,1,2])
print(data)
            # [[[[1. 1.]]]


            #  [[[1. 1.]]]]
# =============================================
# 3-Python NumPy 多維陣列 ndarray 基礎運算功能 By 彭彭
# 多維陣列的運算：
# 1. 逐元運算(elementwise)
# 2. 矩陣運算(matrix)
# 3. 統計運算(statistics)

# 逐元運算：
# 1. 建立兩個多維陣列
data1 = np.array([3, 4, 1])
data2 = np.array([-2, 5, -8])
# 2. 逐一元素運算
data1 + data2
data1 - data2
# * / > == <= 同理

# 矩陣運算：
# 1. 建立兩個多維陣列
data1 = np.array([
    [2, 1]
]) # 1 x 2
data2 = np.array([
    [3, 2, 0], [3, 1, -1]
]) # 2 x 3
# 2. 矩陣運算
data1.dot(data2) # 內積 1 x 3
data1@data2 # 內積 1 x 3
np.outer(data1, data2) # 外積 2 x 6

# 統計運算：
# 1. 建立一個多維陣列
data = np.array([ # 2 x 3
    [2, 1, 7],
    [3, -5, 8]
])
# 2. 統計運算
data.sum() # 全部加總 
data.sum(axis = 0) # 加總 column (直向)
data.sum(axis = 1) # 加總 row (橫向)
data.max() # 全部最大值
data.min() # 全部最小值
data.cumsum() # 逐值累加
data.mean() # 平均數
data.std() # 標準差

# In numpy-ndarray-op.py:
# 載入 numpy 物件
import numpy as np

# 逐元運算 (elementwise)(Shapes必須相同)
data1 = np.array([3, 2, 10])
data2 = np.array([1, 3, 6])
result = data1 + data2
print("加法", result) # 加法 [ 4  5 16]
result = data1 * data2
print("乘法", result) # 乘法 [ 3  6 60]
result = data1 > data2
print("大於", result) # 大於 [ True False  True]
result = data1 == data2
print("等於", result) # 等於 [False False False]

# 矩陣運算 (matrix)
data1 = np.array(
    [1, 3]
) # 1 x 2
data2 = np.array([
    [2, -1, 3],
    [-2, 4, 1]
]) # 2 x 3
result = data1.dot(data2) # 1 x 3
result = data1@data2 # 1 x 3, only for python version 3.5~
print("內積", result) # 內積 [-4 11  6]
# 外積 A x B = [A-11 x B-all A-12 x B-all ...
#                   ...         ...       ...  ]
result = np.outer(data1, data2) # 2 x 6
print("外積", result)
                    # 外積 [[ 2 -1  3 -2  4  1] => A-11 x B-all
                    #       [ 6 -3  9 -6 12  3]] => A-12 x B-all

# 統計運算 (statistics)
# ndarray：多維陣列，簡稱「陣列」
data = np.array([
    [2, 1, 7],
    [-5, 3, 8]
]) # 2 x 3
result = data.sum()
print("總和", result) # 總和 16
result = data.sum(axis = 0) # 針對欄(直向)做總和 column (針對第一個維度做總和)
print(result) # [-3  4 15]
result = data.sum(axis = 1) # 針對列(橫向)做總和 row (針對第二個維度做總和)
print(result) # [10  6]

result = data.max()
print("最大值", result) # 最大值 8

result = data.mean()
print("平均數", result) # 平均數 2.6666666666666665
result = data.mean(axis = 1)
print(result) # [3.33333333 2.        ]

result = data.std()
print("標準差", result) # 標準差 4.268749491621899

result = data.cumsum()
print("逐值累加", result) # [ 2  3 10  5  8 16]
result = data.cumsum(axis = 0)
print(result) # 針對欄做逐值累加 (針對第一個維度做逐值累加)
                # [[ 2  1  7]
                #  [-3  4 15]]

# axis 的指定不能超過最高維度的上限 (1st: 0, 2nd: 1, ...etc.)                
# =============================================
# 4-Python NumPy 多維陣列 ndarray 維度、形狀操作 By 彭彭
# 多維陣列的形狀 Shape：
# 1.維度：資料的層次
# 2.形狀：同時表達資料的層次，和每個層次的資料數量
# Example:
[1, 2, 3, 4, 5, 6, 7, 8] # (8,)
[
    [1, 2, 3, 4],
    [5, 6, 7, 8]
] # (2, 4)
[
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
] # (2, 2, 2)

# 觀察資料形狀：利用 shape 屬性取得多維陣列的形狀
# Example:
data = np.array([3, 4, 1])
data.shape # (3,)
data = np.array([
    [2, 4],
    [1, 5]
])
data.shape # (2, 2)

# 資料轉置：利用 T 屬性取得多維陣列的轉置
# Example:
data = np.array([
    [2, 4, 1],
    [1, 5, 0]
])
data.shape # (2, 3)
data.T.shape # 反過來 (3, 2)

# 扁平化資料：把多維度的資料打平成一維陣列
# Example:
data = np.array([
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
])
data.ravel() # [1, 2, 3, 4, 5, 6, 7, 8]

# 重塑資料形狀：改變資料形狀，資料總數量必須要一樣
# Example:
data = np.array([
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
]) # 2 x 2 x 2 = 8
data.reshape(4, 2) # 4 x 2 = 8
data.reshape(3, 3) # 3 x 3 = 9 錯誤
data = np.zeros(18).reshape(2, 3, 3) # 初始化：將 18 個 0 的一維陣列，重塑成 2 x 2 x 3 的多維陣列

# In numpy-ndarray-shape.py:
# 載入 numpy 套件
import numpy as np
# 多維陣列維度/形狀操作

# 觀察資料形狀
data = np.ones(10) # [1, 1, ...] 共 10 個 1
print(data) # [1. 1. 1. 1. 1. 1. 1. 1. 1. 1.]
data = np.array([
    [3, 1, 5],
    [1, 2, 3]
]) # 2 x 3
print(data.shape) # (2, 3)

# 資料轉置：主要針對二維陣列(矩陣)
data = np.array([
    [2, 4, 1],
    [1, 5, 0]
])
print(data.shape) # (2, 3)
print(data.T) 
            # [[2 1]
            #  [4 5]
            #  [1 0]]
print(data.T.shape) # (3, 2)

# 扁平化資料
data = np.array([
    [
        [2, 1, 3], [1, 2, 3]
    ],
    [
        [0, 2, 1], [8, 9, 10]
    ]
]) 
print(data.shape) # (2, 2, 3)
newData = data.ravel() # 會回傳一筆新資料，本來的資料不受影響
print(newData) # [ 2  1  3  1  2  3  0  2  1  8  9 10]
print(newData.shape) # (12, 1)

# 重塑資料形狀
data = np.array([
    [
        [2, 1, 3], [1, 2, 3]
    ],
    [
        [0, 2, 1], [8, 9, 10]
    ]
]) # 2 x 2 x 3 = 12
newData = data.reshape(3, 4) # 3 x 4 = 12 # 會回傳一筆新資料，本來的資料不受影響
print(newData)
                # [[ 2  1  3  1]
                #  [ 2  3  0  2]
                #  [ 1  8  9 10]]
newData = data.reshape(3, 5) # ValueError: cannot reshape array of size 12 into shape (3,5)
newData = data.reshape(1, 2, 6) 
print(newData)
                # [[[ 2  1  3  1  2  3]
                #   [ 0  2  1  8  9 10]]]

# 初始化
data = np.zeros(18).reshape(3, 6)
print(data)
            # [[0. 0. 0. 0. 0. 0.]
            #  [0. 0. 0. 0. 0. 0.]
            #  [0. 0. 0. 0. 0. 0.]]

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
# =============================================
# 5-Python NumPy 多維陣列 ndarray 索引、切片操作 By 彭彭
# 資料的索引(Indexing)：概念上和 Python 列表的索引相同
# 按照順序，每個資料都有一個索引(編號)，從 0 開始遞增
# 透過多維陣列(索引)的語法可以取得對應的資料
data = np.array([3, 4, 1])
data[0] # 3
data[1] # 4
data[2] # 1

# 多維度資料的索引：使用逗號分開不同維度的索引
# 透過多維陣列[索引, 索引, ...]的語法可以取得對應的資料
data = np.array([
    [1, 5, 2],
    [3, -1, 10]
])
data[0, 2] # 2
data[1, 1] # -1
data[1, 0] # 3

# 資料的切片(Slicing)：取得多維陣列中的部分資料
# 取得對應的資料，語法為：多維陣列[開始索引:結束索引]
data = np.array([3, 4, 1, 5])
data[0: 2] # [3, 4]
data[1: 4] # [4, 1, 5]
data[2:] # [1, 5]
data[: 3] # [3, 4, 1]
data[:] # [3, 4, 1, 5]

# 多維度資料的切片：分別決定每一個維度的索引範圍
# 語法為：多維陣列[開始索引:結束索引, 開始索引:結束索引, ...]
data = np.array([
    [3, 1, 2], [1, 2, 5],
    [5, 2, 2], [3, -5, 1]
])
data[2: 4, 1: 3] # [[2, 2], [-5, -1]]
data[0: 2, 1] # [1, 2]
# 使用 ... 代表我全都要
# Example:
data = np.array([
    [
        [3, 1, 2], [1, 0, 5]
    ],
    [
        [5, 4, 3], [1, 3, -3]
    ]
])
# ... 在後面：後面的維度全都要
data[1, ...] # [[5, 4, 3], [1, 3, -3]]
# ... 在前面：前面的維度全都要
data[..., 0: 2] # [[[3, 1], [1, 0]], [[5, 4], [1, 3]]]

# In numpy-ndarray-indexing.py:
# 載入 numpy 套件
import numpy as np
# 多維陣列的索引 Indexing
# 單維度的資料
data = np.array([1, 5, 2, 10])
print(data[2]) # 2
# 多維度的資料
data = np.array([
    [0, 1],
    [10, -5],
    [2, 6]
])
print(data[0, 1]) # 1
print(data[1, 0]) # 10
print(data[2, 0]) # 2

# 多維陣列的切片 Slicing
# 單維度的切片
data = np.array([-1, -5, 2, 3])
print(data[0: 3]) # [-1 -5 2]
print(data[0: 2]) # [-1 -5]
print(data[2:]) # [2 3]
print(data[:]) # [-1 -5 2 3]
# 多維度的切片
data = np.array([
    [0, 1, 2], [3, 4, 5],
    [5, 4, 3], [2, 1, 0]
])
print(data[1: 3, 0: 2]) 
                    # [[3 4]
                    #  [5 4]]
print(data[0: 2, 1]) # [1 4] 
# 使用 ... 代表我全都要
data = np.array([
    [
        [8, 1, 3],
        [-5, 5, 2]
    ],
    [
        [0, 1, 6],
        [4, 4, -3]
    ]
]) # (2, 2, 3)
print(data[0, ...]) 
                    # [[ 8  1  3]
                    #  [-5  5  2]]
print(data[..., 1: 3]) 
                    # [[[ 1  3]
                    #   [ 5  2]]

                    #  [[ 1  6]
                    #   [ 4 -3]]]


# =============================================
# 6-Python NumPy 多維陣列 ndarray 合併操作 By 彭彭
# 合併(Stacking)操作：將樹個多維陣列，合併成一個
# 合併第一個維度
np.vstack((陣列一, 陣列二))
# 合併第二個維度
np.hstack((陣列一, 陣列二))
# Example:
arr1 = np.array([
    [3, 4]
]) # (1, 2)
arr2 = np.array([
    [5, 6]
]) # (1, 2)

result1 = np.vstack((arr1, arr2))
                                # [[3 4]
                                #  [5 6]] (2, 2)
resutl2 = np.hstack((arr1, arr2))
                                # [[3 4 5 6]] 1, 4

# In numpy-stacking.py:
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
print(result1)
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
print(result2)
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
# =============================================
                                