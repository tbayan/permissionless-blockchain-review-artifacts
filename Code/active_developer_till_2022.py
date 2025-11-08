import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime
import matplotlib.dates as mdates

dates = [
    '2009-01', '2010-01', '2011-01', '2012-01', '2013-01', '2014-01', 
    '2015-01', '2016-01', '2017-01', '2017-06', '2018-01', '2018-06',
    '2019-01', '2019-06', '2020-01', '2020-06', '2021-01', '2021-06',
    '2022-01', '2022-03', '2022-06', '2022-09', '2022-12'
]

developers = [
    50, 100, 150, 200, 300, 500, 
    800, 1200, 1800, 3000, 5500, 8000,
    9500, 10200, 10500, 10800, 10600, 11000,
    12000, 14000, 17500, 22000, 23343
]

date_objects = [datetime.strptime(d, '%Y-%m') for d in dates]


fig, ax = plt.subplots(figsize=(14, 6))


ax.plot(date_objects, developers, linewidth=2, color='blue', marker='o', 
        markersize=4, markerfacecolor='black', markeredgewidth=0)

ax.set_xlabel('Year', fontsize=12, fontweight='bold')
ax.set_ylabel('Developers', fontsize=12, fontweight='bold')
ax.set_title('All Crypto Monthly Active Developers Since 2009', 
             fontsize=14, fontweight='bold', pad=20)

# Add text annotation for December 2022
ax.text(date_objects[-1], developers[-1] + 800, 
        'December 2022\nDevelopers: 23,343',
        fontsize=10, ha='right', va='bottom',
        bbox=dict(boxstyle='round,pad=0.5', facecolor='white', 
                  edgecolor='gray', alpha=0.8))

# Format y-axis
ax.yaxis.set_major_formatter(plt.FuncFormatter(lambda x, p: f'{int(x):,}'))
ax.set_ylim(0, 28000)
ax.set_yticks(np.arange(0, 28001, 2000))

# Format x-axis
ax.xaxis.set_major_locator(mdates.YearLocator(2))
ax.xaxis.set_major_formatter(mdates.DateFormatter('%b %Y'))
plt.xticks(rotation=0)

# Grid
ax.grid(True, linestyle='--', alpha=0.3, zorder=0)
ax.set_axisbelow(True)

# Background
ax.set_facecolor('#F8F9FA')
fig.patch.set_facecolor('white')

# Tight layout
plt.tight_layout()

# Save the figure
output_file = 'Figures/dev_till_2022.png'
plt.savefig(output_file, dpi=300, bbox_inches='tight', facecolor='white')
print(f"Figure saved to: {output_file}")
print("Caption: Monthly active developers before 2023 (till December 2022)")

# Close the figure to free memory
plt.close()