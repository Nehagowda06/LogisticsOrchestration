# Logistics AI Deployment

## Google Cloud Run Production Deployment

### Prerequisites
1.  **GCP Project:** Create a project in Google Cloud Console.
2.  **Billing:** Ensure billing is enabled.
3.  **APIs:** Enable Cloud Run, Cloud Build, and Artifact Registry APIs.

### Configuration
1.  Set your Project ID:
    ```bash
    gcloud config set project [PROJECT_ID]
    ```
2.  Authenticate:
    ```bash
    gcloud auth login
    ```

### 1. Deploy Backend
```bash
cd backend
# Build the image
gcloud builds submit --tag gcr.io/[PROJECT_ID]/logistics-backend
# Deploy to Cloud Run
gcloud run deploy logistics-backend \
  --image gcr.io/[PROJECT_ID]/logistics-backend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --env-vars-file .env.yaml
```
*Note: After deployment, copy the Service URL for the frontend configuration.*

### 2. Deploy Frontend
1.  Update `frontend/.env.yaml` with the Backend URL.
2.  Deploy:
```bash
cd ../frontend
# Build the image
gcloud builds submit --tag gcr.io/[PROJECT_ID]/logistics-frontend
# Deploy to Cloud Run
gcloud run deploy logistics-frontend \
  --image gcr.io/[PROJECT_ID]/logistics-frontend \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --env-vars-file .env.yaml
```

## Local Development
```bash
docker-compose up --build
```
