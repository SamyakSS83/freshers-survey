import json
import os
import csv
import random

# List of colors to use
COLORS = [
    "#091D2C", "#112838", "#13344C", "#1E4460", "#295574", 
    "#37617F", "#4F7793", "#7092AA", "#89A6BB", "#A4BCCC", "#C4D4E1"
]

# JavaScript template for the pie chart
JS_TEMPLATE = '''var ctx = document.getElementById("doughnut{q_num}");

new Chart(ctx, {{
  type: "pie",
  data: {{
    labels: [
      {labels}
    ],
    datasets: [
      {{
        label: "No. of students",
        data: [{data}],
        borderWidth: 1,
        backgroundColor: [
          {colors}
        ],
      }},
    ],
  }},
  options: {{
    plugins: {{
      datalabels: {{
        color: "#fff", // Color of the labels
        anchor: "end", // Anchor the label position at the end of the arc
        align: "start", // Align the label text start
        offset: -10, // Offset the labels to avoid overlapping
        formatter: function (value, context) {{
          return value; // Display the data value
        }}
      }}
    }}
  }}
}});
'''

def generate_pie_charts(json_file, output_dir):
    """Generate pie chart JavaScript files based on the provided JSON data."""
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Load the frequency data
    with open(json_file, 'r', encoding='utf-8') as f:
        all_data = json.load(f)
    
    # CSV data for total respondents
    csv_data = [["Question", "Total Respondents"]]
    
    # Process each question
    for q_key, q_data in all_data.items():
        # Skip empty questions
        if not q_data or "frequencies" not in q_data:
            continue
        
        # Extract question number
        q_num = q_key.replace("Q", "")
        
        # Get the frequencies
        frequencies = q_data.get("frequencies", {})
        
        # Skip questions with more than 11 unique responses
        if len(frequencies) > 11 or len(frequencies) == 0:
            print(f"Skipping {q_key}: {len(frequencies)} unique responses (too many or none)")
            continue
        
        # Sort frequencies by value (descending)
        sorted_freq = sorted(frequencies.items(), key=lambda x: x[1], reverse=True)
        
        # Create labels, data and calculate total respondents
        labels = [f'"{label}"' for label, _ in sorted_freq]
        data = [count for _, count in sorted_freq]
        total_respondents = sum(data)
        
        # Add to CSV data
        csv_data.append([q_key, total_respondents])
        
        # Get random colors (but ensure we have enough)
        chart_colors = COLORS[:len(frequencies)]
        random.shuffle(chart_colors)
        colors = [f'"{color}"' for color in chart_colors]
        
        # Generate the JavaScript content
        js_content = JS_TEMPLATE.format(
            q_num=q_num,
            labels=",\n      ".join(labels),
            data=", ".join(map(str, data)),
            colors=",\n          ".join(colors)
        )
        
        # Write to file
        output_file = os.path.join(output_dir, f"{q_key}.js")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        print(f"Generated chart for {q_key} with {len(frequencies)} responses")
    
    # Write CSV file
    csv_file = os.path.join(output_dir, "total_respondents.csv")
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        writer.writerows(csv_data)
    
    print(f"Generated CSV with total respondents at {csv_file}")

if __name__ == "__main__":
    # Path to the JSON file and output directory
    json_file = "../analysis/frequency_results/all_frequencies.json"
    output_dir = "pie_charts"
    
    generate_pie_charts(json_file, output_dir)
    print("Done!")