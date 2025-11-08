import matplotlib.pyplot as plt
import numpy as np

# Perpetuals Volume Data
dates = ['Jul\n2021',
         'Aug\n2021' ,
         'Sept\n2021',
         'Oct\n2021', 
         'Nov\n2021', 
         'Jan\n2022', 
         'Apr\n2022', 
         'Jul\n2022', 
         'Oct\n2022', 
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

volumes = [0.022, 
           0.18, 
           1.8, 
           8.7, 
           2.6,
           1.2, 
           2.4, 
           0.9,
           1.19,
           3.4,
           0.8,
           1,
           1.29,
           3,
           9,
           5.6,
           6,
           6,
           13,
           21,
           56,
           34
           ]

plt.figure(figsize=(12, 6), facecolor='white')
plt.rcParams['font.family'] = 'serif'
plt.rcParams['font.serif'] = ['Times New Roman']
plt.rcParams['font.size'] = 12

# Plot bar chart
x_pos = np.arange(len(dates))
plt.bar(x_pos, volumes, color='blue', edgecolor='black', linewidth=2, width=0.8)

# Grid
plt.grid(True, linestyle='--', alpha=0.5, color='gray', axis='y')

# Labels and ticks
plt.xticks(x_pos, dates, rotation=45, ha='right')
plt.ylabel('Daily Volume (Billions USD)', fontsize=13)
plt.ylim(0, 60)

ax = plt.gca()
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)

# Tight layout
plt.tight_layout()

# Save figure
plt.savefig('perps_volume_chart.png', dpi=300, bbox_inches='tight', facecolor='white')
print("Perpetuals chart saved as 'perps_volume_chart.png'")

# Display
plt.show()
