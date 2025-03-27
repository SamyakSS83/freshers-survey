import pandas as pd
import os
import sys
import json
import traceback
from collections import Counter

def analyze_response_frequencies(file_path, output_dir="frequency_results"):
    """
    Creates dictionaries of response frequencies for each question in the survey.
    Outputs both JSON and readable text files.
    """
    try:
        # Read Excel file
        print(f"Reading data from {file_path}...")
        df = pd.read_excel(file_path)
        
        # Ensure output directory exists
        os.makedirs(output_dir, exist_ok=True)
        
        # Get all question columns (starting from column F, index 5)
        question_cols = df.columns[5:]
        print(f"Found {len(question_cols)} questions")
        
        # Process each question
        for q_idx, question in enumerate(question_cols, 1):
            print(f"Processing Q{q_idx}: {question[:50]}...")
            
            # Get all responses for this question
            responses = df[question].dropna()
            
            # Convert to strings and count
            string_responses = [str(resp) for resp in responses.tolist()]
            response_counts = dict(Counter(string_responses))
            
            # Save as JSON
            json_file = os.path.join(output_dir, f"Q{q_idx}_freq.json")
            with open(json_file, 'w', encoding='utf-8') as f:
                json.dump(response_counts, f, indent=2)
            
            # Save as readable text
            txt_file = os.path.join(output_dir, f"Q{q_idx}_freq.txt")
            with open(txt_file, 'w', encoding='utf-8') as f:
                f.write(f"Q{q_idx}: {question}\n\n")
                
                # Sort by frequency (highest first)
                sorted_responses = sorted(
                    response_counts.items(), 
                    key=lambda x: x[1], 
                    reverse=True
                )
                
                for response, count in sorted_responses:
                    f.write(f"{response}: {count}\n")
            
            print(f"  → Saved frequencies to {json_file} and {txt_file}")
        
        # Create a combined summary file
        summary_file = os.path.join(output_dir, "all_frequencies.json")
        all_frequencies = {}
        
        for q_idx, question in enumerate(question_cols, 1):
            responses = df[question].dropna()
            string_responses = [str(resp) for resp in responses.tolist()]
            response_counts = dict(Counter(string_responses))
            
            question_key = f"Q{q_idx}"
            all_frequencies[question_key] = {
                "question_text": question,
                "frequencies": response_counts
            }
        
        with open(summary_file, 'w', encoding='utf-8') as f:
            json.dump(all_frequencies, f, indent=2)
        
        print(f"Created combined summary at {summary_file}")
        print("Analysis complete!")
        
    except Exception as e:
        print(f"Error: {e}")
        print("Detailed error information:")
        traceback.print_exc()
        return False
    
    return True

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python response_freq.py <path_to_excel_file> [output_directory]")
        sys.exit(1)
    
    excel_file = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else "frequency_results"
    
    success = analyze_response_frequencies(excel_file, output_dir)
    if not success:
        sys.exit(1)