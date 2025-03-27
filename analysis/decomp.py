import pandas as pd
import os
import sys
import traceback
from collections import Counter

def analyze_survey(file_path, output_dir="question_results"):
    """
    Analyzes survey responses by department and creates text files for each question.
    """
    try:
        # Read Excel file
        print(f"Reading data from {file_path}...")
        df = pd.read_excel(file_path)
        
        # Ensure output directory exists
        os.makedirs(output_dir, exist_ok=True)
        
        # Get department column name and all unique departments
        dept_col = "What is your department?"
        departments = [str(dept) for dept in df[dept_col].unique()]
        print(f"Found {len(departments)} departments")
        
        # Get all question columns (starting from column F, index 5)
        question_cols = df.columns[5:]
        print(f"Found {len(question_cols)} questions")
        
        # Process each question
        for q_idx, question in enumerate(question_cols, 1):
            print(f"Processing Q{q_idx}: {question[:50]}...")
            
            output_file = os.path.join(output_dir, f"Q{q_idx}.txt")
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(f"Q{q_idx}: {question}\n\n")
                
                # Process each department
                for dept in departments:
                    dept_responses = df[df[dept_col] == dept][question].dropna()
                    
                    # Create a list of string responses
                    string_responses = [str(resp) for resp in dept_responses.tolist()]
                    
                    # Count occurrences of each answer
                    response_counts = dict(Counter(string_responses))
                    
                    # Write to file with proper formatting
                    f.write(f"{dept} : {response_counts}\n\n")
            
            print(f"  → Saved results to {output_file}")
        
        print("Analysis complete!")
        
    except Exception as e:
        print(f"Error: {e}")
        print("Detailed error information:")
        traceback.print_exc()
        return False
    
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python decomp.py <path_to_excel_file> [output_directory]")
        sys.exit(1)
    
    excel_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "question_results"
    
    success = analyze_survey(excel_file, output_dir)
    if not success:
        sys.exit(1)