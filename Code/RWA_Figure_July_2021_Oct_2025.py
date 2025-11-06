import matplotlib.pyplot as plt
import numpy as np

# RWA TVL Data
dates = ['Jul\n2021', 
         'Sept\n2021', 
         'Oct\n2021', 
         'Dec\n2021', 
         'Jan\n2022', 
         'Apr\n2022', 
         'Jul\n2022', 
         'Oct\n2022', 
         'Dec\n2022',
         'Jan\n2023', 
         'Apr\n2023', 
         'Jul\n2023', 
         'Oct\n2023', 
         'Jan\n2024', 
         'Apr\n2024', 
         'Jul\n2024', 
         'Oct\n2024', 
         'Jan\n2025', 
         'Apr\n2025', 
         'Jul\n2025', 
         'Sept\n2025', 
         'Oct\n2025']

values = [0.003, 
          0.02, 
          0.025,
          0.153,
          0.166,
          0.145,
          0.155,
          0.24,
          0.656,
          0.757,
          0.917,
          2.2,
          5.5,
          5.6,
          4.3,
          3.4,
          5.3,
          7.1,
          9.6,
          11.7,
          14,
          16.5       
              ]


plt.figure(figsize=(12, 6), facecolor='white')
plt.rcParams['font.family'] = 'serif'
plt.rcParams['font.serif'] = ['Times New Roman']
plt.rcParams['font.size'] = 12

# Plot line chart
plt.plot(dates, values, color='blue', linewidth=2, marker='o', 
         markersize=4, markerfacecolor='black', markeredgecolor='black')

# Grid
plt.grid(True, linestyle='--', alpha=0.5, color='gray')

# Labels
plt.ylabel('TVL (Billions USD)', fontsize=13)
plt.ylim(0, 18)


ax = plt.gca()
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Tight layout
plt.tight_layout()

# Save figure
plt.savefig('rwa_tvl_chart.png', dpi=300, bbox_inches='tight', facecolor='white')
print("RWA chart saved as 'rwa_tvl_chart.png'")

# Display
plt.show()
