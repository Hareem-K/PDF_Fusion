from flask import Flask, request, send_file
import os
from PyPDF2 import PdfMerger
from werkzeug.utils import secure_filename

# Initialize the Flask application
app = Flask(__name__)

# Define the folder where uploaded files will be temporarily stored
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Ensure the upload folder exists; create it if it doesn't
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

# Define a route for the PDF merging functionality
@app.route('/merge', methods=['POST'])
def merge_pdfs():
    # Check if 'files[]' is part of the request
    if 'files[]' not in request.files:
        return {"error": "No files part in the request"}, 400

    # Retrieve the list of uploaded files
    files = request.files.getlist('files[]')

    # Ensure at least two PDF files are uploaded
    if len(files) < 2:
        return {"error": "Please upload at least 2 PDF files to merge"}, 400

    # Create a PdfMerger object to handle PDF merging
    merger = PdfMerger()

    # Save each uploaded file and append it to the merger
    for file in files:
        # Check if the file is valid and has a .pdf extension
        if file and file.filename.endswith('.pdf'):
            # Secure the filename and save the file to the upload folder
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            # Append the file to the PdfMerger object
            merger.append(file_path)

    # Define the output filename and path for the merged PDF
    output_filename = "merged.pdf"
    output_path = os.path.join(app.config['UPLOAD_FOLDER'], output_filename)
    
    # Write the merged PDF to the output path
    merger.write(output_path)
    merger.close()

    # Send the merged PDF file as an attachment in the response
    return send_file(output_path, as_attachment=True, download_name=output_filename)

# Run the Flask application in debug mode
if __name__ == '__main__':
    app.run(debug=True)
