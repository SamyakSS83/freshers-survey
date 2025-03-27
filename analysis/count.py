import pandas as pd
import os
import sys
import traceback
from collections import Counter

def count_departments(file_path, output_file="department_counts.txt"):
    """
    Counts survey respondents by department and outputs the results to a text file.
    """
    try:
        # Read Excel file
        print(f"Reading data from {file_path}...")
        df = pd.read_excel(file_path)
        
        # Get department column name
        dept_col = "What is your department?"
        
        # Count respondents by department using Counter
        dept_counts = Counter(df[dept_col].dropna().astype(str))
        
        # Ensure output directory exists
        output_dir = os.path.dirname(output_file)
        if output_dir:
            os.makedirs(output_dir, exist_ok=True)
        
        # Write results to file
        print(f"Writing department counts to {output_file}...")
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write("Department Counts:\n\n")
            
            # Sort departments by count (highest first)
            for dept, count in dept_counts.most_common():
                f.write(f"{dept}: {count}\n")
            
            # Add total at the end
            f.write(f"\nTotal respondents: {sum(dept_counts.values())}\n")
        
        print("Department counting complete!")
        
    except Exception as e:
        print(f"Error: {e}")
        print("Detailed error information:")
        traceback.print_exc()
        return False
    
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python count.py <path_to_excel_file> [output_file]")
        sys.exit(1)
    
    excel_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else "department_counts.txt"
    
    success = count_departments(excel_file, output_file)
    if not success:
        sys.exit(1)