**Afyaclin Health Information Management System**

This is a detailed patient management system that has been built using Next.js,tailwind CSS,postgres sql and flask.The system is designed to manage patient record and health services provided by the doctor.It can be used to store ,retrieve information about all registered patients,and services offered previously.
Features
- Register new patients.
- Create health programs.
- Enroll patients in programs
- View/search patients’ profiles
- Expose patient data via API

**Get Started**
Ensure you have Node.js, npm and PostgreSQL installed on your machine.

 **1.Clone the repository.**

 git clone <repo-url>

**2.Navigate to the project directory.**

cd <cloned-repo>

**3.Install dependencies**

Npm install.

**Running of the project**
Run the following command to start the development server.

Npm run dev.

On your browser go to http://localhost:3000 to view the patient management system.
API Documentation
Authentication & Authorisation
 POST/api/auth/register- registers a new user(admin,doctor and patient)
Request Body:
  {
  "name": "Ann Smiley",
  "User": "doctor",
  "email": "email@example.com",
  "password": "abscg123"
}
POST/api/auth/login- this authenticates the user and issues JWT token.
Request body:
  {
  "email": "email@example.com",
  "password": "passkey123"
}
GET/api/auth/logout - logs out the user.




**Patient Management**

POST/api/patient - creates new patient record.
 Request body:
   {
  "name": "Annah Kim",
  "age": 25,
  "contact": "07123456789",
  "assignedDoctorId": "doctorId"
}
GET/api/patients - used to retrieve all patients that are registered.
GET/api/patients/:id - retrieves details of a specific patient
PUT/api/patients/:id - updates the details of the patient.
DELETE/api/patients/:id - used to remove/delete patient record.
Doctor’s Management
POST/api/doctors - registers a new doctor.
Request body:
 {
  "name": "Dr. Smith",
  "specialty": "Cardiology",
  "contact": "+254723-456-890"
}
GET/api/doctors - retrieves a list of all registered doctors.
GET/api/doctors/:id - retrieves details of a specific doctor.

**AUTHOR**
Harriet Nyabuto


