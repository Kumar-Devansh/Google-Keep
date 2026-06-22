# Add these variables to your Terraform variables.tf file

variable "github_token" {
  description = "GitHub personal access token for cloning private repositories"
  type        = string
  sensitive   = true
  default     = ""
}

variable "mongo_uri" {
  description = "MongoDB Atlas connection URI"
  type        = string
  sensitive   = true
  default     = "mongodb+srv://admin:password@cluster.mongodb.net/googlekeep"
}

variable "jwt_secret" {
  description = "JWT secret key for backend"
  type        = string
  sensitive   = true
  default     = "your-secure-secret-key-change-this"
}

variable "cors_origin" {
  description = "CORS origin for frontend (domain URL)"
  type        = string
  default     = "http://localhost"
}
