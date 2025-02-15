from transformers import AutoModelForSequenceClassification, AutoTokenizer, pipeline
from rapidfuzz.process import extractOne  # Better alternative to fuzzywuzzy
import spacy

# Load a medical NLP model
model_name = "emilyalsentzer/Bio_ClinicalBERT"  # Example of a medical NLP model
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

print("Loading model...")
classification_pipeline = pipeline("text-classification", model=model, tokenizer=tokenizer)
print("Model loaded successfully!")

# Sample symptom-disease mapping
disease_data = {
    "fever, cough, sore throat": "Flu",
    "fever, headache, muscle pain, skin rash": "Dengue",
    "cough, shortness of breath, chest pain, fatigue": "Pneumonia",
    "fatigue, weight loss, frequent urination, increased thirst": "Diabetes",
    "high fever, chills, sweating, body aches": "Malaria",
    "runny nose, sneezing, mild fever, sore throat": "Common Cold",
    "nausea, vomiting, stomach pain, diarrhea": "Food Poisoning",
    "severe headache, sensitivity to light, stiff neck, fever": "Meningitis",
    "persistent cough, blood in sputum, night sweats, weight loss": "Tuberculosis",
    "frequent heartburn, chest discomfort, acid reflux": "GERD",
    "itchy eyes, sneezing, nasal congestion, skin rashes": "Allergies",
    "fever, dry cough, sore throat, fatigue, headache": "COVID-19"
}

# Health tips
health_tips = {
    "Flu": "Drink warm fluids, rest well, take vitamin C, and avoid cold environments.",
    "Dengue": "Stay hydrated, avoid mosquito bites, rest, and monitor platelet count.",
    "Pneumonia": "Seek medical attention, use a humidifier, practice deep breathing, and stay hydrated.",
    "Diabetes": "Maintain a low-carb diet, exercise regularly, monitor blood sugar, and manage stress.",
    "Malaria": "Take prescribed antimalarial medication, use mosquito repellents, and rest adequately.",
    "Common Cold": "Drink warm tea, use steam inhalation, take vitamin C, and get plenty of rest.",
    "Food Poisoning": "Drink electrolyte solutions, avoid solid food for a while, and rest.",
    "Meningitis": "Seek immediate medical attention, stay hydrated, and avoid bright lights.",
    "Tuberculosis": "Complete the full course of antibiotics, eat high-protein food, and avoid crowded areas.",
    "GERD": "Avoid spicy and fatty foods, eat smaller meals, and do not lie down right after eating.",
    "Lupus": "Avoid direct sunlight, eat anti-inflammatory foods, and manage stress levels.",
    "Arthritis": "Maintain an active lifestyle, do gentle stretching exercises, and apply heat/cold therapy.",
    "Stroke": "Seek emergency care, monitor blood pressure, and avoid high-sodium foods.",
    "Heart Attack": "Call emergency services, take aspirin if advised, and rest in a reclined position.",
    "Allergies": "Identify triggers, take antihistamines if necessary, and use air purifiers at home.",
    "IBS": "Avoid trigger foods, eat fiber-rich meals, and manage stress through relaxation techniques.",
    "Depression": "Seek counseling, stay socially active, engage in physical activities, and maintain a healthy sleep cycle.",
    "Anxiety Disorder": "Practice deep breathing exercises, avoid caffeine, and engage in mindfulness activities.",
    "COVID-19": "Wear a mask, practice social distancing, get vaccinated, and maintain proper hygiene.",
    "Type 2 Diabetes": "Control sugar intake, maintain a healthy weight, and engage in regular exercise."
}

