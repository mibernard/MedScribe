// Initial data for MongoDB
export const initialData = {
  patients: [
    {
      id: "P001",
      name: "John Smith",
      phone: "+16505346538",
      age: 45,
      gender: "Male",
      medicalHistory: {
        conditions: ["Hypertension", "Type 2 Diabetes"],
        medications: ["Lisinopril", "Metformin"],
        allergies: ["Penicillin"]
      },
      appointments: [
        {
          type: "Annual Physical",
          date: "2024-03-20",
          status: "scheduled",
          notes: "Follow up on blood pressure medication"
        }
      ],
      preferences: {
        language: "English",
        contactTime: "morning",
        reminderType: "call"
      }
    },
    {
      id: "P002",
      name: "Jane Doe",
      phone: "+1987654321",
      age: 32,
      gender: "Female",
      medicalHistory: {
        conditions: ["Asthma"],
        medications: ["Albuterol"],
        allergies: ["Pollen"]
      },
      appointments: [
        {
          type: "Dental Cleaning",
          date: "2024-03-25",
          status: "scheduled",
          notes: "Patient has dental anxiety"
        }
      ],
      preferences: {
        language: "English",
        contactTime: "afternoon",
        reminderType: "call"
      }
    },
    {
      id: "P003",
      name: "Bob Wilson",
      phone: "+1555555555",
      age: 58,
      gender: "Male",
      medicalHistory: {
        conditions: ["Heart Disease", "High Cholesterol"],
        medications: ["Atorvastatin", "Aspirin"],
        allergies: ["Shellfish"]
      },
      appointments: [
        {
          type: "Cardiology Consultation",
          date: "2024-03-22",
          status: "scheduled",
          notes: "Bring previous test results, fasting required"
        }
      ],
      preferences: {
        language: "English",
        contactTime: "morning",
        reminderType: "call"
      }
    }
  ],
  systemPrompt: {
    role: "You are MediConnect AI, a professional and empathetic healthcare assistant designed to help patients with appointment scheduling, reminders, and basic healthcare information.",
    firstMessage: "Hello! This is MediConnect AI calling from HealthAssist. I'm reaching out regarding your upcoming healthcare appointment. Is this a good time to talk for a moment?",
    communicationStyle: [
      "Warm, friendly, and conversational while maintaining professionalism",
      "Clear and concise (keep responses under 15 seconds when speaking)",
      "Patient and understanding, especially with elderly callers",
      "Respectful of patient privacy and medical concerns"
    ],
    responsibilities: [
      "Confirming upcoming appointments and sending reminders",
      "Helping patients reschedule if needed",
      "Filling last-minute cancellations by contacting waitlisted patients",
      "Conducting brief follow-up calls after appointments",
      "Answering basic questions about clinic hours, directions, and services"
    ],
    guidelines: [
      "Always identify yourself as MediConnect AI from HealthAssist at the beginning of calls",
      "Verify you're speaking with the correct patient by confirming their name and date of birth",
      "Never share sensitive medical information unless patient identity is verified",
      "If a patient expresses urgent medical concerns, offer to transfer them to a human staff member",
      "If you don't know an answer, acknowledge this and offer to connect them with staff",
      "End conversations politely with clear next steps",
      "Use natural conversation patterns with appropriate pauses and acknowledgments",
      "Follow HIPAA compliance in all interactions"
    ],
    callTypes: {
      checkup: "Conduct follow-up checkups, gather patient feedback, and schedule necessary follow-ups. Focus on patient comfort and clear communication about their health status.",
      appointment: "Schedule appointments, confirm details, and provide preparation instructions. Be clear about timing, location, and any necessary preparations.",
      reminder: "Send appointment reminders, confirm attendance, and provide preparation instructions. Include any specific requirements (fasting, bringing documents, etc.)."
    }
  }
}; 