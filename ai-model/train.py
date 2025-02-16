import torch
import pandas as pd
from transformers import AutoModelForSequenceClassification, AutoTokenizer, Trainer, TrainingArguments
from sklearn.model_selection import train_test_split
from datasets import Dataset

# Load the dataset
df = pd.read_csv("symptom_disease.csv")  # Ensure this file contains 'symptoms' and 'disease' columns

# Encode labels (convert disease names to numerical labels)
disease_labels = {disease: i for i, disease in enumerate(df["disease"].unique())}
df["label"] = df["disease"].map(disease_labels)

# Split data into training and validation sets
train_texts, val_texts, train_labels, val_labels = train_test_split(df["symptoms"], df["label"], test_size=0.2, random_state=42)

# Load the tokenizer and model
model_name = "emilyalsentzer/Bio_ClinicalBERT"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name, num_labels=len(disease_labels))

# Tokenize data
def tokenize_function(texts):
    return tokenizer(texts["symptoms"], padding="max_length", truncation=True)

train_data = Dataset.from_pandas(pd.DataFrame({"symptoms": train_texts, "label": train_labels}))
val_data = Dataset.from_pandas(pd.DataFrame({"symptoms": val_texts, "label": val_labels}))

train_data = train_data.map(tokenize_function, batched=True)
val_data = val_data.map(tokenize_function, batched=True)

# Define training arguments
training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    save_strategy="epoch",
    logging_dir="./logs",
    per_device_train_batch_size=8,
    per_device_eval_batch_size=8,
    num_train_epochs=3,
    weight_decay=0.01
)

# Create Trainer
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_data,
    eval_dataset=val_data
)

# Train the model
trainer.train()

# Save the trained model
model.save_pretrained("./trained_model")
tokenizer.save_pretrained("./trained_model")

print("Training complete. Model saved to './trained_model'")