wellness_tips = {
        "Flu": "Use saline nasal spray to ease congestion, drink herbal tea for soothing effects, and avoid sharing utensils.",
        "Dengue": "Wear long-sleeved clothing, use mosquito nets while sleeping, and keep surroundings clean to prevent mosquito breeding.",
        "Pneumonia": "Practice good oral hygiene, get vaccinated if eligible, and quit smoking to reduce lung infections.",
        "Diabetes": "Include fiber-rich foods in your diet, stay active throughout the day, and track carbohydrate intake.",
        "Malaria": "Use mosquito repellents even indoors, sleep under treated bed nets, and eliminate standing water around your home.",
        "Common Cold": "Gargle with warm salt water, eat immune-boosting foods like garlic and ginger, and keep your hands away from your face.",
        "Food Poisoning": "Store perishable food at the correct temperature, cook meat thoroughly, and wash fruits and vegetables before consumption.",
        "Meningitis": "Avoid close contact with infected individuals, maintain good personal hygiene, and strengthen your immune system with a healthy diet.",
        "Tuberculosis": "Ensure proper ventilation in your living space, wear a mask in crowded places, and maintain a healthy weight to boost immunity.",
        "GERD": "Sleep with your head slightly elevated, maintain a healthy weight, and chew food thoroughly to aid digestion.",
        "Lupus": "Use stress-reducing techniques like yoga, avoid smoking, and follow an anti-inflammatory diet rich in omega-3 fatty acids.",
        "Arthritis": "Maintain a healthy weight to reduce joint pressure, engage in low-impact activities like swimming, and ensure sufficient vitamin D intake.",
        "Stroke": "Engage in brain-stimulating activities, reduce salt intake, and ensure proper hydration for better circulation.",
        "Heart Attack": "Manage cholesterol levels with healthy fats, practice relaxation techniques to lower stress, and avoid trans fats.",
        "Allergies": "Regularly clean your home to remove allergens, keep pets out of the bedroom, and opt for hypoallergenic bedding.",
        "IBS": "Keep a food diary to identify triggers, drink herbal teas like peppermint or chamomile, and avoid eating too quickly.",
        "Depression": "Expose yourself to natural sunlight daily, keep a gratitude journal, and engage in creative activities to improve mood.",
        "Anxiety Disorder": "Establish a consistent sleep schedule, reduce social media consumption, and practice slow, deep breathing exercises.",
        "COVID-19": "Sanitize frequently touched surfaces, follow a nutrient-rich diet to support immunity, and engage in regular light exercise even at home.",
        "Type 2 Diabetes": "Monitor portion sizes, include more whole grains in meals, and engage in moderate physical activity like brisk walking."
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

def classify_disease(user_input):
    try:
        result = classification_pipeline(user_input)
        return result[0]["label"], result[0]["score"]
    except Exception as e:
        return None, None

def chatbot():
    print("Health Companion Bot: Type 'exit' anytime to stop.")

    while True:  
        print("Health Companion Bot: Welcome to BrainROt chat model.")
        print("\nHealth Companion Bot: Please enter your symptoms (comma-separated).")

        try:
            user_input = input("You: ").strip().lower()
            if user_input == "exit":
                print("Health Companion Bot: Goodbye! Stay healthy. 😊")
                print("Health Companion Bot: BrainRot Chat Hope you healthy and stay brainRot. 😊")
                break  
        except EOFError:
            print("\n[Error] No input received. Exiting...")
            break  

        matched_disease = match_symptoms(user_input)

        if matched_disease:
            print(f"Health Companion Bot: Based on your symptoms, you might have {matched_disease}." )

            #Print the corresponding health tip if available
            if matched_disease in health_tips:
                print(f"Health Tip: {health_tips[matched_disease]}")

            print("Would you like a Additional wellness tip? (yes/no)")
            user_response = input("You: ").strip().lower()
            if user_response == "yes" and matched_disease in wellness_tips:
                print(f"Health Companion Bot: {wellness_tips[matched_disease]}")

        else:
            predicted_disease, confidence = classify_disease(user_input)
            if predicted_disease:
                print(f"Health Companion Bot: Based on AI classification, you might have {predicted_disease} (Confidence: {confidence:.2f}).")
            else:
                print("Health Companion Bot: I couldn't identify a disease. Please consult a doctor for proper diagnosis.")

# Run the chatbot
chatbot()
