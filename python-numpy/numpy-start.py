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