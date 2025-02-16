from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline
#from symptom_matcher import match_symptoms
from thefuzz.process import extractOne  # Correct import

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from Node.js backend

# Load model
model_name = "emilyalsentzer/Bio_ClinicalBERT"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)
classification_pipeline = pipeline("text-classification", model=model, tokenizer=tokenizer)

disease_data = {
    "fever, cough, sore throat": "Flu",
    "fever, muscle pain, skin rash": "Dengue",
    "cough, shortness of breath, chest pain": "Pneumonia",
    "weight loss, frequent urination, increased thirst": "Diabetes",
    "chills, sweating, body aches": "Malaria",
    "runny nose, sneezing, sore throat": "Common Cold",
    "nausea, vomiting, diarrhea": "Food Poisoning",
    "severe headache, sensitivity to light, stiff neck": "Meningitis",
    "persistent cough, blood in sputum, night sweats": "Tuberculosis",
    "frequent heartburn, chest discomfort, acid reflux": "GERD",
    "itchy eyes, sneezing, skin rashes": "Allergies",
    "sore throat, fatigue, headache": "COVID-19"
}
def match_symptoms(user_input):
    best_match, best_score = None, 0
    for symptoms, disease in disease_data.items():
        match_result = extractOne(user_input, [symptoms])
        if match_result:
            match_score = match_result[1]  # Extract match score
            if match_score > best_score:
                best_match, best_score = disease, match_score
    return best_match if best_score > 70 else None  # Set 70% threshold

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symptoms = data.get("symptoms", "").strip().lower()

    if not symptoms:
        return jsonify({"error": "No symptoms provided"}), 400

    # Try fuzzy matching first
    matched_disease = match_symptoms(symptoms)
    
    if matched_disease:
        return jsonify({
            "prediction": matched_disease,
            "confidence": 1.0  # Full confidence if symptoms match
        })

    # Otherwise, use AI model
    result = classification_pipeline(symptoms)
    predicted_label = result[0]["label"]
    confidence = result[0]["score"]

    # Convert label to disease name
    disease_name = label_mapping.get(predicted_label, "Unknown")

    return jsonify({
        "prediction": disease_name,
        "confidence": confidence
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000, debug=True)

