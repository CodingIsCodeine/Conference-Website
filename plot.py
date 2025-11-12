import matplotlib.pyplot as plt

# Given data
x = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
y1 = [0,0.9817, 1.12157, 1.1946, 1.10396, 1.019192, 0.942117, 0.90224, 0.895526, 0.92574, 1]
y2 = [1,0.92574,0.895526,0.90224,0.942117,1.019192,1.10396,1.1946,1.12157,0.9817,0]
# Plotting
plt.plot(x, y1, marker='o', linestyle='-', linewidth=2, label='y1')
plt.plot(x, y2, marker='o', linestyle='-', linewidth=2, label='y2')
plt.title("Plot of y1 and y2 vs x")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.legend()
plt.show()
